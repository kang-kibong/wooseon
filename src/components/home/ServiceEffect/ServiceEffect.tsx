import * as S from "./ServiceEffect.styled";
import { InViewAnimation } from "../../common";
import Slider from "react-slick";
import MentorProfile from "./MentorProfile/MentorProfile";

const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const mentorList = [
  {
    id: 1,
    image: "",
    company: "Kakao",
    job: "백엔드 엔지니어",
    specList: ["7년차", "충남대 컴공과 졸업", "Kotlin", "Gradle", "Kubernetes"],
  },
  {
    id: 2,
    image: "",
    company: "Kakao",
    job: "백엔드 엔지니어",
    specList: ["7년차", "충남대 컴공과 졸업", "Kotlin", "Gradle", "Kubernetes"],
  },
  {
    id: 3,
    image: "",
    company: "Kakao",
    job: "백엔드 엔지니어",
    specList: ["7년차", "충남대 컴공과 졸업", "Kotlin", "Gradle", "Kubernetes"],
  },
  {
    id: 4,
    image: "",
    company: "Kakao",
    job: "백엔드 엔지니어",
    specList: ["7년차", "충남대 컴공과 졸업", "Kotlin", "Gradle", "Kubernetes"],
  },
];

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
        {mentorList.map(({ id, image, company, job, specList }) => (
          <MentorProfile key={id} {...{ image, company, job, specList }} />
        ))}
      </InViewAnimation>
    </S.Layout>
  );
};

export default ServiceEffect;
