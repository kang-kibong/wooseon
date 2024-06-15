import { ReactNode } from "react";
import styled from "styled-components";

const Inner = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

export default Inner;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  @media screen and (max-width: 1023px) {
    padding: 0 32px;
  }

  @media screen and (max-width: 540px) {
    padding: 0 16px;
  }
`;
