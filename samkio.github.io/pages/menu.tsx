import SlimHeader from "@/components/SlimHeader";
import styled from "@emotion/styled";
import Head from "next/head";
import Link from "next/link";

const Container = styled.div`
  width: 75vw;
  max-width: 750px;
`;

const Centrer = styled.div`
  height: calc(100vh - 5em);
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function Menu() {
  return (
    <>
      <Head>
        <title>Menu | Samkio.com</title>
        <meta
          name="description"
          content="Samkio's site. A place where I can share my ideas and creativity to the world."
        />
      </Head>
      <SlimHeader />

      <Centrer>
        <Container>
          <Link href="/blog" title="Blog">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              shape-rendering="crispEdges"
              width={"50%"}
            >
              <path
                fill="currentColor"
                d="M1,1h0v1h30v-1z M1,2h0v1h1v-1z M30,2h0v1h1v-1z M1,3h0v1h1v-1z M30,3h0v1h1v-1z M1,4h0v1h1v-1z M5,4h0v1h24v-1z M30,4h0v1h1v-1z M1,5h0v1h1v-1z M4,5h0v1h2v-1z M7,5h0v1h5v-1z M16,5h0v1h1v-1z M28,5h0v1h1v-1z M30,5h0v1h1v-1z M1,6h0v1h1v-1z M8,6h0v1h4v-1z M13,6h0v1h11v-1z M25,6h0v1h2v-1z M28,6h0v1h1v-1z M30,6h0v1h1v-1z M1,7h0v1h1v-1z M4,7h0v1h2v-1z M7,7h0v1h10v-1z M25,7h0v1h2v-1z M28,7h0v1h1v-1z M30,7h0v1h1v-1z M1,8h0v1h1v-1z M4,8h0v1h4v-1z M10,8h0v1h13v-1z M24,8h0v1h3v-1z M28,8h0v1h1v-1z M30,8h0v1h1v-1z M1,9h0v1h1v-1z M4,9h0v1h3v-1z M9,9h0v1h4v-1z M14,9h0v1h3v-1z M24,9h0v1h3v-1z M28,9h0v1h1v-1z M30,9h0v1h1v-1z M1,10h0v1h1v-1z M8,10h0v1h2v-1z M11,10h0v1h2v-1z M16,10h0v1h6v-1z M23,10h0v1h4v-1z M28,10h0v1h1v-1z M30,10h0v1h1v-1z M1,11h0v1h1v-1z M4,11h0v1h5v-1z M11,11h0v1h2v-1z M14,11h0v1h3v-1z M23,11h0v1h3v-1z M28,11h0v1h1v-1z M30,11h0v1h1v-1z M1,12h0v1h1v-1z M4,12h0v1h6v-1z M11,12h0v1h2v-1z M15,12h0v1h6v-1z M22,12h0v1h4v-1z M27,12h0v1h2v-1z M30,12h0v1h1v-1z M1,13h0v1h1v-1z M4,13h0v1h4v-1z M12,13h0v1h2v-1z M15,13h0v1h2v-1z M22,13h0v1h3v-1z M27,13h0v1h1v-1z M30,13h0v1h1v-1z M1,14h0v1h1v-1z M7,14h0v1h1v-1z M9,14h0v1h2v-1z M12,14h0v1h2v-1z M15,14h0v1h5v-1z M21,14h0v1h4v-1z M26,14h0v1h2v-1z M30,14h0v1h1v-1z M1,15h0v1h1v-1z M4,15h0v1h2v-1z M7,15h0v1h1v-1z M9,15h0v1h5v-1z M16,15h0v1h1v-1z M21,15h0v1h3v-1z M27,15h0v1h1v-1z M30,15h0v1h1v-1z M1,16h0v1h1v-1z M4,16h0v1h2v-1z M9,16h0v1h5v-1z M15,16h0v1h4v-1z M20,16h0v1h4v-1z M25,16h0v1h3v-1z M30,16h0v1h1v-1z M1,17h0v1h1v-1z M4,17h0v1h8v-1z M13,17h0v1h4v-1z M20,17h0v1h3v-1z M27,17h0v1h1v-1z M30,17h0v1h1v-1z M1,18h0v1h1v-1z M7,18h0v1h5v-1z M14,18h0v1h4v-1z M19,18h0v1h4v-1z M24,18h0v1h4v-1z M30,18h0v1h1v-1z M1,19h0v1h1v-1z M4,19h0v1h4v-1z M11,19h0v1h2v-1z M14,19h0v1h3v-1z M19,19h0v1h3v-1z M27,19h0v1h1v-1z M30,19h0v1h1v-1z M1,20h0v1h1v-1z M4,20h0v1h2v-1z M9,20h0v1h1v-1z M11,20h0v1h2v-1z M16,20h0v1h2v-1z M19,20h0v1h3v-1z M23,20h0v1h5v-1z M30,20h0v1h1v-1z M1,21h0v1h1v-1z M4,21h0v1h2v-1z M7,21h0v1h3v-1z M11,21h0v1h6v-1z M19,21h0v1h1v-1z M27,21h0v1h1v-1z M30,21h0v1h1v-1z M1,22h0v1h1v-1z M5,22h0v1h5v-1z M11,22h0v1h7v-1z M19,22h0v1h1v-1z M21,22h0v1h7v-1z M30,22h0v1h1v-1z M1,23h0v1h1v-1z M30,23h0v1h1v-1z M1,24h0v1h1v-1z M3,24h0v1h3v-1z M7,24h0v1h1v-1z M10,24h0v1h3v-1z M14,24h0v1h3v-1z M30,24h0v1h1v-1z M1,25h0v1h1v-1z M3,25h0v1h1v-1z M5,25h0v1h1v-1z M7,25h0v1h1v-1z M10,25h0v1h1v-1z M12,25h0v1h1v-1z M14,25h0v1h1v-1z M30,25h0v1h1v-1z M1,26h0v1h1v-1z M3,26h0v1h2v-1z M7,26h0v1h1v-1z M10,26h0v1h1v-1z M12,26h0v1h1v-1z M14,26h0v1h1v-1z M30,26h0v1h1v-1z M1,27h0v1h1v-1z M3,27h0v1h1v-1z M5,27h0v1h1v-1z M7,27h0v1h1v-1z M10,27h0v1h1v-1z M12,27h0v1h1v-1z M14,27h0v1h1v-1z M16,27h0v1h1v-1z M30,27h0v1h1v-1z M1,28h0v1h1v-1z M3,28h0v1h3v-1z M7,28h0v1h2v-1z M10,28h0v1h3v-1z M14,28h0v1h3v-1z M30,28h0v1h1v-1z M1,29h0v1h1v-1z M30,29h0v1h1v-1z M1,30h0v1h30v-1z"
              />
            </svg>
          </Link>
          <Link href="/about" title="About">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              shape-rendering="crispEdges"
              width={"50%"}
            >
              <path
                fill="currentColor"
                d="M1,1h0v1h30v-1z M1,2h0v1h1v-1z M30,2h0v1h1v-1z M1,3h0v1h1v-1z M12,3h0v1h12v-1z M30,3h0v1h1v-1z M1,4h0v1h1v-1z M11,4h0v1h12v-1z M30,4h0v1h1v-1z M1,5h0v1h1v-1z M10,5h0v1h6v-1z M21,5h0v1h1v-1z M30,5h0v1h1v-1z M1,6h0v1h1v-1z M10,6h0v1h3v-1z M21,6h0v1h1v-1z M30,6h0v1h1v-1z M1,7h0v1h1v-1z M10,7h0v1h1v-1z M14,7h0v1h2v-1z M18,7h0v1h2v-1z M21,7h0v1h1v-1z M30,7h0v1h1v-1z M1,8h0v1h1v-1z M10,8h0v1h1v-1z M14,8h0v1h2v-1z M18,8h0v1h2v-1z M21,8h0v1h1v-1z M30,8h0v1h1v-1z M1,9h0v1h1v-1z M10,9h0v1h1v-1z M14,9h0v1h2v-1z M18,9h0v1h2v-1z M21,9h0v1h1v-1z M30,9h0v1h1v-1z M1,10h0v1h1v-1z M9,10h0v1h2v-1z M14,10h0v1h2v-1z M18,10h0v1h2v-1z M21,10h0v1h1v-1z M30,10h0v1h1v-1z M1,11h0v1h1v-1z M9,11h0v1h1v-1z M14,11h0v1h2v-1z M18,11h0v1h2v-1z M21,11h0v1h1v-1z M30,11h0v1h1v-1z M1,12h0v1h1v-1z M9,12h0v1h2v-1z M14,12h0v1h2v-1z M18,12h0v1h2v-1z M21,12h0v1h1v-1z M30,12h0v1h1v-1z M1,13h0v1h1v-1z M10,13h0v1h1v-1z M21,13h0v1h1v-1z M30,13h0v1h1v-1z M1,14h0v1h1v-1z M11,14h0v1h3v-1z M20,14h0v1h2v-1z M30,14h0v1h1v-1z M1,15h0v1h1v-1z M13,15h0v1h3v-1z M18,15h0v1h3v-1z M30,15h0v1h1v-1z M1,16h0v1h1v-1z M11,16h0v1h6v-1z M18,16h0v1h2v-1z M30,16h0v1h1v-1z M1,17h0v1h1v-1z M10,17h0v1h7v-1z M18,17h0v1h4v-1z M30,17h0v1h1v-1z M1,18h0v1h1v-1z M9,18h0v1h14v-1z M30,18h0v1h1v-1z M1,19h0v1h1v-1z M9,19h0v1h14v-1z M30,19h0v1h1v-1z M1,20h0v1h1v-1z M9,20h0v1h14v-1z M30,20h0v1h1v-1z M1,21h0v1h1v-1z M9,21h0v1h14v-1z M30,21h0v1h1v-1z M1,22h0v1h1v-1z M9,22h0v1h14v-1z M30,22h0v1h1v-1z M1,23h0v1h1v-1z M30,23h0v1h1v-1z M1,24h0v1h1v-1z M3,24h0v1h3v-1z M7,24h0v1h3v-1z M11,24h0v1h3v-1z M15,24h0v1h1v-1z M17,24h0v1h1v-1z M19,24h0v1h3v-1z M30,24h0v1h1v-1z M1,25h0v1h1v-1z M3,25h0v1h1v-1z M5,25h0v1h1v-1z M7,25h0v1h1v-1z M9,25h0v1h1v-1z M11,25h0v1h1v-1z M13,25h0v1h1v-1z M15,25h0v1h1v-1z M17,25h0v1h1v-1z M20,25h0v1h1v-1z M30,25h0v1h1v-1z M1,26h0v1h1v-1z M3,26h0v1h3v-1z M7,26h0v1h2v-1z M11,26h0v1h1v-1z M13,26h0v1h1v-1z M15,26h0v1h1v-1z M17,26h0v1h1v-1z M20,26h0v1h1v-1z M30,26h0v1h1v-1z M1,27h0v1h1v-1z M3,27h0v1h1v-1z M5,27h0v1h1v-1z M7,27h0v1h1v-1z M9,27h0v1h1v-1z M11,27h0v1h1v-1z M13,27h0v1h1v-1z M15,27h0v1h1v-1z M17,27h0v1h1v-1z M20,27h0v1h1v-1z M30,27h0v1h1v-1z M1,28h0v1h1v-1z M3,28h0v1h1v-1z M5,28h0v1h1v-1z M7,28h0v1h3v-1z M11,28h0v1h3v-1z M15,28h0v1h3v-1z M20,28h0v1h1v-1z M30,28h0v1h1v-1z M1,29h0v1h1v-1z M30,29h0v1h1v-1z M1,30h0v1h30v-1z"
              />
            </svg>
          </Link>
        </Container>
      </Centrer>
    </>
  );
}
