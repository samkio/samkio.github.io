import styled from "@emotion/styled";
import Link from "next/link";

const Header = styled.header`
  width: 100% - 4px;
  height: 3em;
  padding: 2px;
`;

const RightFloat = styled.div`
  float: right;
  height: 100%;
  margin-right: 0.5em;
`;

export default function SlimHeader() {
  return (
    <Header>
      <Link href="/" title="Home">
        <svg
          viewBox="0 0 4 6"
          height={"100%"}
          stroke="currentColor"
          strokeLinecap="square"
        >
          <path d="M 1 5 h 2 v -2 h -2 v -2 h 2 v" fill="none" />
        </svg>

        <svg
          viewBox="0 0 4 6"
          height={"100%"}
          stroke="currentColor"
          strokeLinecap="square"
        >
          <path d="M 1 5 v -4 h 2 v 4" fill="none" />
          <line x1="1" y1="3" x2="3" y2="3" />
        </svg>

        <svg
          viewBox="0 0 6 6"
          height={"100%"}
          stroke="currentColor"
          strokeLinecap="square"
        >
          <path d="M 1 5 v -4 h 4 v 4" fill="none" />
          <line x1="3" y1="1" x2="3" y2="5" />
        </svg>

        <svg
          viewBox="0 0 4 6"
          height={"100%"}
          stroke="currentColor"
          strokeLinecap="square"
        >
          <line x1="1" y1="1" x2="1" y2="5" />
          <line x1="3" y1="1" x2="3" y2="2" />
          <line x1="3" y1="4" x2="3" y2="5" />
          <line x1="1" y1="3" x2="2" y2="3" />
        </svg>

        <svg
          viewBox="0 0 2 6"
          height={"100%"}
          stroke="currentColor"
          strokeLinecap="square"
        >
          <line x1="1" y1="1" x2="1" y2="5" />
        </svg>

        <svg
          viewBox="0 0 4 6"
          height={"100%"}
          stroke="currentColor"
          strokeLinecap="square"
        >
          <path d="M 1 5 v -4 h 2 v 4 z" fill="none" />
        </svg>
      </Link>
      <RightFloat>
        <a
          title="GitHub"
          href="https://github.com/samkio"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={"100%"}
            viewBox="-1 -1.5 12 12"
            shapeRendering="crispEdges"
          >
            <path
              stroke="currentColor"
              d="M2 0h6M1 1h8M0 2h2M3 2h4M8 2h2M0 3h2M8 3h2M0 4h2M8 4h2M0 5h2M8 5h2M0 6h1M2 6h1M7 6h3M0 7h2M3 7h1M6 7h4M1 8h2M7 8h2M2 9h1M7 9h1"
            />
          </svg>
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/samuelpmartin/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={"100%"}
            viewBox="-1 -1.5 12 12"
            shapeRendering="crispEdges"
          >
            <path
              stroke="currentColor"
              d="M1 0h8M0 1h10M0 2h2M3 2h7M0 3h10M0 4h2M3 4h1M5 4h1M7 4h3M0 5h2M3 5h1M6 5h1M8 5h2M0 6h2M3 6h1M5 6h2M8 6h2M0 7h2M3 7h1M5 7h2M8 7h2M0 8h2M3 8h1M5 8h2M8 8h2M1 9h8"
            />
          </svg>
        </a>
      </RightFloat>
    </Header>
  );
}
