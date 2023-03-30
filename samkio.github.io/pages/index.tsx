import SlimHeader from "@/components/SlimHeader";
import styled from "@emotion/styled";
import Head from "next/head";

const Container = styled.div`
  max-width: 750px;
  padding: 2em;
`;

const CentreAlign = styled.div`
  display: flex;
  justify-content: center;
`;

const Banner = styled.div`
  width: 100%;
  height: 400px;
  background-color: #212427;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Samkio.com</title>
        <meta
          name="description"
          content="Samkio's site. A place where I can share my ideas and creativity to the world."
        />
      </Head>
      <SlimHeader />
      <Banner />
      <CentreAlign>
        <Container>
          <div>
            <h1>About</h1>
            <p>Hey i&apos;m Samkio welcome to my website!</p>
            <p>A place where I can share my ideas and creativity to the world!</p>
            <p>I hope you enjoy your stay. :)</p>
          </div>
        </Container>
      </CentreAlign>
    </>
  );
}
