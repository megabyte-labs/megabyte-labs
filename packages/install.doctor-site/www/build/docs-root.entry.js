import { r as registerInstance, h } from './index-9fe124a3.js';
import './index-40ae1b73.js';
import { c as createRouter, R as Route, m as match, h as href } from './index-9ec0b90a.js';
import { R as ResponsiveContainer } from './ResponsiveContainer-7e776113.js';
import { H as Heading } from './Heading-19e4b567.js';
import { P as Paragraph } from './Paragraph-0aec567b.js';
import './Blockquote-02838ab9.js';
import './common-ec05915d.js';
import './Breadcrumbs-f91fb5a9.js';
import './Breakpoint-eaff237a.js';
import './Button-08ed8aa1.js';
import './Card-4d34e073.js';
import './DateTime-8119d1b0.js';
import './Grid-cc0c81db.js';
import './Skeleton-a36d70a9.js';
import './Text-5fc0ba5c.js';
import './ThemeProvider-c5f8f970.js';

const Router = createRouter();
const DocsRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("site-root", null, h(ResponsiveContainer, null, h(Router.Switch, null, h(Route, { path: "/" }, h("component-list", null)), h(Route, { path: "/demo" }, h("shared-demo", null)), h(Route, { path: match("/overview/:component"), render: ({ component }) => h("component-overview", { component: component }) }), h(Route, { path: match("/detail/:component/:example"), render: ({ component, example }) => h("component-detail", { component: component, example: example }) }), h(Route, { path: "/demo" }, h("shared-demo", null)), h(Route, { path: /^.*/ }, h(Heading, null, "404: Nothing to see here"), h(Paragraph, null, h("a", Object.assign({}, href('/')), "Go Home")), h("img", { src: "https://i.imgflip.com/48lv0y.jpg" }))))));
  }
};
DocsRoot.style = ".ui-container {\n      padding: var(--space-6) 0;\n    }";

export { DocsRoot as docs_root };

//# sourceMappingURL=docs-root.entry.js.map