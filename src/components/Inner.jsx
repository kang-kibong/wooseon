import styled from "styled-components";

const Inner = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Inner;

const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
`;
