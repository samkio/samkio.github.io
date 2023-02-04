import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const BoxCentred = styled.div`
  display: flex;
  justify-content: center;
`;

const BoxWrapper = styled.div`
  border: 1px solid black;
  background-color: #d4d4d4;
  box-shadow: 10px 10px 0px black;
  padding: 0 10px;
  color: black;
  max-width: 650px;
`;

export default function Box({ children }: PropsWithChildren) {
  return (
    <BoxCentred>
      <BoxWrapper>{children}</BoxWrapper>
    </BoxCentred>
  );
}
