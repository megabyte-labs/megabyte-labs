import { r as registerInstance, h } from './index-9fe124a3.js';
import { h as href } from './index-cb9de30c.js';
import { R as ResponsiveContainer, b as Button } from './index-257c74e4.js';
import { i as importResource } from './utils-fb465d6a.js';

const topParallaxCss = ".sc-top-parallax:root{--c-capacitor-blue:#119eff}#top.sc-top-parallax{background:transparent;background-size:cover, 100%;background-position:50% 50%;color:white;text-align:center;padding-block-start:144px;padding-block-end:196px;margin-block-end:200px;position:relative;overflow:hidden;padding-bottom:69px;min-height:calc(100vh - 62px)}@media screen and (max-width: 767px){#top.sc-top-parallax{padding-block-start:72px;padding-block-end:98px;margin-block-end:100px}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}#top.sc-top-parallax #bg.sc-top-parallax,#top.sc-top-parallax #shapes.sc-top-parallax{position:absolute;top:0;right:0;bottom:0;left:0;height:100%;width:100%}#top.sc-top-parallax #bg.sc-top-parallax{opacity:0;animation:fadeIn 2s ease-in 2s forwards}@media screen and (max-width: 767px){#top.sc-top-parallax #bg.sc-top-parallax{background:radial-gradient(128.98% 148.15% at 50% 50%, rgba(16, 24, 63, 0.5) 11.21%, rgba(0, 68, 137, 0.5) 100%)}}#top.sc-top-parallax .ui-container.sc-top-parallax>*.sc-top-parallax{position:relative}#top.sc-top-parallax h1.sc-top-parallax{margin-block-start:0;margin-block-end:0.25em;font-size:96px;line-height:1em;letter-spacing:-0.04em}#top.sc-top-parallax h1.sc-top-parallax span.sc-top-parallax{display:block}#top.sc-top-parallax p.sc-top-parallax{max-width:448px;margin:0 auto 40px;font-size:20px;line-height:160%;letter-spacing:-0.02em}#top.sc-top-parallax .ui-button.sc-top-parallax:focus{box-shadow:unset}#top.sc-top-parallax .ui-button.sc-top-parallax:first-child{margin-right:0.75em}#top.sc-top-parallax .ui-button.sc-top-parallax span.sc-top-parallax{letter-spacing:0;font-weight:bold;margin-inline-start:0.5em}#top.sc-top-parallax .ui-button.ui-button-light.sc-top-parallax{--c-text:#11193f}#top.sc-top-parallax .ui-button.ui-button-light.sc-top-parallax:hover{--c-text:#404b80}#top.sc-top-parallax .ui-button.ui-button-fill.sc-top-parallax{--c-background:rgba(255, 255, 255, 0.15);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}@media screen and (max-width: 400px){#top.sc-top-parallax h1.sc-top-parallax{font-size:80px}#top.sc-top-parallax .ui-button.sc-top-parallax{margin-block-end:16px}}@keyframes fadeInUp{0%{opacity:0;transform:translateY(10px)}100%{opacity:1;transform:translateY(0)}}#top.sc-top-parallax .reveal.sc-top-parallax{opacity:0;animation:fadeInUp 0.8s ease-out forwards}#top.sc-top-parallax h1.sc-top-parallax span.reveal.sc-top-parallax:nth-child(1){animation-delay:0.5s}#top.sc-top-parallax h1.sc-top-parallax span.reveal.sc-top-parallax:nth-child(2){animation-delay:0.7s}#top.sc-top-parallax h1.sc-top-parallax span.reveal.sc-top-parallax:nth-child(3){animation-delay:0.9s}#top.sc-top-parallax p.reveal.sc-top-parallax{animation-delay:1.2s}#top.sc-top-parallax .btns.sc-top-parallax .ui-button.reveal.sc-top-parallax:nth-child(1){animation-delay:1.5s}#top.sc-top-parallax .btns.sc-top-parallax .ui-button.reveal.sc-top-parallax:nth-child(2){animation-delay:1.7s}#top.sc-top-parallax .btns.sc-top-parallax.sc-top-parallax .ui-button.reveal.sc-top-parallax.sc-top-parallax{height:50px;width:180px}#homing-particles.sc-top-parallax{background-color:black}.section-overlay.sc-top-parallax{position:absolute;top:0;height:calc(100vh - 62px);min-height:700px;width:100%;z-index:0}.section-overlay.youtube.sc-top-parallax{position:fixed;top:50%;left:50%;min-width:100%;min-height:100%;width:auto;transform:translate(-50%, -50%)}.section-overlay.media.sc-top-parallax{z-index:-250}.section-overlay.sc-top-parallax img.sc-top-parallax{position:absolute;top:0;left:0;height:100%;min-height:100%;min-width:100%}";

const TopParallax = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.defaults = undefined;
    this.showEmailInput = false;
    this.showCommunity = false;
  }
  componentDidLoad() {
    importResource({ propertyName: 'particles', link: '/assets/js/particles.js' }, () => { });
  }
  showEmail(e) {
    if (!this.showCommunity) {
      e.preventDefault();
      this.showEmailInput = true;
      setTimeout(() => {
        this.showCommunity = true;
      }, 1000);
    }
  }
  render() {
    return (h("section", { id: "top" }, h("div", { id: "homing-particles", class: "section-overlay" }), h(ResponsiveContainer, null, h("h1", null, h("span", { class: "reveal" }, this.defaults.landingPage.parallax.reveal1), h("span", { class: "reveal" }, this.defaults.landingPage.parallax.reveal2), h("span", { class: "reveal" }, this.defaults.landingPage.parallax.reveal3)), h("p", { class: "reveal" }, this.defaults.landingPage.parallax.text), h("div", { class: "btns" }, h(Button, Object.assign({ class: "reveal", kind: "round", color: "indigo", variation: "light" }, href(this.showCommunity ? this.defaults.landingPage.parallax.newsletterButtonSecondaryLink : ''), { onClick: (e) => this.showEmail(e), anchor: true }), this.showCommunity ? this.defaults.landingPage.parallax.newsletterButtonSecondaryText : this.defaults.landingPage.parallax.newsletterButtonText, "  ", h("span", null, '->')), h(Button, { class: "reveal", kind: "round", color: "indigo", href: this.defaults.landingPage.parallax.secondButtonHref, target: "_blank", rel: "noopener", anchor: true }, this.defaults.landingPage.parallax.secondButtonText, " ", h("span", null, '->')), h("newsletter-signup-parallax", { class: {
        open: this.showEmailInput
      } })))));
  }
};
TopParallax.style = topParallaxCss;

export { TopParallax as T };

//# sourceMappingURL=top-parallax-165e29fb.js.map