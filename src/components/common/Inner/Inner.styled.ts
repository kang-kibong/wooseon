import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  @media screen and (max-width: 1023px) {
    padding: 0 32px;
  }

  @media screen and (max-width: 540px) {
    padding: 0 16px;
  }
`
