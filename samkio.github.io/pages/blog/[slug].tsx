import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import {
  POSTS_PATH,
  postFilePaths,
  BlogMatter,
  POST_BANNER_PATH,
} from "@/utils/mdxUtils";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import styled from "@emotion/styled";
import ContentWrapper from "@/components/ContentWrapper";

const BannerContainer = styled.div`
  position: relative;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: 0 20%;
`;

const BlogTitle = styled.h1`
  max-width: 80%;
  position: absolute;
  bottom: 0px;
  left: 10px;
  font-family: PressStart2P, monospace;
  background: rgba(255, 255, 255, 0.5);
  padding: 10px;
  border-radius: 10px;
`;

const BlogContent = styled.div`
  padding: 20px;
  color: #000000;

  a {
    color: gray;
  }
`;

type BlogPostProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: BlogMatter;
  bannerImage: string;
};

export default function BlogPost({
  source,
  frontMatter,
  bannerImage,
}: BlogPostProps) {
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
        <BannerContainer>
          <BannerImage src={bannerImage} />
          <BlogTitle>{frontMatter.title}</BlogTitle>
        </BannerContainer>
        <BlogContent>
          <MDXRemote {...source} />
        </BlogContent>
      </ContentWrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string;
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const bannerImage = `/images/blog/banner/${
    fs.readdirSync(POST_BANNER_PATH).find((file) => file.startsWith(slug)) ??
    "default.jpg"
  }`;

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
      bannerImage,
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
