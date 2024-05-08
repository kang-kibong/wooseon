import styled from "styled-components";

const Button = ({ type, text, onClick }) => {
  return (
    <ButtonLayout type={type} onClick={onClick}>
      {text}
    </ButtonLayout>
  );
};

export default Button;

const ButtonLayout = styled.button`
  border: none;
  border-radius: 7px;
  outline: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 11px 16px;
  height: 40px;
  background-color: #3182f6;
  color: #fff;
  transition: background-color 0.25s;
  font-size: 15px;

  &:hover {
    background-color: #1957c2;
  }
`;
