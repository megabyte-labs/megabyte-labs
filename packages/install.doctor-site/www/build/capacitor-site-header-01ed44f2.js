import { h, r as registerInstance, k as Host, l as getElement } from './index-9fe124a3.js';
import { h as href } from './index-cb9de30c.js';
import { b as Button } from './index-257c74e4.js';

const DownArrow = (props) => (h("svg", Object.assign({ viewBox: "0 0 512 512" }, props),
  h("path", { d: "M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" })));
const Translation = (props) => (h("svg", Object.assign({ viewBox: "0 0 22 14", fill: "none" }, props),
  h("path", { d: "M19.3213 13.9999H22.0001L17.039 1.21558H14.2346L9.2832 13.9999H11.8072L13.0064 10.7307H18.1415L19.3213 13.9999ZM15.5014 3.65195H15.6658L17.5613 8.92339H13.5866L15.5014 3.65195Z", fill: "#B2BECD" }),
  h("path", { d: "M0 1.10938H12.4318L11.5697 3.32812H0V1.10938Z", fill: "#B2BECD" }),
  h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.75268 1.11609C8.75268 1.11609 8.75268 1.11712 9.89332 1.11712C11.034 1.11712 11.034 1.11822 11.034 1.11822L11.034 1.11939L11.034 1.12198L11.0339 1.12805L11.0337 1.14382C11.0335 1.15593 11.0332 1.17122 11.0325 1.1896C11.0313 1.22637 11.029 1.27554 11.0248 1.33642C11.0164 1.45817 11.0003 1.62689 10.9695 1.83709C10.9081 2.25748 10.7879 2.84428 10.5533 3.55314C10.083 4.97375 9.15623 6.87412 7.33744 8.89844L7.30893 8.93017L2.7154 13.3124L1.24023 11.7004L5.63338 7.45082C7.21765 5.67868 7.9949 4.05478 8.37789 2.89777C8.57098 2.31443 8.66471 1.84706 8.71016 1.53633C8.73288 1.38097 8.74352 1.2649 8.74847 1.19324C8.75095 1.15741 8.752 1.13272 8.75243 1.11981L8.75272 1.10938L8.7527 1.11094L8.75269 1.11345L8.75268 1.11609Z", fill: "#B2BECD" }),
  h("rect", { x: "5.5166", width: "2.20704", height: "1.10937", fill: "#B2BECD" }),
  h("path", { d: "M4.17075 7.9686C3.09555 6.69872 2.39593 5.48407 1.94141 4.4375H4.40026C4.76103 5.09472 5.24197 5.81584 5.88345 6.5682L5.93101 6.62398L5.96524 6.67692C5.96787 6.68067 5.97319 6.68816 5.98137 6.69921C6.0017 6.72667 6.03969 6.77615 6.09781 6.8448C6.21395 6.98199 6.41098 7.19635 6.70864 7.46479C7.19301 7.9016 8.18265 8.61127 9.29424 9.23901L8.50109 11.2671C6.94927 10.5044 5.9002 9.71638 5.23489 9.11639C4.86256 8.78062 4.5965 8.49477 4.41706 8.28281C4.32738 8.17688 4.25946 8.08955 4.21081 8.02383C4.19559 8.00327 4.18226 7.98483 4.17075 7.9686Z", fill: "#B2BECD" })));
const headerActionButtonIcon = (_props) => (h("svg", { width: "19px", height: "19px", viewBox: "0 0 24 24", fill: "#fff", xmlns: "http://www.w3.org/2000/svg" },
  h("path", { d: "M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.74028 10.5978 6.38663 10 6.73244V14.0396H11.7915C12.8961 14.0396 13.7915 13.1441 13.7915 12.0396V10.7838C13.1823 10.4411 12.7708 9.78837 12.7708 9.03955C12.7708 7.93498 13.6662 7.03955 14.7708 7.03955C15.8753 7.03955 16.7708 7.93498 16.7708 9.03955C16.7708 9.77123 16.3778 10.4111 15.7915 10.7598V12.0396C15.7915 14.2487 14.0006 16.0396 11.7915 16.0396H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.4022 17.6134 8 17.2676V6.73244C7.4022 6.38663 7 5.74028 7 5Z", fill: "#ffffff" })));
const headerLogo = (props) => (h("svg", Object.assign({ viewBox: "149 350 1200 1", class: "capacitor-logo", fill: "#000", height: "24", version: "1.1", width: "180", x: "0px", xmlns: "http://www.w3.org/2000/svg", y: "0px" }, props),
  h("g", null,
    h("g", null,
      h("path", { d: "M399.1,401.77V295.65h19.86v106.12H399.1z" }),
      h("path", { d: "M491.42,401.77v-39.11c0-11.37-6.21-20.01-18.04-20.01c-11.37,0-19.1,9.55-19.1,20.92v38.2h-18.34v-74.89h16.52\n\t\t\tl1.21,10.16c7.58-7.43,15.16-11.22,24.56-11.22c17.58,0,31.68,13.19,31.68,36.69v39.26H491.42z" }),
      h("path", { d: "M574.64,346.89c-5.31-5-11.37-6.67-18.5-6.67c-8.79,0-13.64,2.73-13.64,7.43c0,4.85,4.4,7.58,13.95,8.19\n\t\t\tc14.1,0.91,31.99,4.09,31.99,23.95c0,13.19-10.76,24.56-32.14,24.56c-11.82,0-23.65-1.97-34.56-13.34l9.1-13.19\n\t\t\tc5.31,5.91,17.43,10.31,25.77,10.46c6.97,0.15,13.49-3.49,13.49-8.94c0-5.15-4.24-7.28-14.86-7.88\n\t\t\tc-14.1-1.06-30.93-6.22-30.93-23.19c0-17.28,17.89-23.35,31.53-23.35c11.67,0,20.46,2.27,29.11,9.85L574.64,346.89z" }),
      h("path", { d: "M626.33,305.96v21.22h20.62v15.92h-20.77v32.29c0,7.13,3.94,10.61,9.7,10.61c2.88,0,6.22-0.91,8.94-2.27l5.15,15.77\n\t\t\tc-5.31,2.12-9.7,3.03-15.31,3.18c-16.22,0.61-26.83-8.64-26.83-27.29V343.1h-13.95v-15.92h13.95v-19.25L626.33,305.96z" }),
      h("path", { d: "M720.02,327.03h17.74v74.74h-17.43l-0.91-10.91c-4.24,8.79-15.92,13.04-24.26,13.19c-22.13,0.15-38.51-13.49-38.51-39.72\n\t\t\tc0-25.77,17.13-39.26,38.96-39.11c10.01,0,19.56,4.7,23.8,12.13L720.02,327.03z M675.14,364.33c0,14.25,9.85,22.74,22.13,22.74\n\t\t\tc29.11,0,29.11-45.33,0-45.33C685,341.74,675.14,350.08,675.14,364.33z" }),
      h("path", { d: "M771.71,295.8v105.97h-18.34V295.8H771.71z" }),
      h("path", { d: "M806.27,295.8v105.97h-18.34V295.8H806.27z" }),
      h("path", { d: "M945.74,347.5c0.61,26.98-16.68,54.27-53.82,54.27c-11.98,0-23.95,0-35.93,0V295.65c11.98,0,23.95,0,35.93,0\n\t\t\tC927.85,295.65,945.13,321.42,945.74,347.5z M864.18,303.38v90.5h27.74c31.53,0,46.08-23.65,45.63-46.39\n\t\t\tc-0.45-22.13-15.01-44.12-45.63-44.12H864.18z" }),
      h("path", { d: "M960.89,364.48c0-23.8,16.98-38.96,38.05-38.96c21.07,0,38.05,15.16,38.05,38.96c0,23.8-16.98,38.35-38.05,38.35\n\t\t\tC977.87,402.83,960.89,388.28,960.89,364.48z M1029.72,364.48c0-19.4-13.79-31.99-30.77-31.99s-30.77,12.58-30.77,31.99\n\t\t\ts13.8,31.08,30.77,31.08S1029.72,383.88,1029.72,364.48z" }),
      h("path", { d: "M1115.52,391.31c-7.58,7.58-17.43,11.22-27.29,11.22c-21.07,0-38.5-14.55-38.5-38.2c0-23.65,16.83-38.2,38.5-38.2\n\t\t\tc9.85,0,19.71,3.79,27.29,11.22l-4.85,4.7c-6.06-6.06-14.4-8.94-22.44-8.94c-16.98,0-31.23,11.07-31.23,31.23\n\t\t\tc0,20.16,14.25,31.23,31.23,31.23c8.04,0,16.22-3.18,22.29-9.25L1115.52,391.31z" }),
      h("path", { d: "M1147.8,304.29v22.59h25.47v6.22h-25.47v45.63c0,10.16,2.12,17.28,13.8,17.28c3.64,0,7.73-1.21,11.52-3.03l2.58,6.06\n\t\t\tc-4.7,2.27-9.4,3.79-14.1,3.79c-15.92,0-21.07-9.4-21.07-24.1V333.1h-15.92v-6.22h15.92v-21.83L1147.8,304.29z" }),
      h("path", { d: "M1186.92,364.48c0-23.8,16.98-38.96,38.05-38.96c21.07,0,38.05,15.16,38.05,38.96c0,23.8-16.98,38.35-38.05,38.35\n\t\t\tC1203.89,402.83,1186.92,388.28,1186.92,364.48z M1255.74,364.48c0-19.4-13.79-31.99-30.77-31.99s-30.77,12.58-30.77,31.99\n\t\t\ts13.8,31.08,30.77,31.08S1255.74,383.88,1255.74,364.48z" }),
      h("path", { d: "M1287.12,326.88l0.3,13.34c4.7-10.16,15.31-14.1,24.86-14.1c5.61-0.15,11.07,1.36,16.07,4.4l-3.33,6.06\n\t\t\tc-3.94-2.43-8.34-3.49-12.73-3.49c-13.95,0.15-24.71,11.37-24.71,25.01v43.66h-7.43v-74.89H1287.12z" })),
    h("g", null,
      h("path", { d: "M336.36,290.63v118.75c0,12.69-10.29,22.98-22.98,22.98H194.63c-12.69,0-22.98-10.29-22.98-22.98v-13.73h141.5\n\t\t\tc4.75,0,8.6-3.85,8.6-8.6s-3.85-8.6-8.6-8.6h-141.5V358.6h115.7c4.75,0,8.6-3.85,8.6-8.6c0-4.75-3.85-8.6-8.6-8.6h-115.7v-19.85\n\t\t\th93.21c4.75,0,8.6-3.85,8.6-8.6s-3.85-8.6-8.6-8.6h-93.21v-13.73c0-12.69,10.29-22.98,22.98-22.98h118.75\n\t\t\tC326.06,267.65,336.36,277.93,336.36,290.63z" })))));

const capacitorSiteHeaderCss = ".sc-site-header:root{--c-capacitor-blue:#119eff}.sc-site-header-h{--link-hover-opacity:0.7;--c-background:#fff;--spacing-x:20px;display:block;height:64px;position:relative;top:0;background:var(--c-background);transform:translate(0px);z-index:1000;border-block-start:1px solid rgba(0, 21, 58, 0.06);border-block-end:1px solid rgba(0, 21, 58, 0.06);transition:box-shadow 0.2s ease-out}.sticky.sc-site-header-h{position:fixed;width:100%}.theme--dark.sc-site-header-h{--c-background:black;background:black}.theme--dark.sc-site-header-h .capacitor-logo.sc-site-header .st0.sc-site-header{fill:#ffffff}.theme--dark.sc-site-header-h .capacitor-logo.sc-site-header path.sc-site-header:not(.logo){fill:#fff}.theme--dark.sc-site-header-h a.ui-paragraph-4.sc-site-header{color:#fff}.theme--dark.sc-site-header-h a.ui-paragraph-4.active.sc-site-header{color:var(--c-carbon-30);pointer-events:none}@media screen and (max-width: 767px){.theme--dark.sc-site-header-h a.ui-paragraph-4.active.sc-site-header{background:initial;color:var(--c-capacitor-blue)}}.theme--dark.sc-site-header-h .ui-button.sc-site-header{transition:background-color 0.2s ease-out}.theme--dark.sc-site-header-h .ui-button.sc-site-header:hover,.theme--dark.sc-site-header-h .ui-button.sc-site-header:active,.theme--dark.sc-site-header-h .ui-button.sc-site-header:focus{opacity:1}.theme--dark.sc-site-header-h .separator.sc-site-header{background:var(--c-carbon-70)}.theme--dark.sc-site-header-h more-button.sc-site-header{--color:#fff}.docs-search-wrapper.sc-site-header{margin-inline-start:var(--space-4)}.docs-search-wrapper.sc-site-header docs-search.sc-site-header{max-width:clamp(100px, 40vw, 251px)}.docs-search-wrapper.desktop-only.sc-site-header{margin-inline-start:auto}header.sc-site-header{display:flex;align-items:center;height:100%}header.sc-site-header .capacitor-logo.sc-site-header{margin-inline-end:var(--container);display:block}header.sc-site-header .jobs.sc-site-header{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;background:linear-gradient(90deg, #62bdff 1.23%, #7489ff 99.18%);border-radius:100px;padding:5px 8px}header.sc-site-header .jobs-wrapper.sc-site-header{flex-grow:1;display:flex;justify-content:flex-end;margin-inline-end:2rem}@media (max-width: 1439px){header.sc-site-header .jobs-wrapper.sc-site-header{display:none}}header.sc-site-header .jobs-wrapper.sc-site-header .jobs.sc-site-header{font-size:0.75rem;display:flex;align-items:center;color:#fff}header.sc-site-header .jobs-wrapper.sc-site-header .jobs.sc-site-header .sparkle.sc-site-header{margin-inline-end:0.25rem}header.sc-site-header .jobs-wrapper.sc-site-header .jobs.sc-site-header .arrow.sc-site-header{transform:translate(0px, 0.0625rem);transition:transform 0.1s ease-out}header.sc-site-header .jobs-wrapper.sc-site-header .jobs.sc-site-header:hover .arrow.sc-site-header{transform:translate(0.0625rem, 0.0625rem)}app-menu-toggle.sc-site-header{margin-inline-end:var(--space-3)}.routes.sc-site-header{display:flex;transition:transform 0.2s ease-out, opacity 0.2s ease-out, box-shadow 0.2s ease-out}.routes__header.sc-site-header{display:none;justify-content:space-between;align-items:center;margin-block-end:var(--space-3)}.routes__header.sc-site-header button.close.sc-site-header{background:transparent;border:none;cursor:pointer;outline:2px solid rgba(0, 0, 0, 0);transition:opacity 0.2s ease-out}.routes__header.sc-site-header button.close.sc-site-header:hover,.routes__header.sc-site-header button.close.sc-site-header:active,.routes__header.sc-site-header button.close.sc-site-header:focus{opacity:0.7}a.ui-paragraph-4.sc-site-header{font-weight:500;display:flex;align-items:center;margin-inline-start:clamp(var(--space-0), 3.5vw, 24px);transition:opacity 0.2s ease-out}a.ui-paragraph-4.active.sc-site-header{color:var(--c-cyan-100)}a.ui-paragraph-4.active.sc-site-header:hover{opacity:1}a.ui-paragraph-4.sc-site-header:hover{opacity:var(--link-hover-opacity)}.external.sc-site-header svg.sc-site-header{margin-inline-start:6px;margin-block-start:2px}.mobile-only.sc-site-header{display:none}.separator.sc-site-header{display:inline-block;width:1px;height:28px;background:var(--c-indigo-30);margin-inline-start:var(--space-5)}.ctas.sc-site-header{display:flex;align-items:center;white-space:nowrap;margin-inline-start:var(--space-1)}.ctas.sc-site-header>a.sc-site-header{display:flex;align-items:center;margin-inline-start:var(--space-3)}.ctas.sc-site-header docs-dropdown.sc-site-header{margin-inline-end:-1rem}.ctas.sc-site-header .ui-button.primary.sc-site-header{--c-background:var(--c-capacitor-blue);color:#fff}.ctas.sc-site-header .social.sc-site-header{transition:opacity 0.2s ease-out}.ctas.sc-site-header .social.sc-site-header:hover,.ctas.sc-site-header .social.sc-site-header:active,.ctas.sc-site-header .social.sc-site-header:focus{opacity:0.7}more-button.sc-site-header{display:none;margin-inline-start:var(--container)}@media screen and (max-width: 1023px){.ctas.sc-site-header,.sm-hide.sc-site-header{display:none}}@media screen and (max-width: 767px){.desktop-only.sc-site-header{display:none}header.sc-site-header>.docs-search-wrapper.sc-site-header+.ui-paragraph-4.sc-site-header{margin-inline-start:auto}.routes.sc-site-header{flex-direction:column;background:var(--c-background);width:calc(100% - 24px);max-width:353px;position:absolute;z-index:1000;right:12px;top:12px;padding:20px;box-shadow:var(--elevation-7);border-radius:var(--radius-2);transform:translateY(-10px);opacity:0;pointer-events:none}.routes__header.sc-site-header{display:flex}.routes__header.sc-site-header a.logo-wrapper.sc-site-header{padding:0;display:flex}.routes__header.sc-site-header a.logo-wrapper.sc-site-header:hover,.routes__header.sc-site-header a.logo-wrapper.sc-site-header:active,.routes__header.sc-site-header a.logo-wrapper.sc-site-header:focus{opacity:1}.routes.sc-site-header a.sc-site-header{display:block;margin-inline-start:0px;padding:7px 10px 8px;border-radius:var(--radius-1)}.routes.sc-site-header a.sc-site-header+a.sc-site-header{margin-block-start:var(--space-0)}.routes.sc-site-header a.active.sc-site-header{color:var(--c-capacitor-blue);background:var(--c-cyan-0);font-weight:500}.routes.expanded.sc-site-header{transform:translateY(0px);opacity:1;pointer-events:all}.mobile-only.sc-site-header{display:inline-block;margin-inline-start:auto;margin-inline-end:clamp(var(--space-0), 1.3vw, var(--space-3))}.docs-search-wrapper.sc-site-header{margin-inline-start:0;max-width:100%;margin-block-end:var(--space-2)}.docs-search-wrapper.sc-site-header docs-search.sc-site-header{max-width:100%}more-button.sc-site-header{display:block}}";

const SiteHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.routeListener = Symbol();
    this.links = {};
    // Could be an announcement banner or platform bar
    this.heightAboveBar = 72;
    this.handleActive = (url) => {
      const activeRoute = url.pathname.split('/')[1];
      for (const [key, value] of Object.entries(this.links)) {
        if (key === activeRoute) {
          value.classList.add('active');
        }
        else {
          value.classList.remove('active');
        }
      }
    };
    this.toggleExpanded = () => (this.expanded = !this.expanded);
    this.template = undefined;
    this.defaults = undefined;
    this.includeLogo = true;
    this.includeBurger = false;
    this.theme = 'light';
    this.sticky = true;
    this.collapsed = false;
    this.expanded = false;
    this.scrolled = false;
  }
  componentWillLoad() {
    this.createHeaderObserver();
    this.createRouteListener();
  }
  createHeaderObserver() {
    const opts = {
      root: document.body,
      rootMargin: `-${this.heightAboveBar + 1}px 0px 0px 0px`,
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(entries => {
      this.scrolled = !(entries[0].intersectionRatio < 1);
    }, opts);
    observer.observe(this.elm);
  }
  createRouteListener() {
    if (window.hasOwnProperty(this.routeListener))
      return;
    window[this.routeListener] = true;
    window.Router.on('change', this.handleActive);
  }
  isActive(path) {
    const prefix = new RegExp('^' + path, 'gm');
    const regexRes = prefix.test(window.Router.path);
    return regexRes;
  }
  render() {
    const { expanded, template, includeLogo, includeBurger } = this;
    return (h(Host, { class: {
        scrolled: this.scrolled,
        [`theme--${this.theme}`]: true,
        sticky: this.sticky,
      } }, h("site-backdrop", { visible: expanded, onClick: () => this.toggleExpanded(), mobileOnly: true }), h("header", null, includeBurger ? h("app-menu-toggle", null) : null, includeLogo ? (h("a", Object.assign({}, href('/'), { "aria-label": "homepage link" }), headerLogo())) : null, h("div", { class: "docs-search-wrapper desktop-only" }, h("docs-search", { defaults: this.defaults, theme: this.theme })), this.defaults.header.customLinks.map(({ title, href, templateId }) => (h("a", { href: href, class: {
        'ui-paragraph-4': true,
        'active': template === templateId,
      } }, title))), h("div", { class: "separator desktop-only" }), h("nav", { class: {
        routes: true,
        expanded: this.expanded,
      } }, h("div", { class: "routes__header" }, h("a", Object.assign({ "aria-label": "homepage link", class: "logo-wrapper" }, href('/')), headerLogo()), h("button", { class: "close", "aria-label": "close" }, h("svg", { onClick: this.toggleExpanded, width: "10", height: "10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M9 9L1 1M9 1L1 9", stroke: "#B2BECD", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })))), h("div", { class: "docs-search-wrapper mobile-only" }, h("docs-search", { defaults: this.defaults })), h("a", { href: '/blog', class: "ui-paragraph-4", ref: el => (this.links.blog = el) }, "Blog"), h("a", Object.assign({}, href('/community'), { class: "ui-paragraph-4", ref: el => (this.links.community = el) }), "Community"), h("a", Object.assign({}, href('/enterprise'), { class: "ui-paragraph-4", ref: el => (this.links.enterprise = el) }), "Enterprise")), h("div", { class: "separator desktop-only" }), h("more-button", { onClick: () => this.toggleExpanded() }), h("div", { class: "ctas" }, h("a", { href: this.defaults.social.github, target: "_blank", title: this.defaults.brandName + "'s repository on GitHub", rel: "noopener" }, h("svg", { class: "social", width: "16", height: "16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M8 0a8.1 8.1 0 0 0-8 8.2c0 3.63 2.3 6.7 5.47 7.79l.14.01c.3 0 .4-.22.4-.4v-1.4c-.3.06-.57.1-.81.1-1.54 0-1.89-1.2-1.89-1.2-.36-.95-.89-1.2-.89-1.2-.7-.5 0-.5.05-.5.8.06 1.23.84 1.23.84.4.7.94.9 1.41.9.38 0 .72-.12.92-.21.07-.53.28-.9.5-1.1-1.77-.2-3.64-.91-3.64-4.05 0-.9.31-1.63.82-2.2-.08-.21-.35-1.05.08-2.18l.18-.01c.3 0 .94.1 2.02.86a7.5 7.5 0 0 1 4.01 0c1.08-.75 1.73-.86 2.02-.86l.18.01c.44 1.13.16 1.97.08 2.18.5.57.82 1.3.82 2.2 0 3.15-1.87 3.84-3.65 4.04.28.25.54.75.54 1.52l-.01 2.25c0 .2.1.41.4.41l.15-.01A8.19 8.19 0 0 0 16 8.2 8.1 8.1 0 0 0 8 0Z", fill: "#B2BECD" }))), h("a", { href: this.defaults.social.discord, target: "_blank", rel: "noopener", title: "Discord link" }, h("svg", { class: "social", width: "20", height: "16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M16.93 1.33A15.93 15.93 0 0 0 12.86 0c-.03 0-.05 0-.07.03-.17.33-.37.76-.5 1.1a14.52 14.52 0 0 0-4.57 0A11.3 11.3 0 0 0 7.2.03.06.06 0 0 0 7.14 0a15.89 15.89 0 0 0-4.1 1.35 18.4 18.4 0 0 0-2.93 12 16.3 16.3 0 0 0 5 2.65c.02 0 .05 0 .06-.03.39-.55.73-1.13 1.02-1.74a.07.07 0 0 0-.03-.1 10.7 10.7 0 0 1-1.56-.77.07.07 0 0 1 0-.12l.3-.25a.06.06 0 0 1 .07-.01 11.32 11.32 0 0 0 10.05 0h.06c.1.1.21.18.32.26.03.03.03.1-.01.12-.5.3-1.02.56-1.56.78a.07.07 0 0 0-.04.09c.3.6.65 1.2 1.03 1.74.01.03.04.04.07.03a16.24 16.24 0 0 0 5.02-2.7 18.26 18.26 0 0 0-2.98-11.97ZM6.68 10.9c-.98 0-1.8-.95-1.8-2.11 0-1.17.8-2.12 1.8-2.12 1.01 0 1.82.96 1.8 2.12 0 1.16-.8 2.11-1.8 2.11Zm6.65 0c-.99 0-1.8-.95-1.8-2.11 0-1.17.8-2.12 1.8-2.12s1.81.96 1.8 2.12c0 1.16-.8 2.11-1.8 2.11Z", fill: "#B2BECD" }))), h("a", { href: this.defaults.social.twitter, target: "_blank", title: "Twitter link", rel: "noopener" }, h("svg", { class: "social", width: "18", height: "16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M18 1.9c-.66.32-1.37.53-2.12.63A4 4 0 0 0 17.5.3c-.7.46-1.5.8-2.34.98A3.55 3.55 0 0 0 12.46 0c-2.04 0-3.7 1.8-3.7 4.04 0 .31.04.62.1.92A10.2 10.2 0 0 1 1.26.74 4.33 4.33 0 0 0 2.4 6.13a3.38 3.38 0 0 1-1.68-.5v.04a3.97 3.97 0 0 0 2.96 3.96 3.42 3.42 0 0 1-1.66.07 3.76 3.76 0 0 0 3.45 2.8A7.02 7.02 0 0 1 0 14.18 9.7 9.7 0 0 0 5.65 16c6.8 0 10.52-6.15 10.52-11.5L16.16 4A7.94 7.94 0 0 0 18 1.89Z", fill: "#B2BECD" }))), h(Button, { class: "primary | ui-paragraph-4", anchor: true, href: this.defaults.header.actionButton.href, target: '_blank', kind: "regular", color: "cyan", size: "md" }, headerActionButtonIcon(), this.defaults.header.actionButton.title)))));
  }
  get elm() { return getElement(this); }
};
SiteHeader.style = capacitorSiteHeaderCss;

export { SiteHeader as S };

//# sourceMappingURL=capacitor-site-header-01ed44f2.js.map