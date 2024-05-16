import styled from "styled-components";
import { hyundai, kepco, samsung, sk } from "../../assets/images/companies";
import ReactGA from "react-ga4";
import Button from "../common/Button";

const Catchphrase = () => {
  const handleClick = () => {
    const link = "https://forms.gle/1HVpvz1D6akNnCsi6";
    ReactGA.event({
      category: "Catchphrase 섹션",
      action: "버튼 클릭",
    });
    window.location.href = link;
  };

  return (
    <Layout>
      <Inner>
        <Description>
          <div>
            <h1>
              {`원하는 기업의 멘토에게\n`}
              <DotText>
                <Dot>•</Dot>먼
              </DotText>
              <DotText>
                <Dot>•</Dot>저
              </DotText>
              {` 멘토링 제안을 받아보세요!`}
            </h1>
            <p>{`가고싶은 기업의 멘토,\n저희가 알아서 찾아드릴게요!`}</p>
          </div>
          <Button
            type="button"
            text="멘토링 무료로 시작하기"
            width="240"
            height="64"
            onClick={handleClick}
          />
        </Description>
        <ImageContainer>
          <Image>
            <img src={sk} alt="" />
          </Image>
          <Image>
            <img src={samsung} alt="" />
          </Image>
          <Image>
            <img src={hyundai} alt="" />
          </Image>
          <Image>
            <img src={kepco} alt="" />
          </Image>
        </ImageContainer>
      </Inner>
    </Layout>
  );
};

export default Catchphrase;

const Layout = styled.section`
  white-space: pre;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  height: 790px;
  color: #292d32;

  h1 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 16px;
    line-height: 1.7;
  }

  p {
    font-size: 24px;
    line-height: 1.5;
  }
`;

const DotText = styled.span`
  position: relative;
  display: inline-block;
`;

const Dot = styled.span`
  color: #666cff;
  position: absolute;
  top: -0.8em;
  left: 8px;
`;

const Inner = styled.div`
  display: flex;
  width: 1080px;
  height: 550px;

  button {
    font-weight: 700;
    font-size: 20px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url();
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
`;

const Image = styled.div`
  position: absolute;
  img {
    width: 150px;
  }
  @keyframes motion {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: 5px;
    }
  }

  @keyframes reverse-motion {
    0% {
      margin-top: 5px;
    }
    100% {
      margin-top: 0px;
    }
  }
  &:first-child {
    top: 40%;
    left: -10%;
    img {
      width: 200px;
    }
    animation: motion 0.8s infinite alternate;
  }
  &:nth-child(2) {
    img {
      width: 200px;
    }
    top: 55%;
    left: 35%;
    animation: reverse-motion 0.8s infinite alternate;
  }
  &:nth-child(3) {
    img {
      width: 200px;
    }
    top: 65%;
    left: -15%;
    animation: reverse-motion 0.8s infinite alternate;
  }
  &:nth-child(4) {
    img {
      width: 270px;
    }
    top: 75%;
    left: 40%;
    animation: motion 0.8s infinite alternate;
  }
`;
