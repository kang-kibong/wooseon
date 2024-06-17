import * as S from "./ServiceEffect.styled";
import { InViewAnimation } from "../../common";
import Slider from "react-slick";

const ServiceEffect = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

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
        <div>
          <div>
            <div>Avatar</div>
            <div>
              <h2>Kakao</h2>
              <p>백엔드 엔지니어</p>
            </div>
            <ul>
              <li>7년차</li>
              <li>충남대 컴공과 졸업</li>
              <li>Kotlin</li>
              <li>Gradle</li>
              <li>Kubernetes</li>
            </ul>
          </div>
        </div>
      </InViewAnimation>
    </S.Layout>
  );
};

export default ServiceEffect;
