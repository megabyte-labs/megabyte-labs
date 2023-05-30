import { r as registerInstance, h } from './index-9fe124a3.js';
import './index-40ae1b73.js';
import { c as coreExamples, w as webExamples } from './examples-04b82519.js';
import { h as href } from './index-9ec0b90a.js';
import { H as Heading } from './Heading-19e4b567.js';
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
import './Box-c4fe00cb.js';
import './Dropdown-521de822.js';

const ComponentList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return [
      listSection('Core Components', coreExamples),
      listSection('Web Components', webExamples)
    ];
  }
};
const listSection = (title, components) => (h("div", { class: "demo-container" }, h(Heading, null, title), h("ul", { class: "component-list" }, Object.keys(components).map(name => (h("li", null, h("a", Object.assign({}, href(`/overview/${components[name].default.title}`)), components[name].default.title)))))));
ComponentList.style = ".demo-container {\n      margin-bottom: var(--space-6);\n    }";

export { ComponentList as component_list };

//# sourceMappingURL=component-list.entry.js.map