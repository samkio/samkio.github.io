import styled from "@emotion/styled";
import Link from "next/link";

const NavLink = styled(Link)`
  font-family: PressStart2P, monospace;
  text-transform: uppercase;
  text-shadow: 5px 5px 0px #000000;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export default function NavBar() {
  return (
    <nav>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/about">About</NavLink>
    </nav>
  );
}
