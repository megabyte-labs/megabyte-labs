import { r as registerInstance, h } from './index-9fe124a3.js';
import { C as Col } from './index-40ae1b73.js';
import { a as prismicDocToResource } from './prismic-613d03ec.js';
import { C as Client } from './prismic-configuration-c3ee5216.js';
import { G as Grid } from './Grid-cc0c81db.js';
import './Blockquote-02838ab9.js';
import './common-ec05915d.js';
import './Breadcrumbs-f91fb5a9.js';
import './Breakpoint-eaff237a.js';
import './Button-08ed8aa1.js';
import './Card-4d34e073.js';
import './DateTime-8119d1b0.js';
import './Heading-19e4b567.js';
import './Paragraph-0aec567b.js';
import './ResponsiveContainer-7e776113.js';
import './Skeleton-a36d70a9.js';
import './Text-5fc0ba5c.js';
import './ThemeProvider-c5f8f970.js';
import './prismic-javascript.min-4227ad8e.js';
import './_commonjsHelpers-9bc404fc.js';

const moreResourcesCss = ".sc-more-resources-h{display:block;--column-gap:var(--space-6);--row-gap:var(--space-9)}.ui-grid.sc-more-resources{column-gap:var(--column-gap);row-gap:var(--row-gap)}@media screen and (max-width: 640px){.ui-grid.sc-more-resources{column-gap:0}}.ui-grid.size-2.sc-more-resources resource-card.sc-more-resources{--image-height:128px}";

const MoreResources = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async componentWillLoad() {
    if (this.resources)
      return;
    const client = Client();
    const requests = this.resourceData.map(r => client.getByUID(r.type, r.uid, null));
    try {
      this.resources = (await Promise.all(requests)).map(d => prismicDocToResource(d));
    }
    catch (e) {
      console.error('Unable to load more resources', e);
    }
  }
  render() {
    const { headingLevel, type, tags, description, author } = this;
    const data = { headingLevel, type, tags, description, author };
    let props;
    switch (this.resources.length || this.resourceData.length) {
      case 2:
        props = { md: 6, sm: 6 };
        break;
      default:
        props = { md: 4, xs: 6 };
        break;
    }
    return (h(Grid, { class: `size-${this.resources.length}` }, this.resources.map((d, i) => (h(Col, Object.assign({}, props, { cols: 12, xs: 6, key: d.id }), h("resource-card", Object.assign({ prismicData: d, routing: Array.isArray(this.routing) ? this.routing[i] : this.routing }, data)))))));
  }
};
MoreResources.style = moreResourcesCss;

export { MoreResources as more_resources };

//# sourceMappingURL=more-resources.entry.js.map