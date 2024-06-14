import Marquee from "react-fast-marquee";
import styled from "styled-components";
import images from "../../assets/images/marquee/index";

const CompanyMarquee = () => {
  return (
    <Layout>
      <h2>{`많은 기업들의 멘토분들이\n기다리고 있어요.`}</h2>
      <Marquee>
        {images.map((image, index) => (
          <ImageContainer key={index}>
            <img src={image} />
          </ImageContainer>
        ))}
      </Marquee>
    </Layout>
  );
};

export default CompanyMarquee;

const Layout = styled.section`
  padding: 120px 0 120px 0;
  color: #292d32;
  white-space: pre;

  h2 {
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 48px;

    @media screen and (max-width: 1023px) {
      font-size: 38px;
    }

    @media screen and (max-width: 540px) {
      font-size: 26px;
    }
  }
`;

const ImageContainer = styled.div`
  img {
    width: 100px;
    margin-right: 36px;

    @media screen and (max-width: 1023px) {
      width: 56px;
      margin-right: 28px;
    }

    @media screen and (max-width: 540px) {
      font-size: 18px;
      width: 48px;
      margin-right: 24px;
    }
  }
`;
