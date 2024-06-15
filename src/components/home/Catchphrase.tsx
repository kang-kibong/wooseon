import * as S from "./styles/Catchphrase.styled";
import Button from "../common/Button";
import trackAndRedirect from "../../utils/trackAndRedirect";
import { LINKS } from "../../utils/constants/links";
import { COMPANIES } from "../../utils/constants/companies";

const Catchphrase = () => {
  const handleClick = () => {
    const category = "Catchphrase 섹션";
    const action = "버튼 클릭";
    trackAndRedirect(LINKS.FORM, category, action);
  };

  return (
    <S.Layout>
      <S.Inner>
        <S.Description>
          <S.Title>
            가고싶은 기업의 멘토
            <br />
            저희가
            <S.Strong> 알아서 </S.Strong>
            찾아드릴게요!
          </S.Title>
          <S.Paragraph>
            원하는 기업의 멘토에게
            <br />
            먼저 멘토링 제안을 받아보세요!
          </S.Paragraph>
          <S.ButtonContainer>
            <Button
              type="button"
              text="멘토링 제안 받기"
              onClick={handleClick}
            />
          </S.ButtonContainer>
        </S.Description>
        <S.ImageContainer>
          {COMPANIES.map(({ src, alt }) => (
            <S.Image key={alt}>
              <img src={src} alt={alt} />
            </S.Image>
          ))}
        </S.ImageContainer>
      </S.Inner>
    </S.Layout>
  );
};

export default Catchphrase;
