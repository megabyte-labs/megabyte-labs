import { r as registerInstance, h, k as Host, l as getElement } from './index-9fe124a3.js';
import { C as Col } from './index-40ae1b73.js';
import './exports-14d8c63d.js';
import { s as slugify } from './slugify-e65e71c9.js';
import { g as getAuthorsForPrismicDoc, p as prismicResourceToToc } from './prismic-613d03ec.js';
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

const resourceArticleCss = ".ui-blockquote.sc-resource-article{clear:both}.prismic-raw-html.sc-resource-article{width:100%;overflow:auto;clear:both}.prismic-raw-html.sc-resource-article table.sc-resource-article{overflow-x:auto;margin-right:-15px;padding-right:15px;box-sizing:content-box;font-size:13px;border-collapse:collapse;border-spacing:0;margin-bottom:48px}.prismic-raw-html.sc-resource-article table.sc-resource-article td.sc-resource-article,.prismic-raw-html.sc-resource-article table.sc-resource-article th.sc-resource-article{text-align:left;min-width:120px;padding-right:12px;padding-top:12px;padding-bottom:12px}.prismic-raw-html.sc-resource-article table.sc-resource-article td.sc-resource-article:last-child,.prismic-raw-html.sc-resource-article table.sc-resource-article th.sc-resource-article:last-child{padding-right:0}.prismic-raw-html.sc-resource-article table.sc-resource-article th.sc-resource-article,.prismic-raw-html.sc-resource-article table.sc-resource-article b.sc-resource-article{font-weight:600}.prismic-raw-html.sc-resource-article table.sc-resource-article tbody.sc-resource-article tr.sc-resource-article td.sc-resource-article{border-top:1px solid #DEE3EA}.prismic-raw-html.sc-resource-article table.sc-resource-article tbody.sc-resource-article tr.sc-resource-article:first-child td.sc-resource-article{border-top:none}.prismic-raw-html.sc-resource-article table.sc-resource-article>thead.sc-resource-article>tr.sc-resource-article>th.sc-resource-article{border-bottom:1px solid #E9EDF3;font-weight:600}.prismic-ad.sc-resource-article{display:block;margin:var(--space-9) 0 var(--space-10);clear:both}.prismic-ad.sc-resource-article a.sc-resource-article{display:flex;flex-direction:column;justify-content:center;padding:var(--space-6) 368px var(--space-6) var(--space-6);border:var(--border-regular);border-color:var(--c-indigo-30);border-radius:var(--radius-2);overflow:hidden;position:relative;min-height:225px;transition:0.2s box-shadow ease-out}.prismic-ad.sc-resource-article a.sc-resource-article .ui-paragraph.sc-resource-article{margin-bottom:0}.prismic-ad.sc-resource-article a.sc-resource-article .prismic-ad__image.sc-resource-article{position:absolute;right:0;top:0;bottom:0;width:100%;max-width:337px;object-fit:cover;z-index:-1}.prismic-ad.sc-resource-article a.sc-resource-article:hover{box-shadow:var(--elevation-3)}.prismic-ad.sc-resource-article .ui-heading.sc-resource-article{color:var(--c-indigo-100);margin-bottom:var(--space-2)}@media (max-width: 1023px){.prismic-ad.sc-resource-article a.sc-resource-article{padding-right:var(--space-6)}.prismic-ad.sc-resource-article a.sc-resource-article .prismic-ad__image.sc-resource-article{opacity:0.25}}.prismic-youtube-container.sc-resource-article{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%;clear:both}.prismic-youtube-container.sc-resource-article iframe.sc-resource-article,.prismic-youtube-container.sc-resource-article object.sc-resource-article,.prismic-youtube-container.sc-resource-article embed.sc-resource-article{position:absolute;top:0;left:0;width:100%;height:100%}.prismic-floating-image.sc-resource-article{width:295px;float:right;margin:8px -20px 32px 74px}.prismic-floating-image.left.sc-resource-article{float:left;margin-right:74px;margin-left:-20px}.prismic-floating-image.sc-resource-article img.sc-resource-article{box-shadow:var(--elevation-8)}.prismic-floating-image.sc-resource-article figcaption.sc-resource-article{color:var(--c-carbon-20);font-size:11px;margin-top:13px}@media (max-width: 1023px){.prismic-floating-image.sc-resource-article{margin-right:0;margin-left:32px;width:100%}.prismic-floating-image.left.sc-resource-article{margin-left:0;margin-right:32px}}.sc-resource-article-h{padding-bottom:76px}.heading-group.sc-resource-article img.sc-resource-article{max-width:100%;margin-block-end:var(--space-11)}.heading-group.sc-resource-article .ui-heading-1.sc-resource-article{margin-block-start:var(--space-10);margin-block-end:var(--space-5)}.heading-group.sc-resource-article .ui-paragraph.sc-resource-article{color:#73849A;margin-block-end:var(--space-6)}resource-toc.sc-resource-article{margin-block-start:var(--space-10)}resource-author-item.sc-resource-article{margin-block-start:var(--space-3);margin-block-end:var(--space-3)}resource-author-item.sc-resource-article:last-of-type{margin-block-end:73px}article.sc-resource-article .ui-heading-2.sc-resource-article{margin-block-start:var(--space-9);margin-block-end:var(--space-3)}article.sc-resource-article .ui-heading-3.sc-resource-article{margin-block-start:var(--space-8);margin-block-end:var(--space-3)}article.sc-resource-article .ui-heading-4.sc-resource-article{margin-block-start:var(--space-3);margin-block-end:var(--space-2)}article.sc-resource-article .ui-heading.sc-resource-article:first-child{margin-block-start:0}article.sc-resource-article p.sc-resource-article{font-size:16px;letter-spacing:-0.011em;line-height:1.75em;margin-bottom:1.8em;color:var(--c-indigo-80)}article.sc-resource-article ul.sc-resource-article li.sc-resource-article{list-style-type:none}article.sc-resource-article ul.sc-resource-article li.sc-resource-article::before{content:\"\";display:inline-block;width:6px;height:6px;background:#b2becd;position:absolute;top:12px;left:0;border-radius:8px}article.sc-resource-article ol.sc-resource-article li.sc-resource-article{list-style-type:counter-style}article.sc-resource-article ul.sc-resource-article,article.sc-resource-article ol.sc-resource-article{font-size:16px;letter-spacing:-0.011em;line-height:1.75em;margin-bottom:1.8em;color:var(--c-indigo-80)}article.sc-resource-article li.sc-resource-article{position:relative;padding-left:18px}article.sc-resource-article table.sc-resource-article{overflow-x:auto;margin-right:-15px;padding-right:15px;box-sizing:content-box;font-size:13px}article.sc-resource-article table.sc-resource-article td.sc-resource-article,article.sc-resource-article table.sc-resource-article th.sc-resource-article{min-width:120px;padding-right:12px}article.sc-resource-article table.sc-resource-article tbody.sc-resource-article tr.sc-resource-article td.sc-resource-article{border-top-color:#DEE3EA}article.sc-resource-article table.sc-resource-article>thead.sc-resource-article>tr.sc-resource-article>th.sc-resource-article{border-bottom-color:#E9EDF3;font-weight:600}article.sc-resource-article img.sc-resource-article{max-width:100%}";

const ResourceArticle = class {
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
    const authors = getAuthorsForPrismicDoc(this.prismicData.doc);
    const resource = this.prismicData;
    return (h(Host, null, h("div", { class: "resource-article" }, h(ThemeProvider, { type: "editorial" }, h(ResponsiveContainer, null, h(Grid, null, h(Col, { md: 3, sm: 3 }, h("resource-toc", { titleNames: prismicResourceToToc(this.prismicData) })), h(Col, { md: 9, sm: 9, xs: 12, cols: 12 }, h("div", { class: "resource-article-content" }, h("div", { class: "heading-group" }, h(Heading, { class: "ui-theme--editorial", level: 1, id: slugify(resource.title) }, resource.title), h(Paragraph, { level: 2 }, resource.description), authors.map(author => (h("resource-author-item", { author: author }))), h(PrismicResponsiveImage, { image: resource.doc.data.hero_image, width: "800", height: "420" })), h("article", null, h(PrismicContent, { content: resource.doc.data.body })))))))), h(GetStructuredData, { resource: resource })));
  }
  get el() { return getElement(this); }
};
;
const GetStructuredData = ({ resource }) => {
  const linkedData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": resource.title,
    "image": [
      resource.metaImage
    ],
    "datePublished": resource.publishDate,
    "dateModified": resource.updatedDate,
    "author": {
      "@type": "Person",
      "name": resource.authors[0].name
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ionic",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ionicframework.com/img/meta/logo.png"
      }
    }
  };
  return h("script", { type: "application/ld+json" }, JSON.stringify(linkedData));
};
ResourceArticle.style = resourceArticleCss;

export { ResourceArticle as resource_article };

//# sourceMappingURL=resource-article.entry.js.map