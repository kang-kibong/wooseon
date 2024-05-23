import styled from "styled-components";
import Button from "../common/Button";
import Inner from "../common/Inner";
import Arrow from "../../assets/images/arrow.png";
import useIntersectionObsever from "../../hooks/useIntersectionObsever";
import { useRef } from "react";
import trackAndRedirect from "../../utils/trackAndRedirect";
import { LINKS } from "../../utils/constants/links";

const ServiceFlow = () => {
  const ref = useRef(null);
  const isInViewport = useIntersectionObsever(ref);

  const handleClick = () => {
    const category = "Catchphrase 섹션";
    const action = "버튼 클릭";

    trackAndRedirect(LINKS.FORM, category, action);
  };

  return (
    <ContentDiv ref={ref} className={isInViewport ? "animation" : ""}>
      <Layout>
        <Inner>
          <InnerCotainer>
            <TextContainer>
              <h2>
                아직도 멘토를 <Strong>직접</Strong> 찾고 계신가요?
              </h2>
              <p>
                {`우선은 여러분에게\n`}
                <Strong> 딱 맞는 멘토</Strong>
                {`님들을 `}
                <Strong>연결</Strong>
                {`해드립니다!\n 멘토링을 통해 여러분의 꿈을 펼쳐보세요.`}
              </p>
            </TextContainer>
            <StepsContainer>
              <p>나의 스펙 입력하기</p>
              <img src={Arrow} alt="" />
              <p>{`내가 가고싶은\n기업 및 직무 작성하기`}</p>
              <img src={Arrow} alt="" />
              <p>{`매칭된 멘토님과\n멘토링 진행하기`}</p>
            </StepsContainer>
            <Button
              width="170"
              height="56"
              onClick={handleClick}
              text="입력하러 가기"
            />
          </InnerCotainer>
        </Inner>
      </Layout>
    </ContentDiv>
  );
};

export default ServiceFlow;

const Layout = styled.section`
  padding: 120px 0 120px 0;
  white-space: pre;
  text-align: center;
  color: #292d32;

  @media screen and (max-width: 1023px) {
    padding: 80px 0 80px 0;
  }

  @media screen and (max-width: 540px) {
    padding: 60px 0 60px 0;
  }
`;

const InnerCotainer = styled.div`
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

const TextContainer = styled.div`
  h2 {
    font-size: 45px;
    font-weight: 700;
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
    line-height: 1.6;
    margin-bottom: 32px;
    color: rgb(77, 85, 94);

    @media screen and (max-width: 1023px) {
      font-size: 20px;
    }

    @media screen and (max-width: 540px) {
      font-size: 18px;
    }
  }
`;

const StepsContainer = styled.div`
  box-sizing: border-box;
  width: 360px;
  background-color: #000;
  border-radius: 20px;
  padding: 48px;
  margin-bottom: 48px;

  p {
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 32px;
  }

  p:last-child {
    margin-bottom: 0;
  }

  img {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 1023px) {
  }

  @media screen and (max-width: 540px) {
    width: 280px;
    padding: 36px;
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
        transform: translateY(7%);
      }
      to {
        opacity: 1;
        transform: translateY(0%);
      }
    }
  }
`;
