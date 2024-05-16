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
          <ContentDiv ref={ref} className={isInViewport ? "animation" : ""}>
            <ImageContainer>
              <img src={Matching} alt="" />
              <Opacity />
            </ImageContainer>
          </ContentDiv>
          <TextContainer>
            <h2>
              {`가고 싶은 기업이 있나요?\n`}
              <Strong>우선</Strong>
              {`이 도와드릴게요!`}
            </h2>
            <p>
              {`50명 이상의 멘토님들이\n당신을 기다리고 있어요!\n당신에게 `}
              <Strong>딱 맞는 멘토링</Strong>
              {`\n저희가 보여드릴게요!`}
            </p>
          </TextContainer>
        </InnerContainer>
      </Inner>
    </Layout>
  );
};

export default ServiceEffect;

const Layout = styled.section`
  padding: 120px 0 120px 0;
  white-space: pre;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  position: relative;
  img {
    width: 375px;
  }
  margin-right: 54px;
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
    font-size: 32px;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 14px;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 32px;
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
