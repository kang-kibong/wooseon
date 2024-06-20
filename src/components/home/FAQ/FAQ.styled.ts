import styled from 'styled-components'

export const Layout = styled.section`
  padding: 120px 0 120px 0;

  @media screen and (max-width: 1023px) {
    padding: 80px 0 80px 0;
  }
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.d_h2};
  font-weight: 800;
  text-align: center;
  margin-bottom: 52px;

  @media screen and (max-width: 1023px) {
    font-size: ${({ theme }) => theme.fontSize.t_h1};
  }

  @media screen and (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.m_h1};
    margin-bottom: 40px;
  }
`

export const Question = styled.strong`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  padding: 12px 0;

  @media screen and (max-width: 1023px) {
    font-size: 18px;
    padding: 8px 0;
  }

  @media screen and (max-width: 540px) {
    font-size: 16px;
  }
`

export const Answer = styled.p`
  line-height: 1.4;
  font-size: 18px;
  white-space: pre-line;
  color: rgb(77, 85, 94);

  @media screen and (max-width: 1023px) {
    font-size: 16px;
  }

  @media screen and (max-width: 540px) {
    font-size: 14px;
  }
`
