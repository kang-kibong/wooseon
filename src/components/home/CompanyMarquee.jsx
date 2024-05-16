import Marquee from "react-fast-marquee";
import styled from "styled-components";
import images from "../../assets/images/marquee/index";

const CompanyMarquee = () => {
  return (
    <Layout>
      <h2>많은 기업들의 멘토분들이 기다리고 있어요.</h2>
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

  h2 {
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 24px;
  }
`;

const ImageContainer = styled.div`
  img {
    width: 72px;
    margin-right: 36px;
  }
`;
