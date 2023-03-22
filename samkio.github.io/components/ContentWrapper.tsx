import styled from "@emotion/styled";
import Link from "next/link";
import { PropsWithChildren } from "react";
import NavBar from "./NavBar";
import SocialBar from "./SocialBar";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  text-align: center;
  max-width: 500px;
  margin-bottom: 10px;
`;

const Main = styled.main`
  max-width: 1000px;
  padding: 0 10px;
`;

const Title = styled.span`
  font-size: 3rem;
  font-family: PressStart2P, monospace;
  text-shadow: 5px 5px 0px #000000;
`;

export default function ContentWrapper({
  children,
}: PropsWithChildren<{ boxed?: boolean }>) {
  return (
    <Content>
      <Header>
        <Link href="/">
          <Title>SAMKIO</Title>
        </Link>
        <SocialBar />
        <NavBar />
      </Header>
      <Main>{children}</Main>
    </Content>
  );
}
