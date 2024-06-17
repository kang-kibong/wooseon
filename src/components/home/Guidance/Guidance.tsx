import trackAndRedirect from "../../../utils/trackAndRedirect";
import { LINKS } from "../../../utils/constants/links";
import { InViewAnimation, Button } from "../../common";
import $image from "../../../assets/images/woman.jpg";
import * as S from "./Guidance.styled";

const Guidance = () => {
  const handleClick = () => {
    const category = "Guidance 섹션";
    const action = "버튼 클릭";
    trackAndRedirect(LINKS.FORM, category, action);
  };

  return (
    <S.Layout {...{ $image }}>
      <InViewAnimation>
        <S.Inner>
          <S.Title>우선, 시작해볼까요?</S.Title>
          <S.Description>
            1분만에 스펙을 입력하고 멘토링 받아보세요!
          </S.Description>
          <S.ButtonContainer>
            <Button
              type="button"
              text="멘토링 시작하기"
              onClick={handleClick}
            />
          </S.ButtonContainer>
        </S.Inner>
      </InViewAnimation>
    </S.Layout>
  );
};

export default Guidance;
