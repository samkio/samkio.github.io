import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import SlimHeader from "./SlimHeader";

const Main = styled.main`
  width: 100% - 2em;
  max-width: 800px;
  align-items: center;
  padding: 3em;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
