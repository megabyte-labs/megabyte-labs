import { r as registerInstance, h, k as Host, l as getElement } from './index-9fe124a3.js';
import { a as Breadcrumbs, I as IntersectionHelper } from './index-257c74e4.js';

const blogSubnavCss = ".sc-blog-subnav-h{display:block;background:white;position:sticky;height:var(--blog-subnav-height);top:0;z-index:100}.subnav-wrapper.sc-blog-subnav{position:relative;margin:0 auto;height:100%;max-width:736px}.ui-breadcrumbs.sc-blog-subnav{min-width:0;margin-inline-end:var(--space-3)}.ui-breadcrumbs.sc-blog-subnav .ui-heading-5.sc-blog-subnav{margin-block-end:0}.ui-breadcrumbs.sc-blog-subnav li.sc-blog-subnav{font-weight:500;display:flex;align-items:center;white-space:nowrap}.ui-breadcrumbs.sc-blog-subnav li.sc-blog-subnav a.sc-blog-subnav{font-weight:inherit}.ui-breadcrumbs.sc-blog-subnav li.sc-blog-subnav:last-of-type{overflow:hidden}.ui-breadcrumbs.sc-blog-subnav li.sc-blog-subnav:last-of-type a.sc-blog-subnav{padding-block-start:2px;padding-block-end:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.blog-search-wrapper.sc-blog-subnav{flex-grow:1;display:flex;justify-content:flex-end}.blog-search-wrapper.sc-blog-subnav .mobile.sc-blog-subnav{align-items:center}.blog-search-wrapper.sc-blog-subnav .mobile.sc-blog-subnav ion-icon.sc-blog-subnav{margin-inline-end:var(--space-1);font-size:20px}.content.sc-blog-subnav{position:relative;display:flex;justify-content:space-between;padding-block-start:var(--space-2);padding-block-end:var(--space-2);height:100%}.subnav-dropdown.sc-blog-subnav{background:white;left:0;right:0;position:absolute;top:0;display:none;transition:transform 2s ease}.subnav-dropdown.open.sc-blog-subnav{transform:translateY(100%);display:block}.subnav-dropdown.sc-blog-subnav .ui-container.sc-blog-subnav{display:flex;align-items:center;justify-content:space-between;padding-block-start:var(--space-2);padding-block-end:var(--space-2)}";

const BlogSubnav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.render = () => (h(Host, { class: {
        'sticky': this.sticky,
        'ui-container': true,
      } }, h("div", { class: "subnav-wrapper" }, h("div", { class: "content" }, h(Breadcrumbs, { onClick: () => window.scrollTo(0, 0) }, this.breadcrumbs.map((crumb, i) => (h("li", null, i !== this.breadcrumbs.length - 1 ? (h("a", { class: "ui-heading-5", href: `${crumb[1]}` }, h("span", { class: "arrow" }, "<-"), crumb[0])) : (crumb[0]))))), h("div", { class: "blog-search-wrapper" })))));
    this.sticky = false;
    this.open = false;
    this.breadcrumbs = [];
    this.socialActions = false;
    this.pagination = false;
  }
  componentDidLoad() {
    IntersectionHelper.addListener(({ entries }) => {
      const e = entries.find(e => e.target === this.el);
      if (!e) {
        return;
      }
      if (e.intersectionRatio < 1) {
        this.sticky = true;
      }
      else {
        this.sticky = false;
      }
    });
    IntersectionHelper.observe(this.el);
  }
  get el() { return getElement(this); }
};
BlogSubnav.style = blogSubnavCss;

export { BlogSubnav as B };

//# sourceMappingURL=blog-subnav-29f4497d.js.map