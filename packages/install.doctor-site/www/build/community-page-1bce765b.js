import { r as registerInstance, h, k as Host } from './index-9fe124a3.js';
import { R as ResponsiveContainer, c as PrismicRichText, G as Grid, C as Col, H as Heading, P as Paragraph } from './index-257c74e4.js';

const communityPageCss = ".sc-community-page:root{--c-capacitor-blue:#119eff}.sc-community-page-h{display:block;--h1-color:var(--c-carbon-100)}#top.sc-community-page{margin-block-start:120px;margin-block-end:101px}#top.sc-community-page .heading-group.sc-community-page{margin-block-end:116px;text-align:center;max-width:704px;margin-inline-start:auto;margin-inline-end:auto}#top.sc-community-page .heading-group.sc-community-page .ui-heading.sc-community-page{font-size:clamp(52px, 15.5vw, 64px)}#top.sc-community-page .heading-group.sc-community-page .ui-paragraph.sc-community-page{font-size:clamp(18px, 4.5vw, 20px)}#top.sc-community-page .cards.sc-community-page{display:grid;column-gap:64px;row-gap:64px;grid-template-columns:repeat(3, minmax(100px, 340px));justify-content:space-between}@media screen and (max-width: 640px){#top.sc-community-page .cards.sc-community-page{grid-template-columns:none;grid-template-row:repeat(3, minmax(100px, 340px))}}@media screen and (max-width: 1023px){#top.sc-community-page .cards.sc-community-page{column-gap:32px}}#top.sc-community-page .cards.sc-community-page .card.sc-community-page{overflow:hidden}#top.sc-community-page .cards.sc-community-page .card.sc-community-page .image-wrapper.sc-community-page{overflow:hidden;border-radius:var(--radius-2);margin-block-end:24px;max-width:340px}#top.sc-community-page .cards.sc-community-page .card.sc-community-page .image-wrapper.sc-community-page img.sc-community-page{width:100%;transition:transform 0.2s cubic-bezier(0.32, 0.72, 0, 1)}#top.sc-community-page .cards.sc-community-page .card.sc-community-page:hover img.sc-community-page,#top.sc-community-page .cards.sc-community-page .card.sc-community-page:active img.sc-community-page,#top.sc-community-page .cards.sc-community-page .card.sc-community-page:focus img.sc-community-page{transform:scale(1.05)}#websites.sc-community-page{margin-block-end:160px}#websites.sc-community-page .ui-grid.sc-community-page{column-gap:32px;row-gap:64px}#websites.sc-community-page .ui-col.sc-community-page img.sc-community-page{margin-block-end:27px}#websites.sc-community-page .ui-col.sc-community-page .link.sc-community-page::after{content:\" ->\";letter-spacing:0;white-space:nowrap;color:var(--c-capacitor-blue);transition:opacity 0.2s ease-out}#websites.sc-community-page .ui-col.sc-community-page .link.sc-community-page:hover::after,#websites.sc-community-page .ui-col.sc-community-page .link.sc-community-page:active::after{opacity:0.7}#newsletter.sc-community-page{margin-block-end:160px}#what-is.sc-community-page{margin-bottom:0}@media (max-width: 640px){#top.sc-community-page .image-wrapper.sc-community-page{max-width:430px !important}}";

const CommunityPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.Top = () => {
      const { top, top__list } = this.data;
      return (h(ResponsiveContainer, { id: "top", as: "section" }, h("div", { class: "heading-group" }, h(PrismicRichText, { richText: top, paragraphLevel: 2 })), h("div", { class: "cards" }, top__list.map(({ image, text, link: { target, url } }) => (h("a", { target: target, href: url, class: "card" }, h("div", { class: "image-wrapper" }, h("prismic-image", { defaults: this.data.defaults, image: image, loading: "eager" })), h(PrismicRichText, { richText: text })))))));
    };
    this.Websites = () => {
      const { websites__list } = this.data;
      const dimensions = ['48x48', '48x48', '48x48', '48x48'];
      return (h(ResponsiveContainer, { id: "websites", as: "section" }, h(Grid, null, websites__list.map(({ icon, text, link }, i) => {
        const [width, height] = dimensions[i].split('x');
        return (h(Col, { cols: 12, xs: 6, md: 3 }, h("div", { class: "image-wrapper" }, h("prismic-image", { defaults: this.data.defaults, width: width, height: height, image: icon })), h(PrismicRichText, { richText: text }), h(PrismicRichText, { class: "link", richText: link })));
      }))));
    };
    this.WhyJoin = () => {
      return (h(ResponsiveContainer, { id: "what-is", as: "section" }, h("div", { class: "ui-container" }, h("ion-icon", { class: "what-is-info-icon", name: "information-circle-outline" }), h(Heading, { class: "quote-summary", level: 2 }, h("b", null, this.data.defaults.communityPage.whyJoin.title)), h(Paragraph, { class: "quote-summary" }, this.data.defaults.communityPage.whyJoin.paragraph1), h(Paragraph, { class: "quote-summary" }, this.data.defaults.communityPage.whyJoin.paragraph2), h(Paragraph, { class: "quote-summary" }, this.data.defaults.communityPage.whyJoin.paragraph3))));
    };
    this.data = undefined;
  }
  render() {
    const { Top, Websites, WhyJoin } = this;
    return (h(Host, null, h("meta-tags", { defaults: this.data.defaults, pageTitle: this.data.defaults.communityPage.meta.pageTitle, description: this.data.defaults.communityPage.meta.description }), h("site-header", { defaults: this.data.defaults, class: "heading-container", sticky: true }), h(Top, null), h(Websites, null), h(WhyJoin, null), h("pre-footer", { defaults: this.data.defaults }), h("capacitor-site-footer", { defaults: this.data.defaults })));
  }
};
CommunityPage.style = communityPageCss;

export { CommunityPage as C };

//# sourceMappingURL=community-page-1bce765b.js.map