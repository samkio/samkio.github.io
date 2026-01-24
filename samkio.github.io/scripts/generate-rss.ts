import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

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
        author: [
          {
            name: "Samkio",
            link: `${SITE_URL}/`,
          },
        ],
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

  // Write RSS feed
  fs.writeFileSync(path.join(OUTPUT_PATH, 'rss.xml'), feed.rss2());

  // Write Atom feed
  fs.writeFileSync(path.join(OUTPUT_PATH, 'atom.xml'), feed.atom1());

  console.log('✓ RSS and Atom feeds generated successfully!');
}

generateRssFeed().catch(console.error);
