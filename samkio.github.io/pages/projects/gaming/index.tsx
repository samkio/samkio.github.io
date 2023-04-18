import ContentWrapper from "@/components/ContentWrapper";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Game Trophy Cabinet | Samkio</title>
        <meta
          name="description"
          content="Samkio's site. A place where I can share my ideas and creativity to the world."
        />
      </Head>
      <ContentWrapper>
        <h1>Game Trophy Cabinet</h1>
        <svg
          style={{ border: "1px solid black" }}
          height="550px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="30" r="25" />
        </svg>
      </ContentWrapper>
    </>
  );
}
