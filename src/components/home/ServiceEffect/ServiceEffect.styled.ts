import styled from "styled-components";

export const Layout = styled.section`
  padding: 120px 0 120px 0;
  line-height: 44px;
  background-color: #f2f8ff;

  @media screen and (max-width: 1023px) {
    padding: 80px 0 80px 0;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 800;
  line-height: 44px;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (max-width: 540px) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  font-size: 24px;
  color: #5f5f5f;
  font-weight: 500;
  text-align: center;
  margin-bottom: 90px;

  @media screen and (max-width: 1023px) {
    font-size: 22px;
    margin-bottom: 76px;
  }

  @media screen and (max-width: 540px) {
    font-size: 18px;
  }
`;

export const Strong = styled.strong`
  color: #007aff;
`;

export const MentorProfileContainer = styled.div`
  /* display: flex; */

  @media screen and (max-width: 540px) {
    gap: 12px;
  }
`;
