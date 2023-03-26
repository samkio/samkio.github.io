import styled from "@emotion/styled";
import Link from "next/link";

const Header = styled.header`
  width: 100%;
  background-color: #555555;
  display: flex;
  justify-content: center;
  position: fixed;
  border-bottom: 5px solid #000000;
  z-index: 100;
  top: 0;
`;

const CenterElements = styled.div`
  display: flex;
  height: 100%;
  max-width: 1500px;
  width: 100%;
  padding: 0 10px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const NavLink = styled(Link)`
  font-family: PressStart2P, monospace;
  text-transform: uppercase;
  color: #aaaaaa;
  text-shadow: 3px 3px 0px #000000;
  font-size: 1.4rem;
  text-decoration: none;

  &:hover {
    scale: 1.1;
    color: #ffffff;
  }
`;

const NavTitle = styled(NavLink)`
  font-size: 1.8rem;
`;

const SocialBarIcon = styled.svg`
  filter: drop-shadow(3px 3px 0px #000000);
  color: #aaaaaa;

  &:hover {
    scale: 1.1;
    color: #ffffff;
  }
`;

const SocialBarWrapper = styled.div`
  margin-left: auto;
  display: flex;
  gap: 10px;
  padding: 3px;
`;

export default function SlimHeader() {
  return (
    <Header>
      <CenterElements>
        <Nav>
          <NavTitle href="/">Samkio</NavTitle>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/about">About</NavLink>
        </Nav>

        <SocialBarWrapper>
          <a
            title="GitHub"
            href="https://github.com/samkio"
            target="_blank"
            rel="noreferrer"
          >
            <SocialBarIcon
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 -0.5 10 10"
              shapeRendering="crispEdges"
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="currentColor"
                d="M2 0h6M1 1h8M0 2h2M3 2h4M8 2h2M0 3h2M8 3h2M0 4h2M8 4h2M0 5h2M8 5h2M0 6h1M2 6h1M7 6h3M0 7h2M3 7h1M6 7h4M1 8h2M7 8h2M2 9h1M7 9h1"
              />
            </SocialBarIcon>
          </a>
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/samuelpmartin/"
            target="_blank"
            rel="noreferrer"
          >
            <SocialBarIcon
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 -0.5 10 10"
              shapeRendering="crispEdges"
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="currentColor"
                d="M1 0h8M0 1h10M0 2h2M3 2h7M0 3h10M0 4h2M3 4h1M5 4h1M7 4h3M0 5h2M3 5h1M6 5h1M8 5h2M0 6h2M3 6h1M5 6h2M8 6h2M0 7h2M3 7h1M5 7h2M8 7h2M0 8h2M3 8h1M5 8h2M8 8h2M1 9h8"
              />
            </SocialBarIcon>
          </a>
        </SocialBarWrapper>
      </CenterElements>
    </Header>
  );
}
