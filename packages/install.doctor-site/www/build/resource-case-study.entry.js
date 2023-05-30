import { r as registerInstance, h, l as getElement } from './index-9fe124a3.js';
import { C as Col } from './index-40ae1b73.js';
import './exports-14d8c63d.js';
import { s as slugify } from './slugify-e65e71c9.js';
import { p as prismicResourceToToc } from './prismic-613d03ec.js';
import './utils-dcf93146.js';
import { t as trackView } from './tracking-service-c64257af.js';
import { T as ThemeProvider } from './ThemeProvider-c5f8f970.js';
import { R as ResponsiveContainer } from './ResponsiveContainer-7e776113.js';
import { G as Grid } from './Grid-cc0c81db.js';
import { H as Heading } from './Heading-19e4b567.js';
import { P as Paragraph } from './Paragraph-0aec567b.js';
import { P as PrismicResponsiveImage } from './PrismicResponsiveImage-d2ecff99.js';
import { P as PrismicContent } from './PrismicContent-ac78525c.js';
import './Blockquote-02838ab9.js';
import './common-ec05915d.js';
import './Breadcrumbs-f91fb5a9.js';
import './Breakpoint-eaff237a.js';
import './Button-08ed8aa1.js';
import './Card-4d34e073.js';
import './DateTime-8119d1b0.js';
import './Skeleton-a36d70a9.js';
import './Text-5fc0ba5c.js';
import './_commonjsHelpers-9bc404fc.js';
import './index-9ec0b90a.js';

const resourceCaseStudyCss = ".ui-blockquote.sc-resource-case-study{clear:both}.prismic-raw-html.sc-resource-case-study{width:100%;overflow:auto;clear:both}.prismic-raw-html.sc-resource-case-study table.sc-resource-case-study{overflow-x:auto;margin-right:-15px;padding-right:15px;box-sizing:content-box;font-size:13px;border-collapse:collapse;border-spacing:0;margin-bottom:48px}.prismic-raw-html.sc-resource-case-study table.sc-resource-case-study td.sc-resource-case-study,.prismic-raw-html.sc-resource-case-study table.sc-resource-case-study th.sc-resource-case-study{text-align:left;min-width:120px;padding-right:12px;padding-top:12px;padding-bottom:12px}.prismic-raw-html.sc-resource-case-study table.sc-resource-case-study td.sc-resource-case-study:last-child,.prismic-raw-html.sc-resource-case-study table.sc-resource-case-study th.sc-resource-case-study:last-child{padding-right:0}.prismic-raw-html.sc-resource-case-study table.sc-resource-case-study th.sc-resource-case-study,.prismic-raw-html.sc-resource-case-study table.sc-resource-case-study b.sc-resource-case-study{font-weight:600}.prismic-raw-html.sc-resource-case-study table.sc-resource-case-study tbody.sc-resource-case-study tr.sc-resource-case-study td.sc-resource-case-study{border-top:1px solid #DEE3EA}.prismic-raw-html.sc-resource-case-study table.sc-resource-case-study tbody.sc-resource-case-study tr.sc-resource-case-study:first-child td.sc-resource-case-study{border-top:none}.prismic-raw-html.sc-resource-case-study table.sc-resource-case-study>thead.sc-resource-case-study>tr.sc-resource-case-study>th.sc-resource-case-study{border-bottom:1px solid #E9EDF3;font-weight:600}.prismic-ad.sc-resource-case-study{display:block;margin:var(--space-9) 0 var(--space-10);clear:both}.prismic-ad.sc-resource-case-study a.sc-resource-case-study{display:flex;flex-direction:column;justify-content:center;padding:var(--space-6) 368px var(--space-6) var(--space-6);border:var(--border-regular);border-color:var(--c-indigo-30);border-radius:var(--radius-2);overflow:hidden;position:relative;min-height:225px;transition:0.2s box-shadow ease-out}.prismic-ad.sc-resource-case-study a.sc-resource-case-study .ui-paragraph.sc-resource-case-study{margin-bottom:0}.prismic-ad.sc-resource-case-study a.sc-resource-case-study .prismic-ad__image.sc-resource-case-study{position:absolute;right:0;top:0;bottom:0;width:100%;max-width:337px;object-fit:cover;z-index:-1}.prismic-ad.sc-resource-case-study a.sc-resource-case-study:hover{box-shadow:var(--elevation-3)}.prismic-ad.sc-resource-case-study .ui-heading.sc-resource-case-study{color:var(--c-indigo-100);margin-bottom:var(--space-2)}@media (max-width: 1023px){.prismic-ad.sc-resource-case-study a.sc-resource-case-study{padding-right:var(--space-6)}.prismic-ad.sc-resource-case-study a.sc-resource-case-study .prismic-ad__image.sc-resource-case-study{opacity:0.25}}.prismic-youtube-container.sc-resource-case-study{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%;clear:both}.prismic-youtube-container.sc-resource-case-study iframe.sc-resource-case-study,.prismic-youtube-container.sc-resource-case-study object.sc-resource-case-study,.prismic-youtube-container.sc-resource-case-study embed.sc-resource-case-study{position:absolute;top:0;left:0;width:100%;height:100%}.prismic-floating-image.sc-resource-case-study{width:295px;float:right;margin:8px -20px 32px 74px}.prismic-floating-image.left.sc-resource-case-study{float:left;margin-right:74px;margin-left:-20px}.prismic-floating-image.sc-resource-case-study img.sc-resource-case-study{box-shadow:var(--elevation-8)}.prismic-floating-image.sc-resource-case-study figcaption.sc-resource-case-study{color:var(--c-carbon-20);font-size:11px;margin-top:13px}@media (max-width: 1023px){.prismic-floating-image.sc-resource-case-study{margin-right:0;margin-left:32px;width:100%}.prismic-floating-image.left.sc-resource-case-study{margin-left:0;margin-right:32px}}.sc-resource-case-study-h{padding-bottom:76px}.heading-group.sc-resource-case-study img.sc-resource-case-study{max-width:100%;margin-block-end:var(--space-11)}.heading-group.sc-resource-case-study .ui-heading-1.sc-resource-case-study{margin-block-start:var(--space-10);margin-block-end:var(--space-5)}.heading-group.sc-resource-case-study .ui-paragraph.sc-resource-case-study{color:#73849A;margin-block-end:var(--space-6)}resource-toc.sc-resource-case-study{margin-block-start:var(--space-10)}resource-author-item.sc-resource-case-study{margin-block-start:var(--space-3);margin-block-end:var(--space-3)}resource-author-item.sc-resource-case-study:last-of-type{margin-block-end:73px}article.sc-resource-case-study .ui-heading-2.sc-resource-case-study{margin-block-start:var(--space-9);margin-block-end:var(--space-3)}article.sc-resource-case-study .ui-heading-3.sc-resource-case-study{margin-block-start:var(--space-8);margin-block-end:var(--space-3)}article.sc-resource-case-study .ui-heading-4.sc-resource-case-study{margin-block-start:var(--space-3);margin-block-end:var(--space-2)}article.sc-resource-case-study .ui-heading.sc-resource-case-study:first-child{margin-block-start:0}article.sc-resource-case-study p.sc-resource-case-study{font-size:16px;letter-spacing:-0.011em;line-height:1.75em;margin-bottom:1.8em;color:var(--c-indigo-80)}article.sc-resource-case-study ul.sc-resource-case-study li.sc-resource-case-study{list-style-type:none}article.sc-resource-case-study ul.sc-resource-case-study li.sc-resource-case-study::before{content:\"\";display:inline-block;width:6px;height:6px;background:#b2becd;position:absolute;top:12px;left:0;border-radius:8px}article.sc-resource-case-study ol.sc-resource-case-study li.sc-resource-case-study{list-style-type:counter-style}article.sc-resource-case-study ul.sc-resource-case-study,article.sc-resource-case-study ol.sc-resource-case-study{font-size:16px;letter-spacing:-0.011em;line-height:1.75em;margin-bottom:1.8em;color:var(--c-indigo-80)}article.sc-resource-case-study li.sc-resource-case-study{position:relative;padding-left:18px}article.sc-resource-case-study table.sc-resource-case-study{overflow-x:auto;margin-right:-15px;padding-right:15px;box-sizing:content-box;font-size:13px}article.sc-resource-case-study table.sc-resource-case-study td.sc-resource-case-study,article.sc-resource-case-study table.sc-resource-case-study th.sc-resource-case-study{min-width:120px;padding-right:12px}article.sc-resource-case-study table.sc-resource-case-study tbody.sc-resource-case-study tr.sc-resource-case-study td.sc-resource-case-study{border-top-color:#DEE3EA}article.sc-resource-case-study table.sc-resource-case-study>thead.sc-resource-case-study>tr.sc-resource-case-study>th.sc-resource-case-study{border-bottom-color:#E9EDF3;font-weight:600}article.sc-resource-case-study img.sc-resource-case-study{max-width:100%}";

const ResourceCaseStudy = class {
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
    const resource = this.prismicData;
    return [
      // <ResourcesSubNav resourceItem={resource} />,
      h("div", { class: "resource-article resource-case-study" }, h(ThemeProvider, { type: "editorial" }, h(ResponsiveContainer, null, h(Grid, null, h(Col, { md: 3, sm: 3 }, h("resource-toc", { titleNames: prismicResourceToToc(this.prismicData) })), h(Col, { md: 9, sm: 9, xs: 12, cols: 12 }, h("div", { class: "resource-article-content" }, h("div", { class: "heading-group" }, h(Heading, { level: 1, id: slugify(resource.title) }, resource.title), h(Paragraph, { level: 2 }, resource.description), h(PrismicResponsiveImage, { image: resource.doc.data.hero_image, width: "800", height: "420" })), h("article", null, h(PrismicContent, { content: resource.doc.data.body })))))))),
    ];
  }
  get el() { return getElement(this); }
};
;
ResourceCaseStudy.style = resourceCaseStudyCss;

export { ResourceCaseStudy as resource_case_study };

//# sourceMappingURL=resource-case-study.entry.js.map