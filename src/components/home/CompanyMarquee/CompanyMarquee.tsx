import Marquee from "react-fast-marquee";
import marqueeImages from "../../../assets/images/marquee";
import * as S from "./CompanyMarquee.styled";

const CompanyMarquee = () => {
  return (
    <S.Layout>
      <S.Title>
        많은 기업들의 멘토분들이
        <br />
        기다리고 있어요.
      </S.Title>
      <Marquee>
        {marqueeImages.map((image, index) => (
          <S.ImageContainer key={index}>
            <S.Image src={image} />
          </S.ImageContainer>
        ))}
      </Marquee>
    </S.Layout>
  );
};

export default CompanyMarquee;
