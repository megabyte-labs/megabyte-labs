import { r as registerInstance, h, k as Host } from './index-9fe124a3.js';

const siteBackdropCss = ".sc-site-backdrop-h{position:fixed;top:0;height:100vh;left:0;right:0;background:rgba(0, 26, 58, 0.08);cursor:pointer;opacity:0;pointer-events:none;transition:0.4s opacity, 0.4s visibility step-end;visibility:hidden;outline:2px solid rgba(0, 0, 0, 0);z-index:0}.site-backdrop--visible.sc-site-backdrop-h:not(.site-backdrop--mobile-only){opacity:1;pointer-events:all;visibility:visible;transition:0.4s opacity, 0.4s visibility step-start}@media screen and (max-width: 768px){.site-backdrop--visible.site-backdrop--mobile-only.sc-site-backdrop-h{opacity:1;pointer-events:all;visibility:visible;transition:0.4s opacity, 0.4s visibility step-start}}";

const SiteBackdrop = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.visible = false;
    this.mobileOnly = false;
  }
  render() {
    return (h(Host, { tabindex: "-1", class: {
        'site-backdrop--visible': this.visible,
        'site-backdrop--mobile-only': this.mobileOnly,
      } }));
  }
};
SiteBackdrop.style = siteBackdropCss;

export { SiteBackdrop as site_backdrop };

//# sourceMappingURL=site-backdrop.entry.js.map