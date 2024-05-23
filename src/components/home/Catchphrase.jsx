import styled from "styled-components";
import { hyundai, kepco, samsung, sk } from "../../assets/images/companies";
import Button from "../common/Button";
import trackAndRedirect from "../../utils/trackAndRedirect";
import { LINKS } from "../../utils/constants/links";

const Catchphrase = () => {
  const handleClick = () => {
    const category = "Catchphrase 섹션";
    const action = "버튼 클릭";

    trackAndRedirect(LINKS.FORM, category, action);
  };

  return (
    <Layout>
      <Inner>
        <Description>
          <div>
            <h1>
              {`가고싶은 기업의 멘토,\n저희가 `}
              <DotText>
                <Dot>•</Dot>알
              </DotText>
              <DotText>
                <Dot>•</Dot>아
              </DotText>
              <DotText>
                <Dot>•</Dot>서
              </DotText>
              {` 찾아드릴게요!`}
            </h1>
            <p>{`원하는 기업의 멘토에게\n먼저 멘토링 제안을 받아보세요!`}</p>
          </div>
          <Button
            type="button"
            text="멘토링 제안 받으러 가기"
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
    font-size: 51px;
    font-weight: 700;
    margin-bottom: 16px;
    line-height: 1.8;
  }

  p {
    font-size: 24px;
    line-height: 1.5;
    color: rgb(77, 85, 94);
  }

  @media screen and (max-width: 1023px) {
    padding-top: 80px;
    height: 500px;

    h1 {
      font-size: 46px;
      margin-bottom: 12px;
      margin-bottom: 64px;
      text-align: center;
    }

    p {
      font-size: 22px;
      line-height: 1.4;
      text-align: center;
      margin-bottom: 64px;
    }
  }

  @media screen and (max-width: 540px) {
    padding-top: 60px;
    height: 350px;

    h1 {
      font-size: 28px;
      margin-bottom: 48px;
    }

    p {
      font-size: 18px;
      margin-bottom: 48px;
    }
  }
`;

const DotText = styled.span`
  position: relative;
  display: inline-block;
`;

const Dot = styled.span`
  color: #3182f6;
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

    @media screen and (max-width: 540px) {
      font-size: 16px;
      width: 200px;
      height: 46px;
    }
  }

  @media screen and (max-width: 1023px) {
    width: 940px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 540px) {
    width: 450px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1023px) {
    justify-content: center;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
`;

const Image = styled.div`
  position: absolute;
  img {
    width: 200px;

    @media screen and (max-width: 1023px) {
      display: none;
    }

    @media screen and (max-width: 540px) {
      display: none;
    }
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
    animation: motion 0.8s infinite alternate;
  }

  &:nth-child(2) {
    top: 55%;
    left: 35%;
    animation: reverse-motion 0.8s infinite alternate;
  }

  &:nth-child(3) {
    top: 65%;
    left: -15%;
    animation: reverse-motion 0.8s infinite alternate;
  }

  &:nth-child(4) {
    img {
      width: 270px;
      @media screen and (max-width: 1023px) {
        width: 200px;
      }

      @media screen and (max-width: 540px) {
        width: 15px;
      }
    }
    top: 75%;
    left: 40%;
    animation: motion 0.8s infinite alternate;
  }
`;
