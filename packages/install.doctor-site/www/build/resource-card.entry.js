import { r as registerInstance, h, k as Host } from './index-9fe124a3.js';
import './index-40ae1b73.js';
import { P as PrismicResponsiveImage } from './PrismicResponsiveImage-d2ecff99.js';
import { R as ResourceType, b as ResourceSource, r as resourceTypeToPrismicType, a as prismicDocToResource, c as prismicTypeToResourceType, g as getAuthorsForPrismicDoc } from './prismic-613d03ec.js';
import { h as href } from './index-9ec0b90a.js';
import { s as slugify } from './slugify-e65e71c9.js';
import { C as Client } from './prismic-configuration-c3ee5216.js';
import { P as Prismic } from './prismic-javascript.min-4227ad8e.js';
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
import './ResponsiveContainer-7e776113.js';
import './Skeleton-a36d70a9.js';
import './Text-5fc0ba5c.js';
import './ThemeProvider-c5f8f970.js';
import './_commonjsHelpers-9bc404fc.js';

const getResourceTypeForParam = (param) => ({
  articles: ResourceType.Article,
  blogs: ResourceType.Blog,
  docs: ResourceType.Doc,
  'case-studies': ResourceType.CaseStudy,
  courses: ResourceType.Course,
  'customer-interviews': ResourceType.CustomerInterview,
  guides: ResourceType.Guide,
  learning: ResourceType.Learning,
  podcasts: ResourceType.Podcast,
  tutorial: ResourceType.Tutorial,
  videos: ResourceType.Video,
  webinars: ResourceType.Webinar,
  whitepapers: ResourceType.Whitepaper,
}[param]);
const typeToResourceType = (type) => ({
  article: ResourceType.Article,
  case_study: ResourceType.CaseStudy,
  webinar: ResourceType.Webinar,
  whitepaper: ResourceType.Whitepaper,
  podcast: ResourceType.Podcast,
  video: ResourceType.Video,
}[type]);
const resourceTypeToPath = (type) => ({
  [ResourceType.Article]: 'articles',
  [ResourceType.Blog]: 'blog',
  [ResourceType.Book]: 'books',
  [ResourceType.CaseStudy]: 'case-studies',
  [ResourceType.Course]: 'courses',
  [ResourceType.CustomerInterview]: 'customer-interviews',
  [ResourceType.Doc]: 'docs',
  [ResourceType.Guide]: 'guides',
  [ResourceType.Learning]: 'learning',
  [ResourceType.Podcast]: 'podcasts',
  [ResourceType.Tutorial]: 'tutorials',
  [ResourceType.Video]: 'videos',
  [ResourceType.Webinar]: 'webinars',
  [ResourceType.Whitepaper]: 'whitepapers',
}[type]);
const getResourceSourceForType = (type) => ({
  [slugify(ResourceType.Article)]: ResourceSource.Prismic,
  [slugify(ResourceType.Blog)]: ResourceSource.Prismic,
  [slugify(ResourceType.CaseStudy)]: ResourceSource.Prismic,
  [slugify(ResourceType.Course)]: ResourceSource.Prismic,
  [slugify(ResourceType.Doc)]: ResourceSource.Prismic,
  [slugify(ResourceType.Guide)]: ResourceSource.Prismic,
  [slugify(ResourceType.Podcast)]: ResourceSource.Prismic,
  [slugify(ResourceType.Tutorial)]: ResourceSource.Prismic,
  [slugify(ResourceType.Video)]: ResourceSource.Prismic,
  [slugify(ResourceType.Webinar)]: ResourceSource.Prismic,
  [slugify(ResourceType.Whitepaper)]: ResourceSource.Prismic,
}[slugify(type)]);
const getResource = async (type, resourceId) => {
  let resource = null;
  let prismicDoc = null;
  const prismicClient = Client();
  const prismicType = resourceTypeToPrismicType(type);
  prismicDoc = await prismicClient.getByUID(prismicType, resourceId, {});
  if (!prismicDoc) {
    return null;
  }
  resource = prismicDocToResource(prismicDoc);
  return resource;
};
const getLandingData = async (type) => {
  const prismicClient = Client();
  const prismicType = type ? resourceTypeToPrismicType(type) : null;
  const resourcesLanding = await prismicClient.query(Prismic.Predicates.at('document.type', 'resources_landing'), {});
  const result = resourcesLanding.results[0];
  if (!result) {
    throw new Error('Landing page not found in prismic!');
  }
  const k = (key) => (prismicType ? `${prismicType}_${key}` : key);
  const sections = {
    hero: result.data[k('hero')],
    latest_1: result.data[k('latest_1')],
    latest_2: result.data[k('latest_2')],
    latest_3: result.data[k('latest_3')],
    mid_1: result.data[k('mid_1')],
    mid_2: result.data[k('mid_2')],
    bottom_1: result.data[k('bottom_1')],
    bottom_2: result.data[k('bottom_2')],
    bottom_3: result.data[k('bottom_3')],
    bottom_4: result.data[k('bottom_4')],
    bottom_5: result.data[k('bottom_5')],
    bottom_6: result.data[k('bottom_6')],
    trench_1: result.data[k('trench_1')],
    trench_2: result.data[k('trench_2')],
    trench_3: result.data[k('trench_3')],
    chasm_1: result.data[k('chasm_1')],
    chasm_2: result.data[k('chasm_2')],
    chasm_3: result.data[k('chasm_3')],
    chasm_4: result.data[k('chasm_4')],
    chasm_5: result.data[k('chasm_5')],
    chasm_6: result.data[k('chasm_6')],
    chasm_7: result.data[k('chasm_7')],
    chasm_8: result.data[k('chasm_8')],
    chasm_9: result.data[k('chasm_9')],
    chasm_10: result.data[k('chasm_10')],
    chasm_11: result.data[k('chasm_11')],
    chasm_12: result.data[k('chasm_12')],
  };
  let landingData = {
    feature: null,
    latestAnnouncements: [],
    midFeatures: [],
    bottomFeatures: [],
    trenchFeatures: [],
    chasmFeatures: [],
  };
  await Promise.all(Object.keys(sections).map(async (s) => {
    const data = result.data[k(s)];
    if (!data || !data.type) {
      return null;
    }
    const resourceType = prismicTypeToResourceType(data.type);
    if (!resourceType) {
      console.error('Unknown resource type!', data.type);
      return null;
    }
    const resource = await getResource(resourceType, data.uid);
    if (s === 'hero') {
      landingData.feature = resource;
    }
    else if (s.indexOf('latest_') >= 0) {
      landingData.latestAnnouncements[parseInt(s.split('_')[1], 10)] = resource;
    }
    else if (s.indexOf('mid_') >= 0) {
      landingData.midFeatures[parseInt(s.split('_')[1], 10)] = resource;
    }
    else if (s.indexOf('bottom_') >= 0) {
      landingData.bottomFeatures[parseInt(s.split('_')[1], 10)] = resource;
    }
    else if (s.indexOf('trench_') >= 0) {
      landingData.trenchFeatures[parseInt(s.split('_')[1], 10)] = resource;
    }
    else if (s.indexOf('chasm_') >= 0) {
      landingData.chasmFeatures[parseInt(s.split('_')[1], 10)] = resource;
    }
  }));
  return landingData;
};

const resourceCardCss = ".column.sc-resource-card-h{--image-height:176px;display:flex;flex-direction:column;height:100%}.column.sc-resource-card-h:hover img.sc-resource-card,.column.sc-resource-card-h:active img.sc-resource-card,.column.sc-resource-card-h:focus img.sc-resource-card{transform:scale(1.05)}.column.sc-resource-card-h img.sc-resource-card{display:block}.column.sc-resource-card-h .contents-wrapper.sc-resource-card{display:flex;flex-direction:column;height:100%}.column.sc-resource-card-h .image-wrapper.sc-resource-card{display:block;margin-block-end:var(--space-5);height:var(--image-height);overflow:hidden}.column.sc-resource-card-h .image-wrapper.sc-resource-card img.sc-resource-card{display:block;height:var(--image-height);object-fit:cover;transition:transform 200ms cubic-bezier(0.32, 0.72, 0, 1)}.column.sc-resource-card-h .content.sc-resource-card{display:flex;flex-grow:1;flex-direction:column}.column.sc-resource-card-h .content.sc-resource-card .meta.sc-resource-card{display:flex;overflow:hidden;margin-block-end:var(--space-3)}.column.sc-resource-card-h .content.sc-resource-card .meta.sc-resource-card .type.sc-resource-card{margin-inline-end:var(--space-4)}.column.sc-resource-card-h .content.sc-resource-card .title.sc-resource-card{color:#010610}.column.sc-resource-card-h .content.sc-resource-card .description.sc-resource-card{color:var(--c-indigo-80);margin-block-start:var(--space-2)}.row.sc-resource-card-h{--image-height:100%}.row.sc-resource-card-h .contents-wrapper.sc-resource-card{display:flex}.row.sc-resource-card-h .image-wrapper.sc-resource-card{flex-basis:60%;min-height:var(--image-height)}.row.sc-resource-card-h .image-wrapper.sc-resource-card img.sc-resource-card{height:100%;object-fit:cover}.row.sc-resource-card-h .content.sc-resource-card{flex-basis:40%;margin-inline-start:var(--space-9)}.row.sc-resource-card-h .content.sc-resource-card .meta.sc-resource-card{margin-block-start:0;margin-block-end:40px}.row.sc-resource-card-h .content.sc-resource-card .description.sc-resource-card{margin-block-start:var(--space-4)}@media screen and (max-width: 767px){.row.sc-resource-card-h .contents-wrapper.sc-resource-card{flex-direction:column}.row.sc-resource-card-h .content.sc-resource-card{margin-inline-start:0}.row.sc-resource-card-h .content.sc-resource-card .meta.sc-resource-card{display:flex;margin-block-start:var(--space-5);margin-block-end:var(--space-3);overflow:hidden}.row.sc-resource-card-h .content.sc-resource-card .meta.sc-resource-card .type.sc-resource-card{margin-inline-end:var(--space-4)}}.ui-heading-4.sc-resource-card,.ui-heading-6.sc-resource-card{margin-block-end:0}.description.sc-resource-card{margin-block-end:0}.author.sc-resource-card{flex-grow:1;display:flex;align-items:flex-end}.author.sc-resource-card resource-author-item.sc-resource-card{margin-block-start:46px;justify-self:flex-end}img.sc-resource-card{display:block;object-fit:cover;max-width:100%}";

var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
};
var _url, _sameSite, _defaults;
const ResourceCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.row = false;
    this.headingLevel = 4;
    this.type = true;
    this.tags = true;
    this.author = true;
    this.description = true;
    _url.set(this, void 0);
    _sameSite.set(this, void 0);
    _defaults.set(this, {
      routing: {
        includeType: true,
        base: ''
      }
    });
    this.SameSiteCard = () => {
      const { CardContents } = this;
      return (h("a", Object.assign({ class: "contents-wrapper" }, href(__classPrivateFieldGet(this, _url), this.routing.router)), h(CardContents, null)));
    };
    this.ExternalCard = () => {
      const { CardContents } = this;
      return (h("a", { class: "contents-wrapper", href: __classPrivateFieldGet(this, _url), target: "_blank", rel: "noopener" }, h(CardContents, null)));
    };
    this.CardContents = () => {
      const { title, description, type, tags, doc: { data: { hero_image } } } = this.prismicData;
      const hasDescriptors = this.type || (tags && this.tags);
      const authors = getAuthorsForPrismicDoc(this.prismicData.doc);
      const hasAuthors = this.author && authors.length > 0;
      return [
        h("div", { class: "image-wrapper" }, h(PrismicResponsiveImage, { image: hero_image })),
        h("div", { class: "content" }, hasDescriptors
          ? h("div", { class: "meta" }, this.type
            ? h(Heading, { class: "type | ui-theme--editorial", level: 6 }, type)
            : null, tags && this.tags
            ? h("resource-meta", { class: "ui-theme--editorial", tags: tags })
            : null)
          : null, h(Heading, { class: "title | ui-theme--editorial", level: this.headingLevel }, title), this.description
          ? h(Paragraph, { class: "description" }, description)
          : null, hasAuthors
          ? h("div", { class: "author" }, h("resource-author-item", { author: authors[0] }))
          : null)
      ];
    };
  }
  componentWillLoad() {
    if (!this.prismicData)
      return;
    this.routing = Object.assign(__classPrivateFieldGet(this, _defaults).routing, this.routing);
    __classPrivateFieldSet(this, _url, this.getUrl(this.prismicData.id));
  }
  getUrl(uid) {
    var _a;
    const { base, includeType } = this.routing;
    const type = resourceTypeToPath(this.prismicData.type);
    if ((_a = this.prismicData.doc.data.content_url) === null || _a === void 0 ? void 0 : _a.url) {
      return this.prismicData.doc.data.content_url.url;
    }
    if (base.includes('ionicframework.com/resources') && type === 'blog') {
      return `${base.replace('resources', 'blog')}/${uid}`;
    }
    __classPrivateFieldSet(this, _sameSite, !!this.routing.router);
    if (includeType) {
      return `${base}/${type}/${uid}`;
    }
    else {
      return `${base}/${uid}`;
    }
  }
  render() {
    if (!this.prismicData)
      return;
    const { SameSiteCard, ExternalCard } = this;
    return (h(Host, { class: {
        'row': this.row,
        'column': !this.row
      } }, __classPrivateFieldGet(this, _sameSite) ? h(SameSiteCard, null)
      : h(ExternalCard, null)));
  }
};
_url = new WeakMap(), _sameSite = new WeakMap(), _defaults = new WeakMap();
ResourceCard.style = resourceCardCss;

export { ResourceCard as resource_card };

//# sourceMappingURL=resource-card.entry.js.map