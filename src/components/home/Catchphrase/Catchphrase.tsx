import * as S from "./Catchphrase.styled";
import { Button } from "@components/common";
import { trackEventAndRedirect } from "@utils/trackEventAndRedirect";
import { LINKS } from "@utils/constants/links";
import catchphrazeVideo from "@assets/videos/catchphraze.mp4";
import firstFrame from "@assets/images/first_frame.jpg";

const Catchphrase = () => {
  const handleClick = () => {
    const category = "Catchphrse 섹션";
    const action = "버튼 클릭";
    trackEventAndRedirect(LINKS.FORM, category, action);
  };

  return (
    <S.Layout>
      <S.BackgroundVideo>
        <S.VideoContent muted loop autoPlay playsInline poster={firstFrame}>
          <source src={catchphrazeVideo} type="video/mp4" />
          Your browser is not supp`orted!
        </S.VideoContent>
      </S.BackgroundVideo>
      <S.Description>
        <div>
          <S.Title>
            가고싶은 기업의 멘토
            <br />
            저희가
            <S.Strong>알아서</S.Strong>
            찾아드릴게요!
          </S.Title>
          <S.Paragraph>
            원하는 기업의 멘토에게
            <br />
            먼저 멘토링 제안을 받아보세요!
          </S.Paragraph>
        </div>
        <S.ButtonContainer>
          <Button type="button" text="멘토링 제안 받기" onClick={handleClick} />
        </S.ButtonContainer>
      </S.Description>
    </S.Layout>
  );
};

export default Catchphrase;
