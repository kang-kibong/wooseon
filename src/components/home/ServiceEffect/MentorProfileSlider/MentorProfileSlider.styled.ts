import styled from "styled-components";

export const SliderContainer = styled.div`
  .slick-slider {
    overflow: hidden;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }

  .center {
    min-height: 250px;
  }

  .center .slick-center > div > div > div {
    padding: 20px 24px;
  }

  @media screen and (max-width: 1023px) {
    .center .slick-center > div > div > div {
      padding: 23px 28px;
    }
  }

  @media screen and (max-width: 540px) {
    .center .slick-center > div > div > div {
      @media screen and (max-width: 540px) {
        padding: 20px 24px;
      }
    }
  }
`;
