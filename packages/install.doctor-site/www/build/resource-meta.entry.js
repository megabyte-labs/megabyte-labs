import { r as registerInstance, h, k as Host } from './index-9fe124a3.js';

const resourceMetaCss = ".sc-resource-meta-h{--tag-color:#92A0B3;line-height:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#92A0B3}.tag.sc-resource-meta{display:inline;color:var(--tag-color);font-size:10px;text-transform:uppercase}.tag.sc-resource-meta+.tag.sc-resource-meta::before{content:\"|\";color:var(--tag-color);display:inline-block;height:11px;margin:0 6px -1px 6px}";

const ResourceMeta = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    var _a;
    return (h(Host, { class: "resource-meta" }, (_a = this.tags) === null || _a === void 0 ? void 0 : _a.map(tag => (h("span", { class: "ui-heading ui-heading-6 | tag" }, tag)))));
  }
};
ResourceMeta.style = resourceMetaCss;

export { ResourceMeta as resource_meta };

//# sourceMappingURL=resource-meta.entry.js.map