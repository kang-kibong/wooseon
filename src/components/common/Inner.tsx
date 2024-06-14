import styled from "styled-components";

const Inner = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Inner;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  @media screen and (max-width: 1023px) {
    max-width: 800px;
  }

  @media screen and (max-width: 540px) {
    max-width: 350px;
  }
`;
