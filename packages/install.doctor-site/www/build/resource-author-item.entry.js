import { r as registerInstance, h, k as Host } from './index-9fe124a3.js';
import { P as PrismicResponsiveImage } from './PrismicResponsiveImage-d2ecff99.js';
import './index-40ae1b73.js';
import { P as Paragraph } from './Paragraph-0aec567b.js';
import './common-ec05915d.js';
import './Blockquote-02838ab9.js';
import './Breadcrumbs-f91fb5a9.js';
import './Breakpoint-eaff237a.js';
import './Button-08ed8aa1.js';
import './Card-4d34e073.js';
import './DateTime-8119d1b0.js';
import './Grid-cc0c81db.js';
import './Heading-19e4b567.js';
import './ResponsiveContainer-7e776113.js';
import './Skeleton-a36d70a9.js';
import './Text-5fc0ba5c.js';
import './ThemeProvider-c5f8f970.js';

const resourceAuthorItemCss = ".sc-resource-author-item-h{display:block}.ui-paragraph.sc-resource-author-item{margin:0}.link-wrapper.sc-resource-author-item{display:flex}.image.sc-resource-author-item{display:inline-block;margin-inline-end:7px;width:28px;height:28px;border-radius:100%}.info.sc-resource-author-item{display:inline-flex;flex-direction:column;justify-content:space-between}.info.sc-resource-author-item .name.sc-resource-author-item{color:#010610}.info.sc-resource-author-item .title.sc-resource-author-item{color:#92A1B3}";

const ResourceAuthorItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    if (!this.author)
      return;
    const { link, avatar, title, name } = this.author;
    return (h(Host, null, h("a", { class: "link-wrapper", href: link, target: "_blank", rel: "noopener" }, h(PrismicResponsiveImage, { class: "image", image: avatar, height: "28", width: "28" }), h("div", { class: "info" }, h(Paragraph, { level: 4, class: "name", leading: "none" }, name), h(Paragraph, { level: 6, class: "title", leading: "none" }, title)))));
  }
};
ResourceAuthorItem.style = resourceAuthorItemCss;

export { ResourceAuthorItem as resource_author_item };

//# sourceMappingURL=resource-author-item.entry.js.map