import ContentWrapper from "@/components/ContentWrapper";
import styled from "@emotion/styled";
import Head from "next/head";

const ResponsiveImageWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: auto;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Samkio.com</title>
        <meta
          name="description"
          content="Samkio's site. A place where I can share my ideas and creativity to the world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentWrapper>
        <ResponsiveImageWrapper>
          <img
            width="100%"
            height="100%"
            alt="Pixel art of Samkio"
            src="images/me.svg"
          />
        </ResponsiveImageWrapper>
      </ContentWrapper>
    </>
  );
}
