import styled from "styled-components";

export const Layout = styled.div`
  border-radius: 16px;
  box-shadow: 0px 0px 20px 0px rgba(0, 122, 255, 0.12);
  background-color: #fff;

  @media screen and (max-width: 540px) {
    padding: 20px 24px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 540px) {
    margin-bottom: 20px;
  }
`;

export const Avatar = styled.div`
  border-radius: 50%;
  margin-right: 20px;
  background-color: rgba(255, 232, 18, 1);

  @media screen and (max-width: 540px) {
    width: 60px;
    height: 60px;
  }
`;

export const Info = styled.div`
  @media screen and (max-width: 540px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
  }
`;

export const SpecList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 540px) {
    gap: 8px;
  }
`;

export const SpecListItem = styled.li`
  line-height: 20px;
  background-color: #f7f9fb;
  color: rgba(16, 61, 108, 1);
  border-radius: 8px;
  font-weight: 500;

  @media screen and (max-width: 540px) {
    padding: 8px 12px;
  }
`;
