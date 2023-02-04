import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import ASCIITitle from "./ASCIITitle";
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
  text-align: center;
  flex-basis: max(500px, 50%);
`;

export default function ContentWrapper({ children }: PropsWithChildren) {
  return (
    <Content>
      <Header>
        <ASCIITitle />
        <SocialBar />
        <NavBar />
      </Header>
      <Main>{children}</Main>
    </Content>
  );
}
