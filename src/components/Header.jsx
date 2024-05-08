import LogoImage from "../assets/images/wooseon-logo.svg";
import styled from "styled-components";

const Header = () => {
  return (
    <Layout>
      <Container>
        <Logo src={LogoImage} alt="우선" />
      </Container>
    </Layout>
  );
};

export default Header;

const Layout = styled.header`
  box-sizing: border-box;
  height: 60px;
  padding: 20px 30px;
  border-bottom: 1px solid rgba(0, 27, 55, 0.1);
`;

const Container = styled.div`
  width: 1048px;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 120px;
`;
