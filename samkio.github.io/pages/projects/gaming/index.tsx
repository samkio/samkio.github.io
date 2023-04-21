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
          height="600px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 600"
        >
          <circle cx="300" cy="170" r="130" />
          {/* <path
            d="M 140 120 Q 110 220 200 300 S 240 330 260 370 S 270 420 260 470 L 270 540 L 200 540 Q 240 510 230 440 S 220 360 150 310 S 70 230 140 120 z"
            strokeWidth="1"
            fill="transparent"
            stroke="red"
          /> */}
          <path
            d="M 170 120 C 120 330 340 270 290 460 L 300 510 L 300 550 L 240 550 C 320 310 50 340 170 120 z"
            strokeWidth="10"
            fill="black"
            stroke="black"
            strokeLinejoin="round"
          ></path>
          <path
            d="M 430 120 C 480 330 260 270 310 460 L 300 510 L 300 550 L 360 550 C 280 310 550 340 430 120 z"
            strokeWidth="10"
            fill="black"
            stroke="black"
            strokeLinejoin="round"
          ></path>
          <path
            d="M 110 310 Q 260 340 250 550 L 220 550 Q 220 410 110 310 Z"
            strokeWidth="10"
            fill="black"
            stroke="black"
            strokeLinejoin="round"
          />
          <path
            d="M 492 310 Q 342 340 352 550 L 382 550 Q 382 410 492 310 Z"
            strokeWidth="10"
            fill="black"
            stroke="black"
            strokeLinejoin="round"
          />
          <path
            d="M 400 530 L 410 570 Q 300 590 190 570 L 200 530 Z"
            strokeWidth="10"
            fill="black"
            stroke="black"
            strokeLinejoin="round"
          />
        </svg>
      </ContentWrapper>
    </>
  );
}
