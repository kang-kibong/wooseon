import styled from "styled-components";

export const Layout = styled.section`
  padding: 120px 0 120px 0;
  background-color: #f2f8ff;

  @media screen and (max-width: 1023px) {
    padding: 80px 0px 80px 0px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: 800;
  line-height: 44px;
  margin-bottom: 48px;

  @media screen and (max-width: 540px) {
    font-size: 28px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  width: 125px;
  height: 125px;
  margin-right: 20px;

  @media screen and (max-width: 1023px) {
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 540px) {
    width: 88px;
    height: 88px;
  }
`;

export const Image = styled.img`
  width: 64px;

  @media screen and (max-width: 1023px) {
    width: 56px;
  }

  @media screen and (max-width: 540px) {
    width: 48px;
  }
`;
