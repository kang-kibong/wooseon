import styled from "styled-components";

export const SliderContainer = styled.div`
  /* margin: 0 auto; */

  .slick-slider {
    /* width: 100%; */
    overflow: hidden;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }

  .center {
    height: 250px;
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
