import * as S from "./ServiceEffect.styled";
import { InViewAnimation } from "../../common";
import Slider from "react-slick";
import MentorProfile from "./MentorProfile/MentorProfile";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import { getSliderSettings } from "../../../utils/getSliderSettings";
import { mentorList } from "../../../utils/constants/mentorList";

const ServiceEffect = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const sliderSettings = getSliderSettings(isDesktopOrLaptop);

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
      <S.SliderContainer>
        <Slider {...sliderSettings}>
          {mentorList.map(({ id, image, company, job, specList }) => (
            <div key={id}>
              <MentorProfile {...{ image, company, job, specList }} />
            </div>
          ))}
        </Slider>
      </S.SliderContainer>
    </S.Layout>
  );
};

export default ServiceEffect;
