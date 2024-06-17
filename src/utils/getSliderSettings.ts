export const getSliderSettings = (isDesktopOrLaptop: boolean) => ({
  className: "center",
  centerPadding: "20px",
  dots: false,
  centerMode: true,
  infinite: true,
  speed: 700,
  swipe: false,
  arrows: false,
  autoplay: true,
  slidesToShow: isDesktopOrLaptop ? 2 : 1,
  autoplaySpeed: 3000,
});
