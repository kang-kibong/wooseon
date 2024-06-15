import trackAndRedirect from "../../../utils/trackAndRedirect";
import { LINKS } from "../../../utils/constants/links";
import * as S from "./ServiceFlow.styled";
import Step from "./Step/Step";
import { STEPS } from "../../../utils/constants/steps";
import { InViewAnimation, Button } from "../../common";

const ServiceFlow = () => {
  const handleClick = () => {
    const category = "ServiceFlow 섹션";
    const action = "버튼 클릭";
    trackAndRedirect(LINKS.FORM, category, action);
  };

  return (
    <S.Layout>
      <InViewAnimation>
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
          <S.ButtonContainer>
            <Button
              type="button"
              text="지금 바로 입력하고 멘토링 받기"
              onClick={handleClick}
            />
          </S.ButtonContainer>
        </S.InnerCotainer>
      </InViewAnimation>
    </S.Layout>
  );
};

export default ServiceFlow;
