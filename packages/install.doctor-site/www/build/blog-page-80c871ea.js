import { r as registerInstance, h, k as Host } from './index-9fe124a3.js';
import { R as ResponsiveContainer, H as Heading, P as Paragraph } from './index-257c74e4.js';
import { h as href } from './index-cb9de30c.js';

const blogPageCss = ".sc-blog-page-h{--h2-color:var(--c-carbon-100);display:block}.heading-group.sc-blog-page{margin-block-start:6rem;margin-block-end:6rem;text-align:center}.heading-group.sc-blog-page .ui-heading.sc-blog-page{margin-block-end:0.5rem}.content.sc-blog-page{max-width:736px;margin-inline-start:auto;margin-inline-end:auto}.content.sc-blog-page>.sc-blog-page.sc-blog-page:last-child .post.sc-blog-page{border-bottom:0}blog-post.sc-blog-page+blog-post.sc-blog-page{margin-block-start:82px}.container-sm.sc-blog-page{margin-inline-start:auto;margin-inline-end:auto;position:relative;max-width:736px}blog-newsletter.sc-blog-page{margin-block-start:97px;margin-block-end:106px}.blog-info-wrapper.sc-blog-page{background-color:#f7f9fc;width:100%;border-top:1px solid var(--c-indigo-20);position:relative;margin-top:-2px}.blog-info-wrapper.sc-blog-page .blog-info.sc-blog-page{max-width:736px;margin:0 auto;padding-top:69px;padding-bottom:69px}.blog-info-wrapper.sc-blog-page .blog-info.sc-blog-page h4.sc-blog-page{margin-top:0;opacity:0.81}.blog-info-wrapper.sc-blog-page .blog-info.sc-blog-page p.sc-blog-page{margin:0;opacity:0.81;font-size:14px}";

const BlogPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.data = undefined;
    this.defaults = undefined;
  }
  render() {
    var _a;
    if (!this.data)
      console.error('No blog posts received');
    return (h(Host, null, h("meta-tags", { defaults: this.defaults, pageTitle: this.defaults.blogPage.meta.pageTitle, description: this.defaults.blogPage.meta.description, rssTitle: this.defaults.blogRssTitle }), h("site-header", { defaults: this.defaults, class: "heading-container", sticky: true }), h(ResponsiveContainer, null, h("div", { class: "heading-group" }, h(Heading, { level: 2, as: "h1" }, this.defaults.blogPage.title), h(Paragraph, { level: 2 }, this.defaults.blogPage.subheader)), h("div", { class: "content" }, (_a = this.data) === null || _a === void 0 ? void 0 :
      _a.map((d, i) => (h("article", { key: i }, h("blog-post", { defaults: this.defaults, data: d, preview: true })))), h("blog-pagination", { defaults: this.defaults, rssIcon: true }))), h(ResponsiveContainer, { class: "blog-info-wrapper" }, h("div", { class: "blog-info" }, h("h4", null, "About the ", this.defaults.brandName, " Blog"), h("p", null, "Our articles are written by the ", this.defaults.brandName, " team and community. If you would like to post on our blog, you can do so by opening up a pull request against ", h("a", { href: this.defaults.social.github + '-site/tree/master/pages/blog', target: "_blank", rel: "noopener" }, "our website's repository"), " on GitHub. There, you can also browse through our site's source code which is a modified version of the ", h("a", { href: "https://github.com/ionic-team/capacitor-site", target: "_blank", rel: "noopener" }, "Capacitor's open-source website"), " project. If you would like to base your next website off of this modified version of the Capacitor website that removes the Prismic dependency (among a few other features), then please ", h("a", Object.assign({}, href('/community')), "join our community"), " and ask for help."))), h("capacitor-site-footer", { defaults: this.defaults })));
  }
};
BlogPage.style = blogPageCss;

export { BlogPage as B };

//# sourceMappingURL=blog-page-80c871ea.js.map