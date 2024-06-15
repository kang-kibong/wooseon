import styled from "styled-components";

export const Step = styled.li`
  display: flex;
  align-items: center;
  background-color: #f2f8ff;
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
`;

export const StepNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: #007aff;
  border-radius: 50%;
  font-size: 16px;
  color: #fff;
  margin-right: 12px;
`;

export const StepText = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
