import styled from 'styled-components'

export const Step = styled.li`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.pallete['light-blue']};
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 36px;

  @media screen and (max-width: 1023px) {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 540px) {
    margin-bottom: 24px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const StepNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: ${({ theme }) => theme.pallete.blue};
  border-radius: 50%;
  font-size: 16px;
  color: ${({ theme }) => theme.pallete.white};
  margin-right: 12px;
`

export const StepText = styled.p`
  font-size: 18px;
  font-weight: 600;
`
