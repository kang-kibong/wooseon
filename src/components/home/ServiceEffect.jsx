import styled from "styled-components";
import Inner from "../common/Inner";
import Matching from "../../assets/images/matching.png";
import useIntersectionObsever from "../../hooks/useIntersectionObsever";
import { useRef } from "react";

const ServiceEffect = () => {
  const ref = useRef(null);
  const isInViewport = useIntersectionObsever(ref);

  return (
    <Layout>
      <Inner>
        <InnerContainer>
          <TextContainer>
            <h2>
              {`가고 싶은 기업이 있나요?\n`}
              <Strong>우선</Strong>
              {`이 도와드릴게요!`}
            </h2>
            <p>
              {`50명 이상의 멘토님들이 당신을 기다리고 있어요!\n당신에게 `}
              <Strong>딱 맞는 멘토링!</Strong>
              {`\n우선이 보여드릴게요!`}
            </p>
          </TextContainer>
          <ContentDiv ref={ref} className={isInViewport ? "animation" : ""}>
            <ImageContainer>
              <img src={Matching} alt="" />
              <Opacity />
            </ImageContainer>
          </ContentDiv>
        </InnerContainer>
      </Inner>
    </Layout>
  );
};

export default ServiceEffect;

const Layout = styled.section`
  padding: 120px 0 120px 0;
  white-space: pre;
  color: #292d32;

  @media screen and (max-width: 1023px) {
    padding: 80px 0 80px 0;
  }

  @media screen and (max-width: 540px) {
    padding: 60px 0 60px 0;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;

  @media screen and (max-width: 540px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  img {
    width: 375px;
    @media screen and (max-width: 1023px) {
      width: 300px;
    }

    @media screen and (max-width: 540px) {
      width: 300px;
    }
  }
  margin-right: 54px;

  @media screen and (max-width: 540px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0;
  }
`;

const Opacity = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 200px;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgb(255, 255, 255) 100%
  );
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 45px;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 24px;

    @media screen and (max-width: 1023px) {
      font-size: 38px;
    }

    @media screen and (max-width: 540px) {
      font-size: 26px;
    }
  }

  p {
    font-size: 24px;
    color: rgb(77, 85, 94);
    line-height: 1.6;
    margin-bottom: 32px;

    @media screen and (max-width: 1023px) {
      font-size: 20px;
    }

    @media screen and (max-width: 540px) {
      font-size: 18px;
    }
  }
`;

const Strong = styled.strong`
  color: #3182f6;
  font-weight: 700;
`;

const ContentDiv = styled.div`
  &.animation {
    animation-name: up;
    animation-duration: 1500ms;
    @keyframes up {
      from {
        opacity: 0;
        transform: translateY(2%);
      }
      to {
        opacity: 1;
        transform: translateY(0%);
      }
    }
  }
`;
