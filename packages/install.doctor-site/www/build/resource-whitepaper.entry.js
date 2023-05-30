import { r as registerInstance, h } from './index-9fe124a3.js';
import { C as Col } from './index-40ae1b73.js';
import './exports-14d8c63d.js';
import './utils-dcf93146.js';
import { t as trackView } from './tracking-service-c64257af.js';
import { T as ThemeProvider } from './ThemeProvider-c5f8f970.js';
import { R as ResponsiveContainer } from './ResponsiveContainer-7e776113.js';
import { H as Heading } from './Heading-19e4b567.js';
import { G as Grid } from './Grid-cc0c81db.js';
import { P as PrismicResponsiveImage } from './PrismicResponsiveImage-d2ecff99.js';
import { a as PrismicRichText } from './PrismicContent-ac78525c.js';
import './Blockquote-02838ab9.js';
import './common-ec05915d.js';
import './Breadcrumbs-f91fb5a9.js';
import './Breakpoint-eaff237a.js';
import './Button-08ed8aa1.js';
import './Card-4d34e073.js';
import './DateTime-8119d1b0.js';
import './Paragraph-0aec567b.js';
import './Skeleton-a36d70a9.js';
import './Text-5fc0ba5c.js';
import './_commonjsHelpers-9bc404fc.js';
import './index-9ec0b90a.js';
import './slugify-e65e71c9.js';

const resourceWhitepaperCss = "@charset \"UTF-8\";.ui-blockquote.sc-resource-whitepaper{clear:both}.prismic-raw-html.sc-resource-whitepaper{width:100%;overflow:auto;clear:both}.prismic-raw-html.sc-resource-whitepaper table.sc-resource-whitepaper{overflow-x:auto;margin-right:-15px;padding-right:15px;box-sizing:content-box;font-size:13px;border-collapse:collapse;border-spacing:0;margin-bottom:48px}.prismic-raw-html.sc-resource-whitepaper table.sc-resource-whitepaper td.sc-resource-whitepaper,.prismic-raw-html.sc-resource-whitepaper table.sc-resource-whitepaper th.sc-resource-whitepaper{text-align:left;min-width:120px;padding-right:12px;padding-top:12px;padding-bottom:12px}.prismic-raw-html.sc-resource-whitepaper table.sc-resource-whitepaper td.sc-resource-whitepaper:last-child,.prismic-raw-html.sc-resource-whitepaper table.sc-resource-whitepaper th.sc-resource-whitepaper:last-child{padding-right:0}.prismic-raw-html.sc-resource-whitepaper table.sc-resource-whitepaper th.sc-resource-whitepaper,.prismic-raw-html.sc-resource-whitepaper table.sc-resource-whitepaper b.sc-resource-whitepaper{font-weight:600}.prismic-raw-html.sc-resource-whitepaper table.sc-resource-whitepaper tbody.sc-resource-whitepaper tr.sc-resource-whitepaper td.sc-resource-whitepaper{border-top:1px solid #DEE3EA}.prismic-raw-html.sc-resource-whitepaper table.sc-resource-whitepaper tbody.sc-resource-whitepaper tr.sc-resource-whitepaper:first-child td.sc-resource-whitepaper{border-top:none}.prismic-raw-html.sc-resource-whitepaper table.sc-resource-whitepaper>thead.sc-resource-whitepaper>tr.sc-resource-whitepaper>th.sc-resource-whitepaper{border-bottom:1px solid #E9EDF3;font-weight:600}.prismic-ad.sc-resource-whitepaper{display:block;margin:var(--space-9) 0 var(--space-10);clear:both}.prismic-ad.sc-resource-whitepaper a.sc-resource-whitepaper{display:flex;flex-direction:column;justify-content:center;padding:var(--space-6) 368px var(--space-6) var(--space-6);border:var(--border-regular);border-color:var(--c-indigo-30);border-radius:var(--radius-2);overflow:hidden;position:relative;min-height:225px;transition:0.2s box-shadow ease-out}.prismic-ad.sc-resource-whitepaper a.sc-resource-whitepaper .ui-paragraph.sc-resource-whitepaper{margin-bottom:0}.prismic-ad.sc-resource-whitepaper a.sc-resource-whitepaper .prismic-ad__image.sc-resource-whitepaper{position:absolute;right:0;top:0;bottom:0;width:100%;max-width:337px;object-fit:cover;z-index:-1}.prismic-ad.sc-resource-whitepaper a.sc-resource-whitepaper:hover{box-shadow:var(--elevation-3)}.prismic-ad.sc-resource-whitepaper .ui-heading.sc-resource-whitepaper{color:var(--c-indigo-100);margin-bottom:var(--space-2)}@media (max-width: 1023px){.prismic-ad.sc-resource-whitepaper a.sc-resource-whitepaper{padding-right:var(--space-6)}.prismic-ad.sc-resource-whitepaper a.sc-resource-whitepaper .prismic-ad__image.sc-resource-whitepaper{opacity:0.25}}.prismic-youtube-container.sc-resource-whitepaper{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%;clear:both}.prismic-youtube-container.sc-resource-whitepaper iframe.sc-resource-whitepaper,.prismic-youtube-container.sc-resource-whitepaper object.sc-resource-whitepaper,.prismic-youtube-container.sc-resource-whitepaper embed.sc-resource-whitepaper{position:absolute;top:0;left:0;width:100%;height:100%}.prismic-floating-image.sc-resource-whitepaper{width:295px;float:right;margin:8px -20px 32px 74px}.prismic-floating-image.left.sc-resource-whitepaper{float:left;margin-right:74px;margin-left:-20px}.prismic-floating-image.sc-resource-whitepaper img.sc-resource-whitepaper{box-shadow:var(--elevation-8)}.prismic-floating-image.sc-resource-whitepaper figcaption.sc-resource-whitepaper{color:var(--c-carbon-20);font-size:11px;margin-top:13px}@media (max-width: 1023px){.prismic-floating-image.sc-resource-whitepaper{margin-right:0;margin-left:32px;width:100%}.prismic-floating-image.left.sc-resource-whitepaper{margin-left:0;margin-right:32px}}.resource-whitepaper__cta.sc-resource-whitepaper{background:linear-gradient(to bottom, #fff, #f6f8fc);border-bottom:1px solid #e5e7eb;margin-top:-78px;padding-top:78px}.resource-whitepaper__hgroup.sc-resource-whitepaper{margin:auto;display:flex;flex-direction:column;align-items:center;text-align:center;padding-top:var(--space-9);padding-bottom:var(--space-9);max-width:840px;text-align:center}.resource-whitepaper__hgroup.sc-resource-whitepaper .ui-heading-6.sc-resource-whitepaper{margin-bottom:var(--space-2)}.resource-whitepaper__tagline.sc-resource-whitepaper{max-width:800px;color:var(--c-carbon-60);letter-spacing:-0.02em;font-weight:600;line-height:32px;font-size:18px}.resource-whitepaper__content.sc-resource-whitepaper{padding-top:96px}.resource-whitepaper__content.sc-resource-whitepaper img.sc-resource-whitepaper{max-width:100%;height:auto}.resource-whitepaper__description.sc-resource-whitepaper p.sc-resource-whitepaper:first-child{color:#6e7f99;font-size:18px;line-height:28px}.resource-whitepaper__description.sc-resource-whitepaper ul.sc-resource-whitepaper{list-style-type:none;padding:0;margin:16px 0 32px;line-height:20px}.resource-whitepaper__description.sc-resource-whitepaper li.sc-resource-whitepaper{padding-left:20px;position:relative}.resource-whitepaper__description.sc-resource-whitepaper li.sc-resource-whitepaper:before{content:\"•\";margin-right:10px;opacity:0.8;position:absolute;left:0}";

const ResourceWhitepaper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  checkForAds(prismicData) {
    var _a;
    const slices = ((_a = prismicData === null || prismicData === void 0 ? void 0 : prismicData.doc.data) === null || _a === void 0 ? void 0 : _a.body) || [];
    slices.forEach((slice) => {
      if (slice.slice_type === 'ad') {
        trackView(`${location.host}${location.pathname}`, 'Resource Center');
      }
    });
  }
  componentWillLoad() {
    this.checkForAds(this.prismicData);
  }
  render() {
    if (!this.prismicData)
      return;
    const resource = this.prismicData;
    return [
      h(ThemeProvider, { type: "editorial" }, h("div", { class: "resource-whitepaper" }, h("div", { class: "resource-whitepaper__cta" }, h(ResponsiveContainer, null, h("hgroup", { class: "resource-whitepaper__hgroup" }, h(Heading, { level: 6 }, "Whitepaper"), h(Heading, { level: 1 }, resource.title), h("p", { class: "resource-whitepaper__tagline" }, resource.doc.data.tagline)))), h(ResponsiveContainer, null, h(Grid, { class: "resource-whitepaper__content" }, h(Col, { cols: 12, xs: 12, sm: 6, md: 6 }, h(PrismicResponsiveImage, { image: resource.doc.data.cover_image, class: "resource-whitepaper__illustration" }), h(PrismicRichText, { richText: resource.doc.data.description, class: "resource-whitepaper__description" })), h(Col, { cols: 12, xs: 12, sm: 6, md: 6 }, h("hubspot-form", { formId: resource.doc.data.hubspot_form_id }))))))
    ];
  }
};
;
ResourceWhitepaper.style = resourceWhitepaperCss;

export { ResourceWhitepaper as resource_whitepaper };

//# sourceMappingURL=resource-whitepaper.entry.js.map