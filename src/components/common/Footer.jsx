import styled from "styled-components";
import CompanyLogo from "../../assets/images/day&night.png";
import Inner from "./Inner";

const Footer = () => {
  return (
    <Layout>
      <Inner>
        <Container>
          <CompanyContainer>
            <img src={CompanyLogo} alt="day&night" />
          </CompanyContainer>
          <CopyrightText>
            {`© 2024 Day & Night Company.\nAll rights reserved.`}
          </CopyrightText>
        </Container>
      </Inner>
    </Layout>
  );
};

export default Footer;

const Layout = styled.footer`
  white-space: pre;
  line-height: 1.2;
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92px;
  background-color: #fff;
  border-top: 1px solid rgba(0, 27, 55, 0.1);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CompanyContainer = styled.div`
  flex-grow: 1;
  & img {
    width: 100px;
  }
  margin-right: 24px;
`;

const CopyrightText = styled.p`
  color: #333;
  display: flex;
  flex-grow: 2;

  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;
