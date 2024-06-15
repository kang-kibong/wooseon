import styled from "styled-components";

export const ContentDiv = styled.div`
  &.animation {
    animation-name: up;
    animation-duration: 1500ms;

    @keyframes up {
      from {
        opacity: 0;
        transform: translateY(7%);
      }
      to {
        opacity: 1;
        transform: translateY(0%);
      }
    }
  }
`;

export const Layout = styled.section`
  padding: 120px 0 120px 0;
  line-height: 44px;
  text-align: center;

  @media screen and (max-width: 540px) {
    padding: 80px 0 80px 0;
  }
`;

export const InnerCotainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    font-size: 20px;
    font-weight: 700;

    @media screen and (max-width: 540px) {
      font-size: 16px;
      width: 150px;
      height: 46px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;

  @media screen and (max-width: 540px) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  font-size: 24px;
  margin-bottom: 56px;
  font-weight: 500;
  color: #5f5f5f;

  @media screen and (max-width: 1023px) {
    font-size: 22px;
  }

  @media screen and (max-width: 540px) {
    font-size: 18px;
  }
`;

export const Strong = styled.strong`
  color: #007aff;
  font-weight: 700;
`;

export const StepContainer = styled.div`
  box-sizing: border-box;
  width: 500px;
  margin-bottom: 64px;

  @media screen and (max-width: 1023px) {
    width: 400px;
    margin-bottom: 56px;
  }

  @media screen and (max-width: 540px) {
    padding: 0 32px;
  }
`;

export const ButtonContainer = styled.div`
  button {
    font-size: 20px;
    width: 320px;
    height: 64px;

    @media screen and (max-width: 1023px) {
      width: 100%;
      height: 100%;
    }

    @media screen and (max-width: 540px) {
      font-size: 18px;
    }
  }
`;
