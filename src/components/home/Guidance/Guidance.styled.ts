import styled from "styled-components";

export const Layout = styled.section<{ $image: string }>`
  padding: 250px 0 250px 0;
  /* background-color: #1d1d27; */
  background-image: url(${({ $image }) => $image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;

  @media screen and (max-width: 1023px) {
    padding: 150px 0 150px 0;
  }

  @media screen and (max-width: 540px) {
    padding: 120px 0 120px 0;
  }
`;

export const Inner = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 51px;
  font-weight: 800;
  margin-bottom: 32px;
  line-height: 44px;

  @media screen and (max-width: 1023px) {
    margin-bottom: 16px;
    font-size: 36px;
  }

  @media screen and (max-width: 540px) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 42px;

  @media screen and (max-width: 1023px) {
    font-size: 22px;
    margin-bottom: 34px;
  }

  @media screen and (max-width: 540px) {
    font-size: 18px;
    margin-bottom: 28px;
  }
`;

export const ButtonContainer = styled.div`
  button {
    font-size: 20px;

    @media screen and (max-width: 540px) {
      font-size: 16px;
    }
  }
`;
