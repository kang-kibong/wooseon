import styled from "styled-components";
import Button from "../common/Button";
import useIntersectionObsever from "../../hooks/useIntersectionObsever";
import { useRef } from "react";
import Inner from "../common/Inner";
import trackAndRedirect from "../../utils/trackAndRedirect";
import { LINKS } from "../../utils/constants/links";

const Guidance = () => {
  const ref3 = useRef(null);
  const isInViewport3 = useIntersectionObsever(ref3);

  const handleClick = () => {
    const category = "Guidance 섹션";
    const action = "버튼 클릭";

    trackAndRedirect(LINKS.FORM, category, action);
  };

  return (
    <Layout>
      <ContentDiv ref={ref3} className={isInViewport3 ? "animation" : ""}>
        <Inner>
          <Mentoring>
            <Title>우선, 시작해볼까요?</Title>
            <Description>
              1분만에 스펙을 입력하고{`\n`} 멘토링을 받아보세요!
            </Description>
            <Button
              type="button"
              text="멘토링 시작하기"
              onClick={handleClick}
              width="200"
              height="56"
            />
          </Mentoring>
        </Inner>
      </ContentDiv>
    </Layout>
  );
};

export default Guidance;

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

const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 40px;
  line-height: 1.3;

  @media screen and (max-width: 1023px) {
    font-size: 42px;
  }

  @media screen and (max-width: 540px) {
    font-size: 36px;
  }
`;

const Description = styled.p`
  line-height: 1.5;
  font-size: 24px;
  white-space: pre-line;
  color: #4d555e;

  @media screen and (max-width: 1023px) {
    font-size: 22px;
  }

  @media screen and (max-width: 540px) {
    font-size: 20px;
  }
`;

const Mentoring = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    margin-bottom: 40px;
  }

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

const ContentDiv = styled.div`
  &.animation {
    animation-name: opacity;
    animation-duration: 1500ms;

    @keyframes opacity {
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
