import * as S from "../common/styles/Button.styled";

interface ButtonProps {
  type: "button";
  text: string;
  onClick: () => void;
}

const Button = ({ type, text, onClick }: ButtonProps) => {
  return (
    <S.Layout type={type} onClick={onClick}>
      {text}
    </S.Layout>
  );
};

export default Button;
