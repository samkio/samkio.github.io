import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import SlimHeader from "./SlimHeader";

const Content = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  width: 100%;
  max-width: 1000px;
  align-items: center;
  background-color: #ffffff;
  border-left: 5px solid #000000;
  border-right: 5px solid #000000;
`;

export default function ContentWrapper({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <SlimHeader />
      <Content>
        <Main>{children}</Main>
      </Content>
    </>
  );
}
