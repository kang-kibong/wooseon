import styled from 'styled-components'

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
  z-index: 9;

  @media screen and (max-width: 1023px) {
    height: 56px;
    padding-left: 20px;
  }
`

export const Logo = styled.img`
  width: 120px;

  @media screen and (max-width: 1023px) {
    width: 92px;
  }
`
