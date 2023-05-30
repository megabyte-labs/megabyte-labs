import { r as registerInstance, h } from './index-9fe124a3.js';
import './index-40ae1b73.js';
import { h as href } from './index-9ec0b90a.js';
import { c as coreExamples, w as webExamples } from './examples-04b82519.js';
import { d as dashToCamel, t as transformMethodName } from './utilities-8121db63.js';
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

const ComponentDetail = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    // return <Heading>ComponentDetail: {this.component}</Heading>
    const exampleList = Object.assign(Object.assign({}, coreExamples), webExamples);
    const examples = exampleList[`${dashToCamel(this.component)}Examples`];
    let example = null;
    for (let key in examples) {
      if (key.toLowerCase() === this.example) {
        example = key;
      }
    }
    return [
      h("a", Object.assign({ class: "back-link" }, href(`/overview/${examples.default.title}`)), "\u2190 Back to ", examples.default.title, " List"),
      h(Heading, null, examples.default.title, " / ", transformMethodName(example)),
      h("code", { class: "example-code" }, h("pre", null, examples[example].toString())),
      h("hr", null),
      h("div", { class: "demo-container" }, examples[example] && examples[example]())
    ];
  }
};
ComponentDetail.style = ".back-link {\n      margin-bottom: var(--space-6);\n      display: block;\n    }\n    .example-code {\n      background: var(--c-indigo-20);\n      display: inline-block;\n      padding: 0 var(--space-6);\n      margin: var(--space-6) 0;\n    }";

export { ComponentDetail as component_detail };

//# sourceMappingURL=component-detail.entry.js.map