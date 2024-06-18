import styled from "styled-components";

export const Layout = styled.div`
  border-radius: 16px;
  box-shadow: 0px 0px 20px 0px rgba(0, 122, 255, 0.12);
  background-color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 16px 19px;
  margin-left: 14px;
  margin-right: 14px;
  transition: all 0.8s;

  @media screen and (max-width: 1023px) {
    margin-left: 12px;
    margin-right: 12px;
  }

  @media screen and (max-width: 540px) {
    margin-left: 6px;
    margin-right: 6px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;

  @media screen and (max-width: 1023px) {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 540px) {
    margin-bottom: 20px;
  }
`;

export const Avatar = styled.div`
  border-radius: 50%;
  margin-right: 20px;
  background-color: rgba(255, 232, 18, 1);
  width: 86px;
  height: 86px;

  @media screen and (max-width: 1023px) {
    width: 72px;
    height: 72px;
  }

  @media screen and (max-width: 540px) {
    width: 60px;
    height: 60px;
  }
`;

export const Info = styled.div`
  font-weight: 600;
  line-height: 28px;
  font-size: 24px;

  @media screen and (max-width: 1023px) {
    font-size: 22px;
  }

  @media screen and (max-width: 540px) {
    font-size: 20px;
  }
`;

export const SpecList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (max-width: 1023px) {
    gap: 12px;
  }

  @media screen and (max-width: 540px) {
    gap: 8px;
  }
`;

export const SpecListItem = styled.li`
  line-height: 20px;
  background-color: #f7f9fb;
  color: ${({ theme }) => theme.pallete.navy};
  border-radius: 8px;
  font-weight: 500;
  padding: 12px 18px;

  @media screen and (max-width: 1023px) {
    padding: 12px 16px;
  }

  @media screen and (max-width: 540px) {
    padding: 8px 9px;
  }
`;
