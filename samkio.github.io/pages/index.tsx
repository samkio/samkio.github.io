import SlimHeader from "@/components/SlimHeader";
import styled from "@emotion/styled";
import Head from "next/head";
import Link from "next/link";
const Container = styled.div`
  width: 75vw;
  max-width: 500px;
`;

const Centrer = styled.div`
  height: calc(100vh - 5em);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Samkio</title>
        <meta
          name="description"
          content="Samkio's site. A place where I can share my ideas and creativity to the world."
        />
      </Head>
      <SlimHeader />
      <Centrer>
        <Container>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="crispEdges"
            viewBox="0 -0.5 37 27"
          >
            <path
              stroke="currentColor"
              d="M9 1h18M9 2h1m16 0h2M9 3h1m1 0h10m1 0h3m1 0h2M9 4h1m1 0h8m1 0h1m1 0h1m1 0h1m1 0h2M9 5h1m1 0h7m1 0h2m1 0h3m1 0h2M9 6h1m1 0h6m1 0h3m1 0h3m1 0h2M9 7h1m1 0h3m1 0h6m1 0h1m1 0h1m1 0h2M9 8h1m1 0h2m1 0h7m1 0h3m1 0h2M9 9h1m1 0h1m1 0h8m5 0h2M9 10h1m1 0h10m1 0h3m1 0h2M9 11h1m16 0h2M9 12h18M1 13h35M1 14h1m33 0h1M1 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h5m1 0h1m1 0h6m2 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1m2 0h1m2 0h1m2 0h1m1 0h1m1 0h1m1 0h1m1 0h2M1 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h5m1 0h1m1 0h6m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2M1 18h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1m1 0h1m2 0h1m1 0h1m4 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2M1 19h35M1 20h1m33 0h1M1 21h1m1 0h10m1 0h20m1 0h1M1 22h1m1 0h1m8 0h1m1 0h1m9 0h1m8 0h1m1 0h1M1 23h1m1 0h10m1 0h1m1 0h16m1 0h1m1 0h1M1 24h1m1 0h1m8 0h1m1 0h1m9 0h1m8 0h1m1 0h1M1 25h35"
            />
          </svg>
          <Link href="/menu">
            <h1>ENTER...</h1>
          </Link>
        </Container>
      </Centrer>
    </>
  );
}
