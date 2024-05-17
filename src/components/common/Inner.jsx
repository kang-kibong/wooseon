import styled from "styled-components";

const Inner = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Inner;

const Container = styled.div`
  width: 1140px;
  margin: 0 auto;

  @media screen and (max-width: 1023px) {
    width: 940px;
  }

  @media screen and (max-width: 540px) {
    width: 450px;
  }
`;
