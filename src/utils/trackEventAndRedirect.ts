import ReactGA from 'react-ga4'

export const trackEventAndRedirect = (
  link: string,
  category: string,
  action: string,
) => {
  trackEvent(category, action)
  window.location.href = link
}

export const trackEvent = (category: string, action: string) => {
  ReactGA.event({
    category: category,
    action: action,
  })
}
