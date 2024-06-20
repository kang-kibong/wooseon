import * as S from "./MentorProfile.styled";

interface MetorProfileProps {
  image: string;
  company: string;
  job: string;
  specList: string[];
}

const MentorProfile = ({
  image,
  company,
  job,
  specList,
  ...props
}: MetorProfileProps) => {
  return (
    <S.Layout {...props}>
      <S.InfoContainer>
        <S.Avatar>
          <S.Image src={image} alt={company} />
        </S.Avatar>
        <S.Info>
          <h2>{company}</h2>
          <p>{job}</p>
        </S.Info>
      </S.InfoContainer>
      <S.SpecList>
        {specList.map((spec, index) => (
          <S.SpecListItem key={index}>{spec}</S.SpecListItem>
        ))}
      </S.SpecList>
    </S.Layout>
  );
};

export default MentorProfile;
