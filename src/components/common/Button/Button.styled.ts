import styled from 'styled-components'

// primary color
export const Layout = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 100px;
  outline: none;
  padding: 16px 32px;
  cursor: pointer;
  background-color: #007aff;
  color: #fff;
  transition: background-color 0.25s;
  font-size: 15px;
  font-weight: 700;

  @media screen and (max-width: 1023px) {
    font-size: 18px;
  }

  &:hover {
    background-color: #1957c2;
  }
`
