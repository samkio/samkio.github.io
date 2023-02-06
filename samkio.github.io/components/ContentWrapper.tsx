import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import ASCIITitle from "./ASCIITitle";
import Box from "./Box";
import NavBar from "./NavBar";
import SocialBar from "./SocialBar";

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
const Header = styled.header`
  text-align: center;
  flex-basis: max(500px, 50%);
  margin-bottom: 10px;
`;
const Main = styled.main`
  flex-basis: max(500px, 50%);
  overflow: auto;
  height: 100%;
  @media (min-width: 1015px) {
    height: 95vh;
  }
`;

export default function ContentWrapper({
  children,
  boxed = false,
}: PropsWithChildren<{ boxed?: boolean }>) {
  return (
    <Content>
      <Header>
        <ASCIITitle />
        <SocialBar />
        <NavBar />
      </Header>
      <Main>{boxed ? <Box>{children}</Box> : <>{children}</>}</Main>
    </Content>
  );
}
