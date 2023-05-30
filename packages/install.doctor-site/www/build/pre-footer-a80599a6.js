import { r as registerInstance, h, k as Host } from './index-9fe124a3.js';
import { R as ResponsiveContainer, H as Heading, P as Paragraph } from './index-257c74e4.js';

const preFooterCss = ".sc-pre-footer:root{--c-capacitor-blue:#119eff}.sc-pre-footer-h{display:block;position:relative;background:#fff}.squares.sc-pre-footer{position:absolute;display:flex;height:100%;width:100%}@media screen and (max-width: 640px){.squares.sc-pre-footer{flex-direction:column}}.squares.sc-pre-footer::before{content:\"\";flex-basis:50%;border-inline-end:1px solid var(--c-indigo-20);border-block-start:1px solid var(--c-indigo-20)}.squares.sc-pre-footer::after{content:\"\";flex-basis:50%;border-block-start:1px solid var(--c-indigo-20)}.ui-container.sc-pre-footer{position:relative;z-index:1;display:flex}@media screen and (max-width: 640px){.ui-container.sc-pre-footer{flex-direction:column}}.ui-container.sc-pre-footer>a.sc-pre-footer{flex-basis:50%;padding-block-start:var(--space-9);padding-block-end:var(--space-9)}.ui-container.sc-pre-footer>a.sc-pre-footer svg.sc-pre-footer{margin-block-end:var(--space-5)}.ui-container.sc-pre-footer>a.sc-pre-footer:first-of-type{padding-inline-end:clamp(32px, 10vw, 88px)}@media screen and (max-width: 640px){.ui-container.sc-pre-footer>a.sc-pre-footer:first-of-type{padding-inline-end:0}}.ui-container.sc-pre-footer>a.sc-pre-footer:last-of-type{padding-inline-start:clamp(32px, 10vw, 88px)}@media screen and (max-width: 640px){.ui-container.sc-pre-footer>a.sc-pre-footer:last-of-type{padding-inline-start:0}}";

const PreFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.defaults = undefined;
  }
  render() {
    return (h(Host, null, h("div", { class: "squares" }), h(ResponsiveContainer, null, h("a", { href: this.defaults.prefooter.left.href }, h("svg", { width: "56", height: "50", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M1 1h16.2c2.86 0 5.61 1.12 7.64 3.12A10.6 10.6 0 0128 11.67V49c0-2.12-.85-4.16-2.37-5.66A8.15 8.15 0 0019.9 41H1V1zM55 1H38.8c-2.86 0-5.61 1.12-7.64 3.12A10.6 10.6 0 0028 11.67V49c0-2.12.85-4.16 2.37-5.66A8.15 8.15 0 0136.1 41H55V1z", stroke: "#46B1FF", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })), h(Heading, { level: 4 }, this.defaults.prefooter.left.title, " ", h("span", { class: "arrow" }, "->")), h(Paragraph, null, this.defaults.prefooter.left.text)), h("a", { href: this.defaults.prefooter.right.href }, h("svg", { width: "48", height: "50", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M47 34.85v-19.7c0-.65-.18-1.28-.51-1.84a3.77 3.77 0 00-1.4-1.35L26.9 1.76a5.91 5.91 0 00-5.78 0L2.9 11.95c-.58.32-1.07.79-1.4 1.35-.33.56-.5 1.19-.51 1.84v19.7c0 .65.18 1.28.51 1.84s.81 1.02 1.4 1.35l18.2 10.2a5.92 5.92 0 005.78 0l18.2-10.2c.59-.33 1.07-.8 1.4-1.35.33-.56.51-1.2.51-1.84z", stroke: "#46B1FF", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }), h("path", { d: "M1.6 13.23L24 25.93l22.4-12.7M24 49V25.92", stroke: "#46B1FF", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })), h(Heading, { level: 4 }, this.defaults.prefooter.right.title, " ", h("span", { class: "arrow" }, "->")), h(Paragraph, null, this.defaults.prefooter.right.text)))));
  }
};
PreFooter.style = preFooterCss;

export { PreFooter as P };

//# sourceMappingURL=pre-footer-a80599a6.js.map