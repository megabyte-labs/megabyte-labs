import { r as registerInstance, h, k as Host, m as getAssetPath } from './index-9fe124a3.js';
import './index-40ae1b73.js';
import './exports-14d8c63d.js';
import { g as getAuthorsForPrismicDoc } from './prismic-613d03ec.js';
import { R as ResponsiveContainer } from './ResponsiveContainer-7e776113.js';
import { T as ThemeProvider } from './ThemeProvider-c5f8f970.js';
import { H as Heading } from './Heading-19e4b567.js';
import { P as PrismicResponsiveImage } from './PrismicResponsiveImage-d2ecff99.js';
import { P as Paragraph } from './Paragraph-0aec567b.js';
import { a as PrismicRichText } from './PrismicContent-ac78525c.js';
import { D as DateTime } from './DateTime-8119d1b0.js';
import './Blockquote-02838ab9.js';
import './common-ec05915d.js';
import './Breadcrumbs-f91fb5a9.js';
import './Breakpoint-eaff237a.js';
import './Button-08ed8aa1.js';
import './Card-4d34e073.js';
import './Grid-cc0c81db.js';
import './Skeleton-a36d70a9.js';
import './Text-5fc0ba5c.js';
import './_commonjsHelpers-9bc404fc.js';
import './index-9ec0b90a.js';
import './slugify-e65e71c9.js';
import './tracking-service-c64257af.js';

const resourceWebinarCss = ".sc-resource-webinar-h{display:block}.past.sc-resource-webinar-h .heading.sc-resource-webinar{text-align:center;margin-block-start:89px}.past.sc-resource-webinar-h .heading.sc-resource-webinar .meta.sc-resource-webinar{margin-block-end:var(--space-5)}.past.sc-resource-webinar-h .heading.sc-resource-webinar .ui-heading-1.sc-resource-webinar{margin-block-end:var(--space-5);color:#010610}.past.sc-resource-webinar-h .heading.sc-resource-webinar .hosts.sc-resource-webinar{display:flex;flex-direction:column;align-items:center;margin-block-end:var(--space-9)}.past.sc-resource-webinar-h .heading.sc-resource-webinar .hosts.sc-resource-webinar .host.sc-resource-webinar{display:flex}.past.sc-resource-webinar-h .heading.sc-resource-webinar .hosts.sc-resource-webinar .host.sc-resource-webinar+.host.sc-resource-webinar{margin-block-start:var(--space-3)}.past.sc-resource-webinar-h .heading.sc-resource-webinar .hosts.sc-resource-webinar .host.sc-resource-webinar .avatar.sc-resource-webinar{border-radius:var(--radius-4);margin-inline-end:11px;width:28px;height:28px}.past.sc-resource-webinar-h .heading.sc-resource-webinar .hosts.sc-resource-webinar .host.sc-resource-webinar .description.sc-resource-webinar{color:#73849A}.past.sc-resource-webinar-h .video.sc-resource-webinar{position:relative;display:flex;align-items:center;justify-content:center;margin-block-end:var(--space-11)}.past.sc-resource-webinar-h .video.blured.sc-resource-webinar wistia-video.sc-resource-webinar{filter:blur(16px)}.past.sc-resource-webinar-h .video.sc-resource-webinar .overlay-form.sc-resource-webinar{border-radius:var(--radius-2);text-align:center;position:absolute;z-index:1000;background:white;padding:48px}.past.sc-resource-webinar-h .video.sc-resource-webinar .overlay-form.sc-resource-webinar .heading-group.sc-resource-webinar .ui-heading.sc-resource-webinar{margin-block-end:var(--space-3)}.past.sc-resource-webinar-h .article.sc-resource-webinar{margin-block-end:var(--space-11);max-width:672px;margin-inline-start:auto;margin-inline-end:auto}.future.sc-resource-webinar-h .landing-image.sc-resource-webinar{background:var(--c-lavender-70);width:100%;height:100%;position:absolute;z-index:-1;object-fit:cover}.future.sc-resource-webinar-h .heading-group.sc-resource-webinar{padding-block-start:var(--space-11);padding-block-end:var(--space-11);position:relative;min-height:512px;display:flex;align-items:center}.future.sc-resource-webinar-h .heading-group.sc-resource-webinar .ui-heading-1.sc-resource-webinar{max-width:704px;color:white}.future.sc-resource-webinar-h .heading-group.sc-resource-webinar .when.sc-resource-webinar{margin-block-start:var(--space-5);color:white}.future.sc-resource-webinar-h .heading-group.sc-resource-webinar .meta.sc-resource-webinar{margin-block-end:var(--space-5)}.future.sc-resource-webinar-h .heading-group.sc-resource-webinar .meta.sc-resource-webinar .type.sc-resource-webinar{color:white}.future.sc-resource-webinar-h .heading-group.sc-resource-webinar .register-button.sc-resource-webinar{background:white;color:#5061F2;margin-block-start:64px}.future.sc-resource-webinar-h .wrapper.sc-resource-webinar{display:flex;margin-block-start:var(--space-11);margin-block-end:var(--space-11)}.future.sc-resource-webinar-h .wrapper.sc-resource-webinar>*.sc-resource-webinar{flex-grow:1}.future.sc-resource-webinar-h .wrapper.sc-resource-webinar .article.sc-resource-webinar{max-width:576px}.future.sc-resource-webinar-h .wrapper.sc-resource-webinar .article.sc-resource-webinar .register-button.sc-resource-webinar{margin-block-start:var(--space-6);background:#3880FF;color:white}@media screen and (max-width: 1023px){.future.sc-resource-webinar-h .wrapper.sc-resource-webinar{flex-direction:column}.future.sc-resource-webinar-h .wrapper.sc-resource-webinar .hosts.sc-resource-webinar{margin-block-start:var(--space-11);margin-inline-start:0}}.future.sc-resource-webinar-h .hosts.sc-resource-webinar{margin-inline-start:var(--space-11)}.future.sc-resource-webinar-h .hosts.sc-resource-webinar .ui-heading.sc-resource-webinar{margin-block-end:40px}.future.sc-resource-webinar-h .hosts.sc-resource-webinar resource-author-item.sc-resource-webinar+resource-author-item.sc-resource-webinar{margin-block-start:var(--space-3)}.future.sc-resource-webinar-h resource-meta.sc-resource-webinar{--tag-color:rgba(255, 255, 255, .8)}.meta.sc-resource-webinar{display:inline-flex}.meta.sc-resource-webinar .type.sc-resource-webinar{margin-inline-end:17px}.article.sc-resource-webinar .ui-heading-2.sc-resource-webinar{margin-block-end:var(--space-3)}.article.sc-resource-webinar p.sc-resource-webinar,.article.sc-resource-webinar li.sc-resource-webinar{color:#445B78}.article.sc-resource-webinar p.sc-resource-webinar+p.sc-resource-webinar,.article.sc-resource-webinar p.sc-resource-webinar+ul.sc-resource-webinar,.article.sc-resource-webinar ul.sc-resource-webinar+p.sc-resource-webinar,.article.sc-resource-webinar ul.sc-resource-webinar+ul.sc-resource-webinar{margin-block-start:var(--space-5)}.article.sc-resource-webinar ul.sc-resource-webinar{margin-inline-start:38px}.article.sc-resource-webinar li.sc-resource-webinar{position:relative}.article.sc-resource-webinar li.sc-resource-webinar+li.sc-resource-webinar{margin-block-start:var(--space-5)}.article.sc-resource-webinar li.sc-resource-webinar::before{left:-38px;top:4px;position:absolute;content:\"\";background:var(--checkmark-path);height:20px;width:20px}.register-button.sc-resource-webinar{padding:16px 20px;font-weight:bold;text-transform:uppercase;font-size:16px;line-height:19px;letter-spacing:0.1em;border-radius:8px}site-modal.sc-resource-webinar .title.sc-resource-webinar{text-align:center}site-modal.sc-resource-webinar .title.sc-resource-webinar .ui-heading.sc-resource-webinar{margin-block-end:var(--space-3)}";

const ResourceWebinar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.PastWebinar = () => {
      const { OverlayForm } = this;
      const data = this.prismicData;
      const videoId = data.doc.data.wistia_id;
      const pastGate = this.state.hubspotGatedPassed;
      return (h(ResponsiveContainer, null, h(ThemeProvider, { type: "editorial" }, h("section", { class: "heading" }, h("div", { class: "meta" }, h(Heading, { level: 6, class: "type" }, "Webinar"), h("resource-meta", { tags: data.tags, class: "tags" })), h(Heading, { level: 1 }, data.title), h("div", { class: "hosts" }, this.hosts.map(host => (h("div", { class: "host" }, h(PrismicResponsiveImage, { class: "avatar", image: host.avatar }), h(Paragraph, { class: "description | .ui-theme--base" }, host.name, ', ', host.title)))))), h("section", { class: `video ${!pastGate ? 'blured' : ''}` }, !this.state.hubspotGatedPassed
        ? h(OverlayForm, { data: data }) : '', videoId
        ? h("wistia-video", { videoId: videoId }) : ''), h("section", { class: "article" }, h(PrismicRichText, { richText: data.doc.data.description, leading: "prose" })))));
    };
    this.FutureWebinar = () => {
      const { RegisterButton } = this;
      const data = this.prismicData;
      const date = new Date(data.doc.data.when);
      const image = data.doc.data.landing_image;
      return (h(ThemeProvider, { type: "editorial" }, h("section", { class: "heading-group" }, image.url
        ? h(PrismicResponsiveImage, { class: "landing-image", image: image })
        : h("div", { class: "landing-image" }), h(ResponsiveContainer, null, h("div", { class: "heading" }, h("div", { class: "meta" }, h(Heading, { level: 6, class: "type" }, "Webinar"), h("resource-meta", { tags: data.tags, class: "tags" })), h(Heading, { level: 1 }, data.title), h(Heading, { class: "when", level: 4 }, "Begins:", ' ', h(DateTime, { date: date, format: { weekday: 'long', month: 'long', day: 'numeric' } }), ' @ ', h(DateTime, { date: date, format: { hour: 'numeric', timeZoneName: 'short', timeZone: 'America/Chicago' } })), h(RegisterButton, null)))), h(ResponsiveContainer, null, h("section", { class: "wrapper" }, h("div", { class: "article" }, h(PrismicRichText, { richText: data.doc.data.description, leading: "prose" }), h(RegisterButton, null)), h("div", { class: "hosts" }, h(Heading, { level: 5 }, "Your speakers:"), this.hosts.map(host => (h("resource-author-item", { author: host }))))))));
    };
    this.RegisterButton = () => (h("button", { class: "register-button", onClick: () => {
        this.state.showHubspotForm = true;
      } }, "Register Now"));
    this.OverlayForm = () => {
      const data = this.prismicData;
      const formId = data.doc.data.hubspot_form_id;
      return (h(ThemeProvider, { class: "overlay-form", type: "base" }, h("div", { class: "heading-group" }, h(Heading, { level: 3 }, "Stream ", data.title), h(Paragraph, null, "You're just a few clicks away from our free Webinar")), h("hubspot-form", { ajax: true, formId: formId, onFormSubmitted: () => {
          this.state.hubspotGatedPassed = true;
        } })));
    };
  }
  componentWillLoad() {
    this.state.hubspotGatedPassed = false;
    this.hasHappened = new Date(this.prismicData.doc.data.when) < new Date();
    this.hosts = getAuthorsForPrismicDoc(this.prismicData.doc);
  }
  render() {
    const { PastWebinar, FutureWebinar } = this;
    const formId = this.prismicData.doc.data.hubspot_form_id;
    return (h(Host, { style: {
        '--checkmark-path': `url("${getAssetPath('assets/checkmark-circle.png')}")`
      }, class: {
        'past': this.hasHappened,
        'future': !this.hasHappened
      } }, this.hasHappened
      ? h(PastWebinar, null)
      : [h(FutureWebinar, null),
        h("site-modal", { open: this.state.showHubspotForm, modalClose: () => (this.state.showHubspotForm = false) }, h("div", { class: "title" }, h(Heading, null, "Register for ", this.prismicData.title), h(Paragraph, null, "Enter your information below to join the Webinar list")), h("hubspot-form", { formId: formId, ajax: false, onFormSubmitted: () => {
            this.state.hubspotGatedPassed = true;
          } }))]));
  }
  static get assetsDirs() { return ["assets"]; }
};
;
ResourceWebinar.style = resourceWebinarCss;

export { ResourceWebinar as resource_webinar };

//# sourceMappingURL=resource-webinar.entry.js.map