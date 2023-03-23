import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { POSTS_PATH, postFilePaths, BlogMatter } from "@/utils/mdxUtils";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import SlimHeader from "@/components/SlimHeader";
import styled from "@emotion/styled";

const ContentCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin-top: 35px;
  align-items: center;
  background-color: #ffffff;
  border-left: 5px solid #000000;
  border-right: 5px solid #000000;
`;

const BannerContainer = styled.div`
  position: relative;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: 0 20%;
  filter: grayscale(100%) blur(3px);
`;

const BlogTitle = styled.h1`
  position: absolute;
  bottom: 0px;
  left: 10px;
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
      <SlimHeader />
      <ContentCenter>
        <ContentWrapper>
          <BannerContainer>
            <BannerImage src={"/images/blog/crumble.jpg"} />
            <BlogTitle>{frontMatter.title}</BlogTitle>
          </BannerContainer>
          {frontMatter.description && <h2>{frontMatter.description}</h2>}
          <MDXRemote {...source} />
        </ContentWrapper>
      </ContentCenter>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params!.slug}.mdx`);
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
