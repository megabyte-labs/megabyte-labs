var ResourceType;
(function (ResourceType) {
  ResourceType["Article"] = "Article";
  ResourceType["Blog"] = "Blog";
  ResourceType["Book"] = "Book";
  ResourceType["CaseStudy"] = "Case Study";
  ResourceType["CustomerInterview"] = "Customer Interview";
  ResourceType["Course"] = "Course";
  ResourceType["Learning"] = "Learning";
  ResourceType["Doc"] = "Doc";
  ResourceType["Guide"] = "Guide";
  ResourceType["Podcast"] = "Podcast";
  ResourceType["Tutorial"] = "Tutorial";
  ResourceType["Video"] = "Video";
  ResourceType["Whitepaper"] = "Whitepaper";
  ResourceType["Webinar"] = "Webinar";
})(ResourceType || (ResourceType = {}));
var ResourceSource;
(function (ResourceSource) {
  ResourceSource["Prismic"] = "prismic";
})(ResourceSource || (ResourceSource = {}));

const prismicResourceToToc = (resource) => {
  var _a, _b, _c;
  let titles = [];
  (_c = (_b = (_a = resource.doc) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.body) === null || _c === void 0 ? void 0 : _c.forEach((bodyItem) => {
    var _a, _b;
    (_b = (_a = bodyItem.primary) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.forEach((content) => {
      var _a;
      if ((_a = content.type) === null || _a === void 0 ? void 0 : _a.includes('heading'))
        titles.push(content.text);
    });
  });
  return titles;
};
const prismicDocToResource = (doc) => {
  return {
    id: doc.uid,
    title: doc.data.title || null,
    description: doc.data.tagline || null,
    tags: doc.tags || [],
    publishDate: doc.first_publication_date || null,
    updatedDate: doc.last_publication_date || null,
    type: prismicTypeToResourceType(doc.type),
    authors: getAuthorsForPrismicDoc(doc),
    metaImage: getImage(doc.data.meta_image),
    heroImage: getImage(doc.data.hero_image || doc.data.cover_image),
    source: ResourceSource.Prismic,
    doc,
  };
};
const getImage = (imageObj) => (imageObj && imageObj.url ? imageObj.url : '');
const getAuthorsForPrismicDoc = (doc) => {
  var _a;
  if ((!doc.data.hosts || !doc.data.hosts.length) && (!doc.data.author || !doc.data.author.length)) {
    return [];
  }
  if (doc.type === 'webinar') {
    return doc.data.hosts.map((h) => {
      var _a;
      return ({
        name: h.name || '',
        title: h.title || '',
        link: ((_a = h.profile_link) === null || _a === void 0 ? void 0 : _a.url) || '',
        avatar: h.photo || '',
      });
    });
  }
  else if (doc.data.author && doc.data.author.length) {
    return doc.data.author.map((a) => {
      var _a;
      return ({
        name: a.name || '',
        title: a.title || '',
        link: ((_a = a.author_url) === null || _a === void 0 ? void 0 : _a.url) || '',
        avatar: a.photo || '',
      });
    });
  }
  else if (doc.data.author) {
    return [
      {
        name: doc.data.author.name || '',
        title: doc.data.author.title || '',
        link: ((_a = doc.data.author.author_url) === null || _a === void 0 ? void 0 : _a.url) || '',
        avatar: doc.data.author.photo || '',
      },
    ];
  }
  return [];
};
const prismicTypeToResourceType = (type) => ({
  article: ResourceType.Article,
  blog: ResourceType.Blog,
  book: ResourceType.Book,
  case_study: ResourceType.CaseStudy,
  course: ResourceType.Course,
  customer_story: ResourceType.CustomerInterview,
  doc: ResourceType.Doc,
  guide: ResourceType.Guide,
  learning: ResourceType.Learning,
  podcast: ResourceType.Podcast,
  tutorial: ResourceType.Tutorial,
  video: ResourceType.Video,
  webinar: ResourceType.Webinar,
  whitepaper: ResourceType.Whitepaper,
}[type]);
const resourceTypeToPrismicType = (type) => ({
  [ResourceType.Article]: 'article',
  [ResourceType.Blog]: 'blog',
  [ResourceType.Book]: 'book',
  [ResourceType.CaseStudy]: 'case_study',
  [ResourceType.Course]: 'course',
  [ResourceType.CustomerInterview]: 'customer_story',
  [ResourceType.Doc]: 'doc',
  [ResourceType.Guide]: 'guide',
  [ResourceType.Learning]: 'learning',
  [ResourceType.Podcast]: 'podcast',
  [ResourceType.Tutorial]: 'tutorial',
  [ResourceType.Video]: 'video',
  [ResourceType.Webinar]: 'webinar',
  [ResourceType.Whitepaper]: 'whitepaper',
}[type]);
function linkResolver(doc) {
  // Define the url depending on the document type
  if (doc.type === 'article') {
    return '/resources/articles/' + doc.uid;
  }
  else if (doc.type === 'case_study') {
    return '/resources/case-studies/' + doc.uid;
  }
  else if (doc.type === 'customer_story') {
    return '/resources/customer-interviews/' + doc.uid;
  }
  else if (doc.type === 'enterprise_blog_post') {
    return '/enterprise/blog/' + doc.uid;
  }
  else if (doc.type === 'integration') {
    return '/integrations/' + doc.uid;
  }
  else if (doc.type === 'podcast') {
    return '/resources/podcasts/' + doc.uid;
  }
  else if (doc.type === 'thank_you') {
    return '/thank-you/' + doc.uid;
  }
  else if (doc.type === 'video') {
    return '/resources/videos/' + doc.uid;
  }
  else if (doc.type === 'webinar') {
    return '/resources/webinars/' + doc.uid;
  }
  else if (doc.type === 'whitepaper') {
    return '/resources/whitepapers/' + doc.uid;
  }
  // Default to homepage
  return '/';
}

export { ResourceType as R, prismicDocToResource as a, ResourceSource as b, prismicTypeToResourceType as c, getAuthorsForPrismicDoc as g, prismicResourceToToc as p, resourceTypeToPrismicType as r };

//# sourceMappingURL=prismic-613d03ec.js.map