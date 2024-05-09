import Header from "../components/Header";
import Footer from "../components/Footer";
import Companies from "../assets/images/companies.png";
import Woman from "../assets/images/woman.jpg";
import Inner from "../components/Inner";
import styled from "styled-components";
import Button from "../components/Button";
import useIntersectionObsever from "../hooks/useIntersectionObsever";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [position, setPosition] = useState(0);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInViewport1 = useIntersectionObsever(ref1);
  const isInViewport2 = useIntersectionObsever(ref2);
  const isInViewport3 = useIntersectionObsever(ref3);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onClick = () => {
    const link = "https://forms.gle/1HVpvz1D6akNnCsi6";
    window.location.href = link;
  };

  return (
    <>
      <Header />
      <main>
        <section>
          <ImageContainer
            style={{
              backgroundPosition: `center calc(50% + ${position / 1.5}px)`,
            }}
          >
            <Title>멘토링의 모든것</Title>
          </ImageContainer>
        </section>
        <Section>
          <ContentDiv ref={ref1} className={isInViewport1 ? "animation" : ""}>
            <Inner>
              <Title>우선{"\n"}어떻게 하나요?</Title>
              <CardList>
                <Card>
                  <CardTitle>✍️ 우선 입력만하세요.</CardTitle>
                  <Description>
                    멘티분들은 자신의 스펙을{"\n"}프로필에 간단히 입력하세요.
                  </Description>
                </Card>
                <Card>
                  <CardTitle>👀 알아서 매칭해드려요.</CardTitle>
                  <Description>
                    입력하신 정보를 바탕으로{"\n"}멘토님들을 매칭해드려요.{"\n"}
                    멘토님들의 프로필과 경험들을{"\n"}확인해보세요.
                  </Description>
                </Card>
                <Card>
                  <CardTitle>🗣️ 우선 이야기해봐요.</CardTitle>
                  <Description>
                    매칭된 멘토와의 1:1 멘토링을{"\n"}진행하며 진로 상담부터
                    {"\n"}
                    실질적인 취업 준비까지{"\n"}함께 성장할 수 있어요.
                  </Description>
                </Card>
              </CardList>
            </Inner>
          </ContentDiv>
        </Section>
        <Section>
          <ContentDiv ref={ref2} className={isInViewport2 ? "animation" : ""}>
            <Inner>
              <Title>
                아래 기업에 재직중인{"\n"}멘토님들이{"\n"} 기다리고 있어요.
              </Title>
              <CompaniesContainer>
                <CompaniesImage src={Companies} alt="" />
              </CompaniesContainer>
            </Inner>
          </ContentDiv>
        </Section>
        <Section>
          <ContentDiv ref={ref3} className={isInViewport3 ? "animation" : ""}>
            <Inner>
              <Mentoring>
                <Title>멘토링 구하실건가요?</Title>
                <Description>
                  알아서 찾아드릴게요.{"\n"}
                  멘토링은 이제{"\n"} 우선과 함께 하세요.
                </Description>
                <Button
                  type="button"
                  text="멘토링 받으러가기"
                  onClick={onClick}
                />
              </Mentoring>
            </Inner>
          </ContentDiv>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Home;

const Section = styled.section`
  padding: 150px 0 150px 0;
  &:nth-child(3) {
    background-color: #f2f4f6;
  }
`;

const ImageContainer = styled.div`
  height: 700px;
  background-image: url(${Woman});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;

  h1 {
    color: #fff;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  color: #191f28;
  margin-bottom: 40px;
  white-space: pre-line;
  line-height: 1.3;
`;

const CardList = styled.ul`
  display: flex;
  justify-content: space-around;
  white-space: pre-line;
`;

const Card = styled.li`
  box-sizing: border-box;
  border: 1px solid rgba(0, 27, 55, 0.1);
  border-radius: 12px;
  padding: 30px;
  width: 350px;
  height: 350px;
  transition: all 0.4s;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

  &:hover {
    transform: translate(-5px, -5px);
  }
`;

const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #6b7684;
  line-height: 1.5;
  font-size: 22px;
  white-space: pre-line;
`;

const CompaniesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CompaniesImage = styled.img`
  width: 800px;
`;

const Mentoring = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    margin-bottom: 40px;
  }
`;

const ContentDiv = styled.div`
  &.animation {
    animation-name: opacity;
    animation-duration: 1500ms;

    @keyframes opacity {
      from {
        opacity: 0;
        transform: translateY(0);
      }
      to {
        opacity: 1;
        transform: translateY(-7%);
      }
    }
  }
`;
