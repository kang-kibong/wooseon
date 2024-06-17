import ReactGA from "react-ga4";

const trackAndRedirect = (link: string, category: string, action: string) => {
  ReactGA.event({
    category: category,
    action: action,
  });
  window.location.href = link;
};

export default trackAndRedirect;
