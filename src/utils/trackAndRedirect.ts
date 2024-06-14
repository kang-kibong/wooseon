import ReactGA from "react-ga";

const trackAndRedirect = (link, category, action) => {
  ReactGA.event({
    category: category,
    action: action,
  });
  window.location.href = link;
};

export default trackAndRedirect;
