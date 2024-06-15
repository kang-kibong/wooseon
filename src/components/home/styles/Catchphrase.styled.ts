import styled from "styled-components";

export const Layout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 24px 60px 24px;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 120px 16px 120px 16px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 500;
  height: 550px;

  @media screen and (max-width: 1023px) {
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonContainer = styled.div`
  button {
    font-size: 24px;
    width: 250px;
    height: 64px;

    @media screen and (max-width: 1023px) {
      width: 100%;
      height: 100%;
      font-size: 22px;
    }

    @media screen and (max-width: 540px) {
      font-size: 18px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 51px;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.8;

  @media screen and (max-width: 1023px) {
    font-size: 36px;
    text-align: center;
  }

  @media screen and (max-width: 540px) {
    padding-top: 0;
    font-size: 28px;
    line-height: 44px;
  }
`;

// primary color
export const Strong = styled.strong`
  color: #007aff;
`;

export const Paragraph = styled.p`
  font-size: 24px;
  line-height: 1.5;
  color: rgb(77, 85, 94);

  @media screen and (max-width: 1023px) {
    text-align: center;
    font-size: 22px;
    margin-bottom: 56px;
  }

  @media screen and (max-width: 540px) {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  width: 500px;
  position: relative;
`;

export const Image = styled.div`
  position: absolute;
  img {
    width: 200px;

    @media screen and (max-width: 1023px) {
      display: none;
    }

    @media screen and (max-width: 540px) {
      display: none;
    }
  }

  @keyframes motion {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: 5px;
    }
  }

  @keyframes reverse-motion {
    0% {
      margin-top: 5px;
    }
    100% {
      margin-top: 0px;
    }
  }

  &:first-child {
    top: 40%;
    left: -10%;
    animation: motion 0.8s infinite alternate;
  }

  &:nth-child(2) {
    top: 55%;
    left: 35%;
    animation: reverse-motion 0.8s infinite alternate;
  }

  &:nth-child(3) {
    top: 65%;
    left: -15%;
    animation: reverse-motion 0.8s infinite alternate;
  }

  &:nth-child(4) {
    img {
      width: 270px;
      @media screen and (max-width: 1023px) {
        width: 200px;
      }

      @media screen and (max-width: 540px) {
        width: 15px;
      }
    }
    top: 75%;
    left: 40%;
    animation: motion 0.8s infinite alternate;
  }
`;
