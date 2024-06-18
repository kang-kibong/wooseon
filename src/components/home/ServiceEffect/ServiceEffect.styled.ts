import styled from "styled-components";

export const Layout = styled.section`
  padding: 120px 0 120px 0;
  line-height: 44px;
  background-color: ${({ theme }) => theme.pallete["light-blue"]};

  @media screen and (max-width: 1023px) {
    padding: 80px 0 80px 0;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.t_h1};
  font-weight: 800;
  line-height: 44px;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.m_h1};
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.d_p};
  color: ${({ theme }) => theme.pallete.gray};
  font-weight: 500;
  text-align: center;
  margin-bottom: 56px;

  @media screen and (max-width: 1023px) {
    font-size: ${({ theme }) => theme.fontSize.t_p};
  }

  @media screen and (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.m_p};
    margin-bottom: 48px;
  }
`;

export const Strong = styled.strong`
  color: ${({ theme }) => theme.pallete.blue};
`;
