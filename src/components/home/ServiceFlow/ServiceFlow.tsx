import Button from "../../common/Button";
import useIntersectionObsever from "../../../hooks/useIntersectionObsever";
import { useRef } from "react";
import trackAndRedirect from "../../../utils/trackAndRedirect";
import { LINKS } from "../../../utils/constants/links";
import * as S from "./styles/ServiceFlow.styled";
import Step from "./Step";
import { STEPS } from "../../../utils/constants/steps";

const ServiceFlow = () => {
  const ref = useRef(null);
  const isInViewport = useIntersectionObsever(ref);

  const handleClick = () => {
    const category = "ServiceFlow 섹션";
    const action = "버튼 클릭";
    trackAndRedirect(LINKS.FORM, category, action);
  };

  return (
    <S.ContentDiv ref={ref} className={isInViewport ? "animation" : ""}>
      <S.Layout>
        <S.InnerCotainer>
          <S.Title>
            아직도 멘토를
            <br />
            <S.Strong>직접 </S.Strong>
            찾고 계신가요?
          </S.Title>
          <S.Description>당신에게 딱 맞는 멘토님을 연결해드려요</S.Description>
          <S.StepContainer>
            {STEPS.map(({ id, text }) => (
              <Step key={id} number={id} text={text} />
            ))}
          </S.StepContainer>
          ;
          <S.ButtonContainer>
            <Button
              type="button"
              text="지금 바로 입력하고 멘토링 받기"
              onClick={handleClick}
            />
          </S.ButtonContainer>
        </S.InnerCotainer>
      </S.Layout>
    </S.ContentDiv>
  );
};

export default ServiceFlow;
