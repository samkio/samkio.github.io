import ContentWrapper from "@/components/ContentWrapper";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Samkio</title>
        <meta
          name="description"
          content="Samkio's site. A place where I can share my ideas and creativity to the world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentWrapper boxed>
        <h1>About</h1>
        <p>This is my website.</p>
        <p>It does not look very pretty right now.</p>
        <p>It barely even functions as a website.</p>
        <p>It doesn&apos;t use any real features modern websites have.</p>
        <p>But that&apos;s okay...</p>
        <p>It&apos;s my personal space.</p>
        <p>To do as I wish.</p>
      </ContentWrapper>
    </>
  );
}
