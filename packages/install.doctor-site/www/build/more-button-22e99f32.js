import { r as registerInstance, h, k as Host } from './index-9fe124a3.js';

const moreButtonCss = "more-button{height:32px;width:32px}more-button button{height:100%;width:100%;font-size:20px;background:transparent;border:none;outline:none;cursor:pointer;transition:opacity 0.2s ease-out}more-button button svg{fill:var(--color, black);height:20px !important;width:20px !important}more-button button:hover{opacity:0.4}more-button button:active{opacity:0.32}";

const MoreButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("button", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "ionicon", viewBox: "0 0 512 512" }, h("circle", { cx: "256", cy: "256", r: "48" }), h("circle", { cx: "256", cy: "416", r: "48" }), h("circle", { cx: "256", cy: "96", r: "48" })))));
  }
};
MoreButton.style = moreButtonCss;

export { MoreButton as M };

//# sourceMappingURL=more-button-22e99f32.js.map