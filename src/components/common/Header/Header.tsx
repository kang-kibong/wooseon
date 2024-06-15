import * as S from "./Header.styled";
import LogoImage from "../../../assets/images/wooseon-logo.svg";

const Header = () => {
  return (
    <S.Layout>
      <S.Logo src={LogoImage} alt="우선" />
    </S.Layout>
  );
};

export default Header;
