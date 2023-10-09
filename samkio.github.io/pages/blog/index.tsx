import ContentWrapper from "@/components/ContentWrapper";
import { BlogMatter, postFilePaths, POSTS_PATH } from "@/utils/mdxUtils";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import fs from "fs";
import { GetStaticProps } from "next";
import styled from "@emotion/styled";
import DateLine from "@/components/DateLine";

const StyledLink = styled(Link)`
  font-size: 1.2em;
  font-weight: bold;
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PostListItem = styled.li`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

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
        <h1>Blog</h1>
        <PostList>
          {posts
            .sort((a, b) => b.data.created.localeCompare(a.data.created))
            .map((post) => (
              <PostListItem key={post.filePath}>
                <StyledLink
                  as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
                  href={`/blog/[slug]`}
                >
                  {post.data.title}
                </StyledLink>
                <DateLine date={new Date(post.data.created)} text="Posted on" />
                {post.data.description && <p>{post.data.description}</p>}
              </PostListItem>
            ))}
        </PostList>
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
