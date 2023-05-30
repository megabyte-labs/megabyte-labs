import { h } from './index-9fe124a3.js';
import { B as Blockquote } from './Blockquote-02838ab9.js';
import { B as Box } from './Box-c4fe00cb.js';
import { B as Breadcrumbs } from './Breadcrumbs-f91fb5a9.js';
import { B as Breakpoint } from './Breakpoint-eaff237a.js';
import { B as Button } from './Button-08ed8aa1.js';
import { C as Card } from './Card-4d34e073.js';
import { D as DateTime } from './DateTime-8119d1b0.js';
import { D as Dropdown } from './Dropdown-521de822.js';
import { G as Grid } from './Grid-cc0c81db.js';
import { H as Heading } from './Heading-19e4b567.js';
import { P as Paragraph } from './Paragraph-0aec567b.js';
import { R as ResponsiveContainer } from './ResponsiveContainer-7e776113.js';
import { S as Skeleton } from './Skeleton-a36d70a9.js';
import { T as Text } from './Text-5fc0ba5c.js';
import { T as ThemeProvider } from './ThemeProvider-c5f8f970.js';

const Blockquote_examples = {
  title: 'Blockquote',
  cols: 1
};
const example$b = () => h(Blockquote, null, "With Ionic Enterprise, we have peace of mind with access to Ionic\u2019s stellar Customer Success team, additional help from Ionic experts whenever we need it, and we\u2019re able to rely on Ionic\u2019s secure native solutions to ensure an optimal login experience. Put simply, it provides peace of mind and reduces the effort on maintaining native code.");

const blockquoteExamples = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Blockquote_examples,
  example: example$b
});

const Box_examples = { title: 'Box' };
const example$a = () => h(Box, null, "This is a box");

const boxExamples = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Box_examples,
  example: example$a
});

const Breadcrumbs_examples = { title: 'Breadcrumbs' };
const example$9 = () => (h(Breadcrumbs, { class: "jumanjii" },
  h("li", null,
    h("a", { href: "#" }, "Native")),
  h("li", { class: "nav-sep" }, "/"),
  h("li", null,
    h("a", { href: "#" }, "Offline Storage"))));

const breadcrumbsExamples = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Breadcrumbs_examples,
  example: example$9
});

const Breakpoint_examples = { title: 'Breakpoint' };
const xsOnly = () => h(Breakpoint, { xs: true, sm: false }, "This item shows when screen size is under 480px");
const mdOnly = () => h(Breakpoint, { sm: false, md: true, lg: false }, "This item shows when screen size is between 768px and 992px");
const lgOnly = () => h(Breakpoint, { md: false, lg: true }, "This item shows when screen size is above 992px");
const notXs = () => h(Breakpoint, { xs: false, sm: true }, "This item shows when screen size is above 480px");
const notMd = () => h(Breakpoint, { xs: true, sm: true, md: false, lg: true }, "This item shows when screen size is smaller than 768px or greater than 992px");

const breakpointExamples = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Breakpoint_examples,
  xsOnly: xsOnly,
  mdOnly: mdOnly,
  lgOnly: lgOnly,
  notXs: notXs,
  notMd: notMd
});

const Button_examples = { title: 'Button' };
const example$8 = () => h(Button, null, "Button");

const buttonExamples = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Button_examples,
  example: example$8
});

const Card_examples = { title: 'Card' };
const card = () => h(Card, null, "This is a card");
const cardEmbelished = () => h(Card, { embelish: true, style: "height: 100px" }, "This is an embelished card");

const cardExamples = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Card_examples,
  card: card,
  cardEmbelished: cardEmbelished
});

const DateTime_examples = { title: 'DateTime' };
const example$7 = () => h(DateTime, { date: new Date() });

const dateTimeExamples = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': DateTime_examples,
  example: example$7
});

const Dropdown_examples = { title: 'Dropdown' };
const example$6 = () => h(Dropdown, { open: true }, "This is a dropdown");

const dropdownExamples = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Dropdown_examples,
  example: example$6
});

const Grid_examples = {
  title: 'Grid',
  cols: 1
};
const example$5 = () => h(Grid, null, "This is a Grid");

const gridExamples = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Grid_examples,
  example: example$5
});

const Heading_examples = { title: 'Heading' };
const level1$1 = () => h(Heading, { level: 1 }, "Level 1");
const level2$1 = () => h(Heading, { level: 2 }, "Level 2");
const level3$1 = () => h(Heading, { level: 3 }, "Level 3");
const level4$1 = () => h(Heading, { level: 4 }, "Level 4");
const level5$1 = () => h(Heading, { level: 5 }, "Level 5");
const level6$1 = () => h(Heading, { level: 6 }, "Level 6");
const posterLevel1 = () => h(Heading, { poster: true, level: 1 }, "Poster Level 1");
const posterLevel2 = () => h(Heading, { poster: true, level: 2 }, "Poster Level 2");
const posterLevel3 = () => h(Heading, { poster: true, level: 3 }, "Poster Level 3");
const posterLevel4 = () => h(Heading, { poster: true, level: 4 }, "Poster Level 4");
const level4as2 = () => h(Heading, { poster: true, level: 4, as: 'h2' }, "Poster Level 4 as h2");

const headingExamples = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Heading_examples,
  level1: level1$1,
  level2: level2$1,
  level3: level3$1,
  level4: level4$1,
  level5: level5$1,
  level6: level6$1,
  posterLevel1: posterLevel1,
  posterLevel2: posterLevel2,
  posterLevel3: posterLevel3,
  posterLevel4: posterLevel4,
  level4as2: level4as2
});

const Paragraph_examples = { title: 'Paragraph' };
const level1 = () => h(Paragraph, { level: 1 }, "Ionic Framework is an open source mobile UI toolkit for building high quality, cross-platform native and web app experiences. Move faster with a single codebase, running everywhere.");
const level2 = () => h(Paragraph, { level: 2 }, "Ionic Framework is an open source mobile UI toolkit for building high quality, cross-platform native and web app experiences. Move faster with a single codebase, running everywhere.");
const level3 = () => h(Paragraph, { level: 3 }, "Ionic Framework is an open source mobile UI toolkit for building high quality, cross-platform native and web app experiences. Move faster with a single codebase, running everywhere.");
const level4 = () => h(Paragraph, { level: 4 }, "Ionic Framework is an open source mobile UI toolkit for building high quality, cross-platform native and web app experiences. Move faster with a single codebase, running everywhere.");
const level5 = () => h(Paragraph, { level: 5 }, "Ionic Framework is an open source mobile UI toolkit for building high quality, cross-platform native and web app experiences. Move faster with a single codebase, running everywhere.");
const level6 = () => h(Paragraph, { level: 6 }, "Ionic Framework is an open source mobile UI toolkit for building high quality, cross-platform native and web app experiences. Move faster with a single codebase, running everywhere.");

const paragraphExamples = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Paragraph_examples,
  level1: level1,
  level2: level2,
  level3: level3,
  level4: level4,
  level5: level5,
  level6: level6
});

const ResponsiveContainer_examples = { title: 'ResponsiveContainer' };
const example$4 = () => h(ResponsiveContainer, null,
  h("div", null, "blah blah blah responsive container"));

const responsiveContainerExamples = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': ResponsiveContainer_examples,
  example: example$4
});

const SiteModal_examples = { title: 'SiteModal' };
const example$3 = () => h("site-modal", null, "This is a box");

const siteModalExamples = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': SiteModal_examples,
  example: example$3
});

const Skeleton_examples = { title: 'Skeleton' };
const example$2 = () => (h("div", null,
  h(Skeleton, { style: { "height": "200px" } }),
  h(Skeleton, { style: {
      "width": "100px",
      "height": "16px"
    } }),
  h(Skeleton, { style: { "height": "16px" } }),
  h(Skeleton, { style: { "height": "16px" } }),
  h(Skeleton, { style: { "height": "16px" } }),
  h(Skeleton, { style: { "height": "16px" } })));

const skeletonExamples = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Skeleton_examples,
  example: example$2
});

const Text_examples = { title: 'Text' };
const example$1 = () => h(Text, null, "This is a box");

const textExamples = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Text_examples,
  example: example$1
});

const ThemeProvider_examples = { title: 'ThemeProvider' };
const example = () => h(ThemeProvider, null, "This is a box");

const themeProviderExamples = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': ThemeProvider_examples,
  example: example
});

const coreExamples = {
  blockquoteExamples,
  boxExamples,
  breadcrumbsExamples,
  breakpointExamples,
  buttonExamples,
  cardExamples,
  dateTimeExamples,
  dropdownExamples,
  gridExamples,
  headingExamples,
  paragraphExamples,
  responsiveContainerExamples,
  siteModalExamples,
  skeletonExamples,
  textExamples,
  themeProviderExamples
};

const disqusComments_example = {
  title: 'disqus-comments',
  cols: 1
};
const frameworkBlogPost$1 = () => h("disqus-comments", { url: 'https://ds.ionic.io/overview/disqus-comments', "site-id": 'drifty' });

const disqusCommentsExamples = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': disqusComments_example,
  frameworkBlogPost: frameworkBlogPost$1
});

const hubspotForm_example = {
  title: 'hubspot-form',
  cols: 1
};
const frameworkBlogPost = () => h("hubspot-form", { formId: '9151dc0b-42d9-479f-b7b8-649e0e7bd1bc', ajax: true, onFormSubmitted: () => alert('message recieved!') });

const hubspotFormExamples = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': hubspotForm_example,
  frameworkBlogPost: frameworkBlogPost
});

const webExamples = { disqusCommentsExamples, hubspotFormExamples };

export { coreExamples as c, webExamples as w };

//# sourceMappingURL=examples-04b82519.js.map