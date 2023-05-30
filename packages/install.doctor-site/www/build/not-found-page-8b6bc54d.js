import { r as registerInstance, h, k as Host } from './index-9fe124a3.js';
import { R as ResponsiveContainer, H as Heading, P as Paragraph } from './index-257c74e4.js';
import { h as href } from './index-cb9de30c.js';

const notFoundPageCss = ".sc-not-found-page:root{--c-capacitor-blue:#119eff}.sc-not-found-page-h{display:block;--h1-color:var(--c-carbon-100)}#not-found.sc-not-found-page{margin-block-start:120px;margin-block-end:101px}.contact-icon.sc-not-found-page{float:left;width:30px}.contact-text.sc-not-found-page{display:inline-block;line-height:1.4}ul.sc-not-found-page,ol.sc-not-found-page{margin:1.6em 0}ul.sc-not-found-page li.ui-paragraph.sc-not-found-page,ol.sc-not-found-page li.ui-paragraph.sc-not-found-page{margin-block-end:0}ul.sc-not-found-page li.sc-not-found-page+li.sc-not-found-page,ol.sc-not-found-page li.sc-not-found-page+li.sc-not-found-page{margin-block-start:16px}ul.sc-not-found-page{font-family:var(--p3-font);font-size:var(--p3-size);line-height:var(--p3-leading);letter-spacing:var(--p3-tracking);font-weight:var(--p3-weight);color:var(--p3-color);text-transform:var(--p3-transform)}strong.sc-not-found-page,b.sc-not-found-page{font-weight:500}p.sc-not-found-page strong.sc-not-found-page,p.sc-not-found-page b.sc-not-found-page{color:var(--c-carbon-100)}.top-text.sc-not-found-page{text-align:center}.wrapper.sc-not-found-page{line-height:32px;min-height:100%;padding-top:100px;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-content:stretch;align-items:flex-start}pre.sc-not-found-page{min-width:0;overflow-x:auto;margin:1.6em 0;border-radius:4px;color:#16161d;background-color:#f8f8f8}pre[class*=language-].sc-not-found-page{margin:1.6em 0}pre.sc-not-found-page span.sc-not-found-page{display:inline}pre.sc-not-found-page code.sc-not-found-page{width:100%;display:block;min-width:0;padding-inline-end:1em;font-weight:500;font-size:14px;line-height:20px}code.sc-not-found-page{padding:1px 4px 2px;background-color:#ecf4fb;color:#16161d;border-radius:3px}";

const NotFoundPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.NotFound = () => (h(ResponsiveContainer, { id: "not-found", as: "section" }, h(Heading, { class: "top-text", level: 1 }, "404: Not Found"), h(Paragraph, { class: "top-text" }, "Houston, we have a problem! This URL does not link to an existing page. You might want to start with the", ' ', h("a", Object.assign({}, href('/')), "home page"), " or go to the ", h("a", { href: "/docs" }, "documentation portal"), " welcome page."), h("webp-image", { alt: "404 not found graphic", src: "/assets/img/404.png", loading: "eager" })));
    this.defaults = undefined;
  }
  render() {
    const { NotFound } = this;
    return (h(Host, null, h("meta-tags", { defaults: this.defaults, pageTitle: "Not Found: 404 Error", description: 'This is a link to a page that does not exist. You should still visit this page to see how awesome our 404 page is though.' }), h("site-header", { defaults: this.defaults, class: "heading-container", sticky: true }), h(NotFound, null), h("pre-footer", { defaults: this.defaults }), h("capacitor-site-footer", { defaults: this.defaults })));
  }
};
NotFoundPage.style = notFoundPageCss;

export { NotFoundPage as N };

//# sourceMappingURL=not-found-page-8b6bc54d.js.map