import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_PATH = path.join(process.cwd(), 'posts');
const OUTPUT_PATH = path.join(process.cwd(), 'out');

async function generateRssFeed() {
  const { Feed } = await import('feed');

  const feed = new Feed({
    title: "Samkio's Blog",
    description: "Samkio's site. A place where I can share my ideas and creativity to the world.",
    id: "https://samkio.github.io/",
    link: "https://samkio.github.io/",
    language: "en",
    image: "https://samkio.github.io/favicon.ico",
    favicon: "https://samkio.github.io/favicon.ico",
    copyright: `All rights reserved ${new Date().getFullYear()}, Samkio`,
    feedLinks: {
      rss2: "https://samkio.github.io/rss.xml",
      atom: "https://samkio.github.io/atom.xml",
    },
    author: {
      name: "Samkio",
      link: "https://samkio.github.io/",
    },
  });

  // Read all post files
  const postFiles = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path));

  // Parse posts and add to feed
  const posts = postFiles
    .map((fileName) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, fileName), 'utf-8');
      const { content, data } = matter(source);
      const slug = fileName.replace(/\.mdx?$/, '');

      return {
        title: data.title as string,
        description: (data.description as string) || '',
        date: new Date(data.created as string),
        link: `https://samkio.github.io/blog/${slug}`,
        content: content,
        author: [
          {
            name: "Samkio",
            link: "https://samkio.github.io/",
          },
        ],
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());

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
