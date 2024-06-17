import styled from "styled-components";

export const Layout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 900px;
  margin-top: 60px;
  @media screen and (max-width: 1023px) {
    height: 750px;
  }

  @media screen and (max-width: 540px) {
    height: 530px;
  }
  /* padding: 180px 0px 120px 0px; */
`;

export const BackgroundVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

export const VideoContent = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Description = styled.div`
  font-weight: 500;
`;

export const Title = styled.h1`
  font-size: 51px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
  line-height: 1.4;
  color: #fff;

  @media screen and (max-width: 1023px) {
    font-size: 36px;
  }

  @media screen and (max-width: 540px) {
    margin-bottom: 16px;
    font-size: 28px;
    line-height: 44px;
  }
`;

export const Strong = styled.strong`
  color: #007aff;
`;

export const Paragraph = styled.p`
  font-size: 24px;
  line-height: 1.5;
  color: #fff;
  text-align: center;
  margin-bottom: 56px;

  @media screen and (max-width: 1023px) {
    font-size: 22px;
  }

  @media screen and (max-width: 540px) {
    font-size: 18px;
  }
`;

export const ButtonContainer = styled.div`
  button {
    margin: 0 auto;
    font-size: 24px;
    width: 250px;
    height: 64px;

    @media screen and (max-width: 1023px) {
      width: 220px;
      height: 58px;
      font-size: 22px;
    }

    @media screen and (max-width: 540px) {
      width: 200px;
      height: 48px;
      font-size: 18px;
    }
  }
`;
