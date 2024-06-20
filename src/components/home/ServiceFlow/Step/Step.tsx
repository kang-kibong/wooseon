import * as S from './Step.styled'

interface StepProps {
  number: number
  text: string
}

const Step = ({ number, text }: StepProps) => {
  return (
    <S.Step>
      <S.StepNumber>{number}</S.StepNumber>
      <S.StepText>{text}</S.StepText>
    </S.Step>
  )
}

export default Step
