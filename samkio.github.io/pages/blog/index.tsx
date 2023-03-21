import ContentWrapper from "@/components/ContentWrapper";
import { BlogMatter, postFilePaths, POSTS_PATH } from "@/utils/mdxUtils";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import fs from "fs";
import { GetStaticProps } from "next";

type BlogPostProps = {
  posts: {
    content: string;
    data: BlogMatter;
    filePath: string;
  }[];
};

export default function Blog({ posts }: BlogPostProps) {
  return (
    <>
      <Head>
        <title>Blog | Samkio</title>
        <meta
          name="description"
          content="Samkio's site. A place where I can share my ideas and creativity to the world."
        />
      </Head>
      <ContentWrapper>
        <h1>Blog Posts</h1>
        <ul>
          {posts
            .sort((a, b) => a.data.created.localeCompare(b.data.created))
            .map((post) => (
              <li key={post.filePath}>
                <Link
                  as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
                  href={`/blog/[slug]`}
                >
                  {post.data.title}
                </Link>
              </li>
            ))}
        </ul>
      </ContentWrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
};
