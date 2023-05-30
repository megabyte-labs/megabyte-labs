import { r as registerInstance, h } from './index-9fe124a3.js';
import { s as slugify } from './slugify-e65e71c9.js';
import './index-40ae1b73.js';
import { a as addListener } from './Heading-19e4b567.js';
import './Blockquote-02838ab9.js';
import './common-ec05915d.js';
import './Breadcrumbs-f91fb5a9.js';
import './Breakpoint-eaff237a.js';
import './Button-08ed8aa1.js';
import './Card-4d34e073.js';
import './DateTime-8119d1b0.js';
import './Grid-cc0c81db.js';
import './Paragraph-0aec567b.js';
import './ResponsiveContainer-7e776113.js';
import './Skeleton-a36d70a9.js';
import './Text-5fc0ba5c.js';
import './ThemeProvider-c5f8f970.js';

const resourceTocCss = ".sc-resource-toc-h{display:block;position:sticky;top:96px}@media (max-width: 768px){.sc-resource-toc-h{display:none}}nav.sc-resource-toc{margin:0;padding:0}ul.sc-resource-toc{font-size:14px;list-style:none;line-height:1.4em;padding:0 0 16px}li.sc-resource-toc{color:var(--c-carbon-80);margin-block-start:var(--space-1);margin-block-end:var(--space-1);cursor:pointer;list-style:none;color:var(--c-carbon-80);display:block;transition:0.2s transform ease, 0.2s color}li.active.sc-resource-toc{transform:translateX(8px);color:#597EFF}.title.sc-resource-toc{color:var(--c-indigo-60)}.cta-button.sc-resource-toc{margin-block-start:var(--space-3);font-weight:600;border-radius:6px;letter-spacing:0;text-transform:none;padding:12px 19px 10px;font-size:14px;line-height:1em;background:#3880FF;color:#fff}.sharing.sc-resource-toc{margin:0;border-top:2px solid #f3f5f9;padding-top:26px}.sharing.sc-resource-toc li.sc-resource-toc{margin:0;margin-right:6px;display:inline-block}.sharing.sc-resource-toc a.sc-resource-toc{color:#CBD2DD;font-size:20px}.sharing.sc-resource-toc a.sc-resource-toc:hover{color:var(--c-ionic-brand)}.sharing.sc-resource-toc #web-share.sc-resource-toc{display:none}";

const ResourceTOC = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.headings = new Map();
  }
  componentDidLoad() {
    addListener(({ entries }) => {
      entries.forEach(({ target, intersectionRatio }) => {
        if (!this.headings.get(target.id))
          return;
        const heading = this.headings.get(target.id);
        if (intersectionRatio === 0) {
          heading.inView = false;
        }
        else {
          heading.inView = true;
        }
      });
      this.getFirstInView();
    });
    this.titleNames.map((title) => {
      const id = `h-${slugify(title)}`;
      const item = document.getElementById(id);
      this.headings.set(id, Object.assign(Object.assign({}, this.headings.get(id)), { headingEl: item }));
    });
  }
  getFirstInView() {
    let gotFirst = false;
    for (const val of this.headings.values()) {
      if (!val.tocEl)
        continue;
      if (val.inView && !gotFirst) {
        val.tocEl.classList.add('active');
        gotFirst = true;
      }
      else {
        val.tocEl.classList.remove('active');
      }
    }
    if (!gotFirst) {
      const { tocEl } = [...this.headings.values()].reduce((acc, cur, i) => {
        var _a, _b;
        const curTop = (_a = cur.headingEl) === null || _a === void 0 ? void 0 : _a.offsetTop;
        const accTop = (_b = acc.headingEl) === null || _b === void 0 ? void 0 : _b.offsetTop;
        if (i === 0 || !accTop)
          return cur;
        if (Math.abs(window.scrollY - curTop) < Math.abs(window.scrollY - accTop)) {
          return cur;
        }
        else {
          return acc;
        }
      });
      tocEl === null || tocEl === void 0 ? void 0 : tocEl.classList.add('active');
    }
  }
  handleTocClick(ev) {
    var _a;
    const target = ev.target;
    if (!((_a = target === null || target === void 0 ? void 0 : target.dataset) === null || _a === void 0 ? void 0 : _a.id))
      return;
    const headingEl = this.headings.get(target.dataset.id).headingEl;
    window.scrollTo({
      top: headingEl.offsetTop - 100,
      behavior: 'smooth'
    });
  }
  render() {
    return (h("nav", null, h("ul", null, this.titleNames.map(link => (h("li", { class: "ui-paragraph-4", onClick: (ev) => this.handleTocClick(ev), "data-id": `h-${slugify(link)}`, ref: e => {
        var _a;
        const id = (_a = e === null || e === void 0 ? void 0 : e.dataset) === null || _a === void 0 ? void 0 : _a.id;
        if (!id || !e)
          return;
        this.headings.set(id, Object.assign(Object.assign({}, this.headings.get(id)), { tocEl: e }));
      } }, link))))));
  }
};
ResourceTOC.style = resourceTocCss;

export { ResourceTOC as resource_toc };

//# sourceMappingURL=resource-toc.entry.js.map