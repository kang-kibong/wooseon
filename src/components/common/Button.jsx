import styled from "styled-components";

const Button = ({ type, text, width, height, onClick }) => {
  return (
    <ButtonLayout type={type} onClick={onClick} width={width} height={height}>
      {text}
    </ButtonLayout>
  );
};

export default Button;

const ButtonLayout = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: none;
  border-radius: 100px;
  outline: none;
  padding: 0 20px;
  cursor: pointer;
  background-color: #3182f6;
  color: #fff;
  transition: background-color 0.25s;
  font-size: 15px;

  &:hover {
    background-color: #1957c2;
  }
`;
