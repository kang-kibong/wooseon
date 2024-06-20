import styled from 'styled-components'

export const Layout = styled.footer`
  white-space: pre;
  line-height: 1.2;
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92px;
  background-color: #fff;
  border-top: 1px solid rgba(0, 27, 55, 0.1);
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CompanyContainer = styled.div`
  flex-grow: 1;
  & img {
    width: 100px;
    @media screen and (max-width: 1023px) {
      width: 80px;
    }

    @media screen and (max-width: 540px) {
      width: 60px;
    }
  }
  margin-right: 24px;
`

export const CopyrightText = styled.p`
  color: #929294;
  display: flex;
  flex-grow: 2;

  font-size: 14px;

  @media screen and (max-width: 1023px) {
    font-size: 12px;
  }

  @media screen and (max-width: 540px) {
    font-size: 10px;
  }
`
