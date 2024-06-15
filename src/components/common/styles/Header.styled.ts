import styled from "styled-components";

export const Layout = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-bottom: 1px solid rgba(0, 27, 55, 0.1);
  z-index: 9;

  @media screen and (max-width: 1023px) {
    height: 56px;
    padding-left: 20px;
  }
`;

export const Logo = styled.img`
  width: 120px;

  @media screen and (max-width: 1023px) {
    width: 92px;
  }
`;
