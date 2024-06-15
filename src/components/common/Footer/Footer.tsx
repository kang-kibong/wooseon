import * as S from "./Footer.styled";
import CompanyLogo from "../../../assets/images/day&night.png";
import Inner from "../Inner/Inner";

const Footer = () => {
  return (
    <S.Layout>
      <Inner>
        <S.Container>
          <S.CompanyContainer>
            <img src={CompanyLogo} alt="day&night" />
          </S.CompanyContainer>
          <S.CopyrightText>
            © 2024 Day & Night Company. <br />
            All rights reserved.
          </S.CopyrightText>
        </S.Container>
      </Inner>
    </S.Layout>
  );
};

export default Footer;
