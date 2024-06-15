import * as S from "./ServiceEffect.styled";
import Inner from "../../common/Inner/Inner";
import Matching from "../../../assets/images/matching.png";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import { useRef } from "react";

const ServiceEffect = () => {
  const ref = useRef(null);
  const isInViewport = useIntersectionObserver(ref);

  return (
    <S.Layout>
      <Inner>
        <S.InnerContainer>
          <S.TextContainer>
            <h2>
              {`가고 싶은 기업이 있나요?\n`}
              <S.Strong>우선</S.Strong>
              {`이 도와드릴게요!`}
            </h2>
            <p>
              {`50명 이상의 멘토님들이 당신을 기다리고 있어요!\n당신에게 `}
              <S.Strong>딱 맞는 멘토링!</S.Strong>
              {`\n우선이 보여드릴게요!`}
            </p>
          </S.TextContainer>
          <S.ContentDiv ref={ref} className={isInViewport ? "animation" : ""}>
            <S.ImageContainer>
              <img src={Matching} alt="" />
              <S.Opacity />
            </S.ImageContainer>
          </S.ContentDiv>
        </S.InnerContainer>
      </Inner>
    </S.Layout>
  );
};

export default ServiceEffect;
