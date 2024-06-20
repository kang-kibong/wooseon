import * as S from './Button.styled'

interface ButtonProps {
  type: 'button'
  text: string
  onClick: () => void
}

const Button = ({ type, text, onClick, ...props }: ButtonProps) => {
  return (
    <S.Layout type={type} onClick={onClick} {...props}>
      {text}
    </S.Layout>
  )
}

export default Button
