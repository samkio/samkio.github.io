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
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimatedSVG = styled.svg`
  @media (prefers-reduced-motion: no-preference) {
    @keyframes wiggle {
      0 {
        rotate: 0deg;
      }
      50% {
        rotate: 0deg;
      }
      60% {
        rotate: 7deg;
      }
      70% {
        rotate: -7deg;
      }
      80% {
        rotate: 4deg;
      }
      90% {
        rotate: -2deg;
      }
      100% {
        rotate: 0deg;
      }
    }

    @keyframes float {
      0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, 15px);
      }
      100% {
        transform: translate(0, -0px);
      }
    }

    animation: wiggle 5s ease-in-out infinite, float 5s ease-in-out infinite;
  }
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
      <Banner>
        <AnimatedSVG
          height="80%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 80 75"
        >
          <defs>
            <clipPath id="bored-eyes">
              <rect x="0" y="40" width="100" height="40" />
            </clipPath>

            <clipPath id="happy-eyes">
              <rect x="0" y="0" width="100" height="40" />
            </clipPath>

            <mask id="hole">
              <rect width="100%" height="100%" fill="white" />
              <circle cx="40" cy="40" r="21" fill="black" />
            </mask>
          </defs>

          {/* <!-- Body --> */}
          <g mask="url(#hole)">
            <circle cx="40" cy="37" r="33" fill="currentColor" />
            <ellipse cx="16" cy="55" rx="7" ry="12" fill="currentColor" />
            <ellipse cx="64" cy="55" rx="7" ry="12" fill="currentColor" />
          </g>

          {/* <!-- Eyes --> */}
          <g clipPath="url(#happy-eyes)" id="eyes">
            <circle cx="30" cy="40" r="8" fill="currentColor" />
            <circle cx="50" cy="40" r="8" fill="currentColor" />
          </g>

          {/* <!-- Boost -->
    <!-- <ellipse cx="50" cy="76" rx="14" ry="2" fill="none" stroke-width="3" stroke="black" />
    <ellipse cx="50" cy="84" rx="12" ry="2" fill="none" stroke-width="3" stroke="black" /> --> */}
        </AnimatedSVG>
      </Banner>
      <CentreAlign>
        <Container>
          <div>
            <h1>About</h1>
            <p>Hey i&apos;m Samkio welcome to my website!</p>
            <p>
              A place where I can share my ideas and creativity to the world!
            </p>
            <p>I hope you enjoy your stay. :)</p>
          </div>
        </Container>
      </CentreAlign>
    </>
  );
}
