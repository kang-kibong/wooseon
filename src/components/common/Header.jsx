import LogoImage from "../../assets/images/wooseon-logo.svg";
import styled from "styled-components";

const Header = () => {
  return (
    <Layout>
      <Logo src={LogoImage} alt="우선" />
    </Layout>
  );
};

export default Header;

const Layout = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  height: 60px;
  padding: 20px 30px;
  border-bottom: 1px solid rgba(0, 27, 55, 0.1);
  z-index: 9;

  @media screen and (max-width: 1023px) {
    height: 56px;
  }

  @media screen and (max-width: 540px) {
    height: 52px;
  }
`;

const Logo = styled.img`
  width: 120px;
  @media screen and (max-width: 1023px) {
    width: 92px;
  }

  @media screen and (max-width: 540px) {
    width: 80px;
  }
`;
