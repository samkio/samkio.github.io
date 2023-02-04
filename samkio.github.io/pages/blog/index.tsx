import ContentWrapper from "@/components/ContentWrapper";
import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Samkio</title>
        <meta
          name="description"
          content="Samkio's site. A place where I can share my ideas and creativity to the world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentWrapper>
        <h1>Blog Posts</h1>
        <ul>
          <li>
            <Link href="blog/living-with-the-loading-bar">
              Living with the loading bar
            </Link>
          </li>
          <li>
            <Link href="blog/crumble-on-rt-minecraft">
              Crumble in Minecraft
            </Link>
          </li>
          <li>
            <Link href="blog/creative-freedom">Creative Freedom</Link>
          </li>
        </ul>
      </ContentWrapper>
    </>
  );
}
