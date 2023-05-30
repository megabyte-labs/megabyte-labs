import { r as registerInstance, h, k as Host } from './index-9fe124a3.js';

const blogPaginationCss = ".sc-blog-pagination-h{display:flex;justify-content:space-between;align-items:center}.sc-blog-pagination-h .rss-link.sc-blog-pagination{margin:0 auto;margin-top:14px;margin-bottom:14px}.sc-blog-pagination-h .link.sc-blog-pagination{display:flex;align-items:center;color:var(--c-lavender-70)}.sc-blog-pagination-h .link.back.sc-blog-pagination{margin-inline-end:var(--space-1)}.sc-blog-pagination-h .link.forward.sc-blog-pagination{margin-inline-start:var(--space-1)}";

const BlogPagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.render = () => (h(Host, null, h("a", { class: "rss-link", href: this.defaults.homepage + '/blog/rss.xml', target: "_blank", rel: "noopener" }, this.rssIcon ? rssIcon({}, { height: 32, width: 32 }) : '')));
    this.defaults = undefined;
    this.linkText = ['Older posts', 'Newer posts'];
    this.rssIcon = false;
  }
};
const rssIcon = ({ main = '#E3EDFF', second = '#597EFF' } = {}, props) => (h("svg", Object.assign({ viewBox: "0 0 32 32" }, props), h("circle", { fill: main, cx: "16", cy: "16", r: "16" }), h("path", { fill: second, d: "M11.139 18.861a2 2 0 00-1.996 1.993c0 1.1.896 1.986 1.996 1.986a1.99 1.99 0 001.996-1.986 1.997 1.997 0 00-1.996-1.993z" }), h("path", { fill: second, d: "M9.143 13.714v2.854c1.714 0 3.36.507 4.571 1.718 1.21 1.21 1.714 2.853 1.714 4.571h2.857c0-4.996-4.142-9.143-9.142-9.143z" }), h("path", { fill: second, d: "M9.143 9.143v2.853c6.107 0 10.853 4.75 10.853 10.861h2.86c0-7.56-6.142-13.714-13.713-13.714z" })));
BlogPagination.style = blogPaginationCss;

export { BlogPagination as B };

//# sourceMappingURL=blog-pagination-d1c03aa9.js.map