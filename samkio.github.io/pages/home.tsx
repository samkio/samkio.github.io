import styled from "@emotion/styled";
import Head from "next/head";

const TVNoise = styled.div`
  width: 220px;
  height: 155px;
  margin: auto;
  border-radius: 10px;
  background-image: repeating-radial-gradient(
    circle at 17% 32%,
    white,
    black 0.00085px
  );
  background-position: center;
  animation: back 5s linear infinite;
  position: absolute;
  top: 375px;
  left: 240px;
  box-shadow: 0 0 200px white, 0 0 400px white;

  @keyframes back {
    from {
      background-size: 100% 100%;
    }
    to {
      background-size: 200% 200%;
    }
  }
`;

const Container = styled.div`
  height: 100%;
  position: relative;
`;

const Centerer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f0d1a;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>About | Samkio</title>
        <meta
          name="description"
          content="Samkio's site. A place where I can share my ideas and creativity to the world."
        />
      </Head>
      <Centerer>
        <Container>
          <img
            alt=""
            src="https://i.pinimg.com/736x/30/08/b8/3008b879802a63b92b22d2a6e0ff9010.jpg"
          />
          <TVNoise />
        </Container>
      </Centerer>
    </>
  );
}
