import styled from "styled-components";

export const Layout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;

  @media screen and (max-width: 1023px) {
    height: 750px;
  }

  @media screen and (max-width: 540px) {
    height: 530px;
  }
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
  font-size: ${({ theme }) => theme.fontSize.d_h1};
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
  line-height: 1.4;
  color: ${({ theme }) => theme.pallete.white};

  @media screen and (max-width: 1023px) {
    font-size: ${({ theme }) => theme.fontSize.t_h1};
  }

  @media screen and (max-width: 540px) {
    margin-bottom: 16px;
    font-size: ${({ theme }) => theme.fontSize.m_h1};
    line-height: 44px;
  }
`;

export const Strong = styled.strong`
  color: ${({ theme }) => theme.pallete.blue};
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.d_p};
  line-height: 1.5;
  color: ${({ theme }) => theme.pallete.white};
  text-align: center;
  margin-bottom: 56px;

  @media screen and (max-width: 1023px) {
    font-size: ${({ theme }) => theme.fontSize.t_p};
  }

  @media screen and (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.m_p};
  }
`;

export const ButtonContainer = styled.div`
  button {
    margin: 0 auto;
    font-size: ${({ theme }) => theme.fontSize.d_p};
    width: 250px;
    height: 64px;

    @media screen and (max-width: 1023px) {
      width: 220px;
      height: 58px;
      font-size: ${({ theme }) => theme.fontSize.t_p};
    }

    @media screen and (max-width: 540px) {
      width: 200px;
      height: 48px;
      font-size: ${({ theme }) => theme.fontSize.m_p};
    }
  }
`;
