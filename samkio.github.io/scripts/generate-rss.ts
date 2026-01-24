import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { xml2js, js2xml, ElementCompact } from 'xml-js';

const POSTS_PATH = path.join(process.cwd(), 'posts');
const OUTPUT_PATH = path.join(process.cwd(), 'out');
const SITE_URL = 'https://samkio.com';

// Convert relative URLs to absolute URLs
function convertRelativeUrls(html: string, baseUrl: string): string {
  return html
    .replace(/src=&quot;\/([^&]+)&quot;/g, `src=&quot;${baseUrl}/$1&quot;`)
    .replace(/href=&quot;\/([^&]+)&quot;/g, `href=&quot;${baseUrl}/$1&quot;`);
}

async function generateRssFeed() {
  const { Feed } = await import('feed');

  const feed = new Feed({
    title: "Samkio's Blog",
    description: "Samkio's site. A place where I can share my ideas and creativity to the world.",
    id: `${SITE_URL}/`,
    link: `${SITE_URL}/`,
    language: "en",
    favicon: `${SITE_URL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Samkio`,
    feedLinks: {
      rss2: `${SITE_URL}/rss.xml`,
      atom: `${SITE_URL}/atom.xml`,
    },
    author: {
      name: "Samkio",
      link: `${SITE_URL}/`,
    },
  });

  // Read all post files
  const postFiles = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path));

  // Parse posts and add to feed
  const posts = await Promise.all(
    postFiles.map(async (fileName) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, fileName), 'utf-8');
      const { content, data } = matter(source);
      const slug = fileName.replace(/\.mdx?$/, '');

      // Convert markdown to HTML
      const htmlContent = await marked(content);
      // Convert relative URLs to absolute
      const absoluteContent = convertRelativeUrls(htmlContent, SITE_URL);

      return {
        title: data.title as string,
        description: (data.description as string) || '',
        date: new Date(data.created as string),
        link: `${SITE_URL}/blog/${slug}`,
        content: absoluteContent,
      };
    })
  );

  posts.sort((a, b) => b.date.getTime() - a.date.getTime());

  // Add posts to feed
  posts.forEach((post) => {
    feed.addItem(post);
  });

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_PATH)) {
    fs.mkdirSync(OUTPUT_PATH, { recursive: true });
  }

  // Generate RSS feed and add dc:creator tags using XML parsing
  const rssXml = feed.rss2();
  const rssObj = xml2js(rssXml, { compact: true }) as ElementCompact;

  // Add Dublin Core and Atom namespaces
  if (rssObj.rss && rssObj.rss._attributes) {
    rssObj.rss._attributes['xmlns:dc'] = 'http://purl.org/dc/elements/1.1/';
    rssObj.rss._attributes['xmlns:atom'] = 'http://www.w3.org/2005/Atom';
  }

  // Add atom:link with rel="self" to channel
  if (rssObj.rss?.channel) {
    rssObj.rss.channel['atom:link'] = {
      _attributes: {
        href: `${SITE_URL}/rss.xml`,
        rel: 'self',
        type: 'application/rss+xml'
      }
    };
  }

  // Add dc:creator to each item
  if (rssObj.rss?.channel?.item) {
    const items = Array.isArray(rssObj.rss.channel.item)
      ? rssObj.rss.channel.item
      : [rssObj.rss.channel.item];

    items.forEach((item: ElementCompact) => {
      item['dc:creator'] = { _text: 'Samkio' };
    });
  }

  // Convert back to XML
  const modifiedRss = js2xml(rssObj, { compact: true, spaces: 2 });

  // Write RSS feed
  fs.writeFileSync(path.join(OUTPUT_PATH, 'rss.xml'), modifiedRss);

  // Write Atom feed
  fs.writeFileSync(path.join(OUTPUT_PATH, 'atom.xml'), feed.atom1());

  console.log('✓ RSS and Atom feeds generated successfully!');
}

generateRssFeed().catch(console.error);
