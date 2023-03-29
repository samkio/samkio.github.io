import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { POSTS_PATH, postFilePaths, BlogMatter } from "@/utils/mdxUtils";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import styled from "@emotion/styled";
import ContentWrapper from "@/components/ContentWrapper";

const BlogTitle = styled.h1`
  font-family: PressStart2P, monospace;
`;

type BlogPostProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: BlogMatter;
};

export default function BlogPost({ source, frontMatter }: BlogPostProps) {
  return (
    <>
      <Head>
        <title>{`${frontMatter.title} | Samkio`}</title>
        <meta
          name="description"
          content="Samkio's site. A place where I can share my ideas and creativity to the world."
        />
      </Head>
      <ContentWrapper>
        <BlogTitle>{frontMatter.title}</BlogTitle>
        <MDXRemote {...source} />
      </ContentWrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string;
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
