import { e as Build } from './index-9fe124a3.js';

const trackView = (adId, location = 'Docs') => {
  if (!Build.isBrowser)
    return;
  hubspotTrack('View', adId, location);
  googleAnalyticsTrack('View', adId, location);
};
const trackClick = (adId, event, location = 'Docs') => {
  if (!Build.isBrowser)
    return;
  const timeForTrackingRequests = 150; // ms
  if (event) {
    event.preventDefault();
  }
  hubspotTrack('Click', adId, location);
  googleAnalyticsTrack('Click', adId, location);
  // give tracking request time to complete
  setTimeout(() => {
    const link = hrefClimber(event === null || event === void 0 ? void 0 : event.target);
    if (link.target && link.target.toLowerCase() === '_blank') {
      window.open(link.href);
    }
    else if (link.href) {
      document.location = link.href;
    }
  }, timeForTrackingRequests);
};
const hubspotTrack = (type, adId, location) => {
  const _hsq = (window._hsq = window._hsq || []);
  _hsq.push(['trackEvent', {
      id: `${location} ad - ${type} - ${adId}`
    }]);
};
const googleAnalyticsTrack = (type, adId, location) => {
  if (!window['gtag']) {
    console.warn('Unable to track Google Analytics event, gtag not found', type, adId);
    return;
  }
  window['gtag']('event', `Docs ad - ${type} - ${adId}`, {
    'event_category': `${location} ad - ${type}`,
    'event_label': adId
  });
};
// recursive function to climb the DOM looking for href tags
const hrefClimber = (el) => {
  if (el['href']) {
    return el;
  }
  else if (el.parentNode) {
    return hrefClimber(el.parentNode);
  }
};

export { trackClick as a, trackView as t };

//# sourceMappingURL=tracking-service-c64257af.js.map