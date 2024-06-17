import * as S from "./ServiceEffect.styled";
import { InViewAnimation } from "@components/common";
import MentorProfileSlider from "./MentorProfileSlider/MentorProfileSlider";

const ServiceEffect = () => {
  return (
    <S.Layout>
      <InViewAnimation>
        <div>
          <S.Title>
            가고 싶은 기업이 있나요?
            <br />
            <S.Strong>우선</S.Strong>이 도와드릴게요!
          </S.Title>
          <S.Description>50명 이상의 멘토님들이 기다리고 있어요.</S.Description>
        </div>
      </InViewAnimation>
      <MentorProfileSlider />
    </S.Layout>
  );
};

export default ServiceEffect;
