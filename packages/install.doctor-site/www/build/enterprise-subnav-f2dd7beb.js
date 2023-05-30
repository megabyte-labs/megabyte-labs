import { r as registerInstance, h, k as Host, l as getElement } from './index-9fe124a3.js';

const enterpriseSubnavCss = ".sc-enterprise-subnav-h{--height:3.5rem;display:block;overflow:hidden;color:white}.visible.sc-enterprise-subnav-h .wrapper.sc-enterprise-subnav{transform:translateY(var(--height))}.wrapper.sc-enterprise-subnav{background:rgba(0, 0, 0, 0.8);backdrop-filter:saturate(180%) blur(32px);display:flex;justify-content:space-between;align-items:center;overflow-x:auto;overflow-y:hidden;position:fixed;top:calc(-1 * var(--height));z-index:1001;height:var(--height);width:100%;transition:transform 0.25s ease-out}.title.sc-enterprise-subnav{font-weight:600;font-size:1.25rem;letter-spacing:-0.03em}.cta-row.sc-enterprise-subnav{display:flex}.cta-row.sc-enterprise-subnav [class*=btn].sc-enterprise-subnav{margin-inline-start:0.5rem;border-radius:8px;box-shadow:0px 1px 2px rgba(0, 16, 46, 0.04);padding:0.3125rem 0.625rem 0.4375rem;font-weight:600;font-size:0.8125rem;line-height:16px;display:inline-flex;align-items:center;text-align:center;letter-spacing:-0.01em;white-space:nowrap;color:#fff}.cta-row.sc-enterprise-subnav .btn-primary.sc-enterprise-subnav{background:var(--c-cyan-90);transition:background-color 0.2s ease-out}.cta-row.sc-enterprise-subnav .btn-primary.sc-enterprise-subnav:hover,.cta-row.sc-enterprise-subnav .btn-primary.sc-enterprise-subnav:focus{background:#38acff}.cta-row.sc-enterprise-subnav .btn-secondary.sc-enterprise-subnav{background:var(--c-carbon-90);transition:background-color 0.2s ease-out}.cta-row.sc-enterprise-subnav .btn-secondary.sc-enterprise-subnav:hover,.cta-row.sc-enterprise-subnav .btn-secondary.sc-enterprise-subnav:focus{background:#2b394a}";

const EnterpriseSubnav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.visible = undefined;
  }
  componentWillLoad() {
    let options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    this.observer = new IntersectionObserver(entries => {
      this.visible =
        entries[0].target.getBoundingClientRect().top < 0 ? true : false;
    }, options);
    this.observer.observe(this.el);
  }
  disconnectedCallback() {
    this.observer.unobserve(this.el);
  }
  render() {
    return (h(Host, { class: {
        visible: this.visible,
      } }, h("div", { class: "wrapper heading-container" }, h("span", { class: "title" }, "Enterprise"), h("div", { class: "cta-row" }, h("a", { href: "#inquiry", class: "btn-primary" }, "Talk to sales")))));
  }
  get el() { return getElement(this); }
};
EnterpriseSubnav.style = enterpriseSubnavCss;

export { EnterpriseSubnav as E };

//# sourceMappingURL=enterprise-subnav-f2dd7beb.js.map