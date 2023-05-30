import { r as registerInstance, h, F as Fragment, k as Host } from './index-9fe124a3.js';
import { h as href } from './index-cb9de30c.js';
import { R as ResponsiveContainer, H as Heading, P as Paragraph, G as Grid, C as Col } from './index-257c74e4.js';

const capacitorSiteFooterCss = ":root{--c-capacitor-blue:#119eff}capacitor-site-footer{display:block;border-block-start:1px solid var(--c-indigo-20);padding-block-start:64px;padding-block-end:72px;position:relative;background:#fff;border-block-start:1px solid var(--c-indigo-20)}capacitor-site-footer .footer-social{margin-top:5px;margin-bottom:5px;font-size:21px;margin-left:4px;margin-right:4px;transition:all 0.2s ease-in-out;color:var(--c-indigo-70)}capacitor-site-footer .footer-social.github:hover{color:#171515}capacitor-site-footer .footer-social.gitlab:hover{color:#fca326}capacitor-site-footer .footer-social.slack:hover{color:#e01e5a}capacitor-site-footer .footer-social.discord:hover{color:#7289da}capacitor-site-footer .footer-social.facebook:hover{color:#3b5998}capacitor-site-footer .footer-social.twitter:hover{color:#00acee}capacitor-site-footer .footer-social.linkedin:hover{color:#0072b1}capacitor-site-footer .footer-social:active{opacity:0.7}capacitor-site-footer .footer-social:nth-child(1){margin-left:0}capacitor-site-footer .footer-social:last-child{margin-right:0}capacitor-site-footer .footer-social-wrapper{min-width:240px}capacitor-site-footer ul{padding:0}capacitor-site-footer .newsletter{display:flex;flex-wrap:wrap;justify-content:center;margin-block-end:4rem;margin-block-start:-1rem;align-items:center;text-align:center;--h4-color:var(--c-carbon-100);--p4-color:var(--c-indigo-70)}@media (max-width: 767px){capacitor-site-footer .newsletter{margin-block-end:2rem}}@media (min-width: 1024px){capacitor-site-footer .newsletter{text-align:left;justify-content:space-between}}capacitor-site-footer .newsletter>*{margin-block-start:16px}capacitor-site-footer .routes-group{display:flex;justify-content:space-between}capacitor-site-footer a.link{color:var(--c-indigo-70);font-weight:normal}capacitor-site-footer .copyright p{font-family:\"Inter\";color:var(--c-indigo-70);font-size:14px;letter-spacing:-0.02em;line-height:1.6em;margin:0}capacitor-site-footer .logo img{width:200px;margin-bottom:7px;filter:invert(55%) sepia(5%) saturate(1382%) hue-rotate(178deg) brightness(92%) contrast(88%)}@media (max-width: 767px){capacitor-site-footer .logo img{margin:0 auto;margin-bottom:14px}}capacitor-site-footer .ui-heading{color:var(--c-carbon-80);margin-bottom:11px}capacitor-site-footer .routes li{list-style-type:none;margin-top:7px;letter-spacing:0}capacitor-site-footer .form-group{flex-basis:479px;height:48px}capacitor-site-footer .form-message{display:flex;align-items:center;text-align:left;padding-left:14px;padding-right:14px}capacitor-site-footer .form-message ion-icon{font-size:32px;color:#597eff;margin-inline-end:var(--space-3)}capacitor-site-footer form.hs-form{display:flex;flex-wrap:wrap;position:relative;margin-block-start:-16px;align-items:center;justify-content:center}capacitor-site-footer form.hs-form>*{margin-block-start:16px}capacitor-site-footer form.hs-form li{list-style-type:none}capacitor-site-footer form.hs-form .hs-email{flex-grow:1;max-width:276px}capacitor-site-footer form.hs-form .hs-email label{position:absolute;opacity:0}capacitor-site-footer form.hs-form .input{width:100%;position:relative}capacitor-site-footer form.hs-form .input input{padding-inline-start:16px;width:calc(100% - 12px);height:48px;border:1px solid #dee3ea;border-radius:var(--radius-2);transition:border 0.2s ease-out, box-shadow 0.2s ease-out}capacitor-site-footer form.hs-form .input input::placeholder{color:#6d6c82;opacity:0.4}capacitor-site-footer form.hs-form .input input:focus{outline:1px solid rgba(0, 0, 0, 0);border:1px solid #3880ff;box-shadow:0px 0px 0px 3px #c2d8ff}capacitor-site-footer form.hs-form .hs-submit input{display:flex;align-items:center;justify-content:center;cursor:pointer;height:48px;border:none;background:var(--c-capacitor-blue);color:#fff;border-radius:var(--radius-2);font-family:var(--f-family-text);letter-spacing:-0.02em;font-weight:500;font-size:16px;line-height:19px;margin-block-start:0;margin-block-end:0;padding:15px 18px 16px 18px;transition:box-shadow 0.2s ease-out, background-color 0.2s ease-out}capacitor-site-footer form.hs-form .hs-submit input:hover{background:#24a7ff;box-shadow:none}capacitor-site-footer form.hs-form .hs-submit input:active{background:#0090f0}capacitor-site-footer form.hs-form .hs-submit input:focus{outline:1px solid rgba(0, 0, 0, 0);box-shadow:0px 0px 0px 3px #c2d8ff}capacitor-site-footer form.hs-form .hs_error_rollup{position:absolute;top:100%;left:12px;font-size:14px;color:var(--c-red-100);margin-block-start:4px}capacitor-site-footer p>ion-icon{font-size:24px;margin-right:8px}capacitor-site-footer .form-message{margin-top:2px}";

const CapacitorSiteFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.defaults = undefined;
    this.email = '';
    this.isLoading = false;
    this.hasSubmitted = false;
    this.isValid = true;
    this.inlineMessage = '';
  }
  componentWillLoad() { }
  handleNewsletterSubmit(e) {
    e.preventDefault();
    this.isLoading = true;
    const xhr = new XMLHttpRequest();
    const url = [
      'https://api.hsforms.com/submissions/v3/integration/submit',
      this.defaults.hubspot.emailForm.id,
      this.defaults.hubspot.emailForm.key,
    ].join('/');
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const json = JSON.parse(xhr.responseText);
        this.inlineMessage = json.inlineMessage;
        this.isLoading = false;
        this.hasSubmitted = true;
        this.isValid = true;
      }
      else if (xhr.readyState == 4 && xhr.status == 400) {
        this.inlineMessage = 'Please enter a valid e-mail address.';
        this.isLoading = false;
        this.isValid = false;
      }
    };
    const hutkMatch = document.cookie.match && document.cookie.match(/hubspotutk=(.*?);/);
    const hutk = hutkMatch ? hutkMatch[1] : undefined;
    xhr.send(JSON.stringify({
      submittedAt: new Date().getTime(),
      fields: [
        {
          name: 'email',
          value: this.email,
        },
        {
          name: 'first_campaign_conversion',
          value: this.defaults.brandName + ' Newsletter Sign-Up Footer',
        },
      ],
      context: {
        hutk,
        pageUri: window.location.href,
        pageName: document.title,
      },
    }));
  }
  handleEmailChange(ev) {
    this.email = ev.target.value;
    this.isValid = true;
  }
  handleInlineMessage(returnMessage) {
    const messageMatch = returnMessage.match && returnMessage.match(/<p>(.*?)<\/p>/);
    return messageMatch ? messageMatch[1] : undefined;
  }
  companyLink() {
    if (this.defaults.companyUrl !== this.defaults.homepage) {
      return (h(Fragment, null, h("a", { href: this.defaults.companyUrl, target: "_blank", rel: "noopener" }, this.defaults.companyFooterBrandName), " | Released under ", h("span", { id: "mit" }, this.defaults.license, " License")));
    }
    else {
      return (h(Fragment, null, h("a", Object.assign({}, href('/')), this.defaults.companyFooterBrandName), " | Released under ", h("span", { id: "mit" }, this.defaults.license, " License")));
    }
  }
  render() {
    return (h(Host, null, h("footer", null, h(ResponsiveContainer, null, h("div", { class: "newsletter" }, h("div", null, h(Heading, { level: 4 }, "Join our Newsletter"), h(Paragraph, { level: 4 }, "Keep up to date with all the latest ", this.defaults.brandName, " news and updates")), h("div", { class: "form-group" }, this.hasSubmitted ? (h("div", { class: "form-message" }, h("ion-icon", { name: "checkmark-circle" }), h(Paragraph, null, this.handleInlineMessage(this.inlineMessage)))) : (h("form", { class: "hs-form", onSubmit: e => this.handleNewsletterSubmit(e) }, h("div", { class: "hs_email hs-email hs-fieldtype-text field hs-form-field" }, h("div", { class: "input" }, h("input", { name: "email", type: "email", autocomplete: "email", inputmode: "email", value: this.email, onInput: () => this.handleEmailChange(event), disabled: this.isLoading, placeholder: "E-mail", class: { 'error': this.isValid, 'ui-paragraph-4': true }, "aria-label": "Email", required: true }))), h("div", { class: "hs_submit hs-submit" }, h("div", { class: "actions" }, h("input", { type: "submit", class: "hs-button primary large", value: "Subscribe" }))), !this.isValid && (h(Paragraph, { level: 5, class: "error-message" }, this.inlineMessage)))))), h(Grid, null, h(Col, { md: 6, sm: 4, xs: 12, cols: 12, class: "copyright" }, h("webp-image", { src: "/assets/img/logo-white2.png", alt: this.defaults.brandName + ' logo', class: "logo", loading: "lazy" }), h("div", { class: "footer-social-wrapper" }, h("a", { class: "footer-social github", href: this.defaults.social.github, target: "_blank", rel: "noopener" }, h("ion-icon", { name: "logo-github" })), h("a", { class: "footer-social gitlab", href: this.defaults.social.gitlab, target: "_blank", rel: "noopener" }, h("ion-icon", { name: "logo-gitlab" })), h("a", { class: "footer-social slack", href: this.defaults.social.slack, target: "_blank", rel: "noopener" }, h("ion-icon", { name: "logo-slack" })), h("a", { class: "footer-social discord", href: this.defaults.social.discord, target: "_blank", rel: "noopener" }, h("ion-icon", { name: "logo-discord" })), h("a", { class: "footer-social facebook", href: this.defaults.social.facebook, target: "_blank", rel: "noopener" }, h("ion-icon", { name: "logo-facebook" })), h("a", { class: "footer-social twitter", href: this.defaults.social.twitter, target: "_blank", rel: "noopener" }, h("ion-icon", { name: "logo-twitter" })), h("a", { class: "footer-social linkedin", href: this.defaults.social.linkedin, target: "_blank", rel: "noopener" }, h("ion-icon", { name: "logo-linkedin" })), h("a", { class: "footer-social youtube", href: this.defaults.social.youtube, target: "_blank", rel: "noopener" }, h("ion-icon", { name: "logo-youtube" }))), h("p", null, "\u00A9 ", new Date().getFullYear(), " ", this.defaults.companyLegalName), h("p", null, this.companyLink()), h("p", null, h("a", Object.assign({}, href('/privacy')), "Privacy Policy"), " | ", h("a", Object.assign({}, href('/terms')), "Terms of Service"))), h(Col, { md: 6, sm: 8, xs: 12, cols: 12 }, h("div", { class: "routes-group" }, h("div", null, h(Heading, { level: 5 }, "Documentation"), h("ul", { class: "routes" }, this.defaults.documentationFooterLinks.map(({ title, href }) => (h("li", null, h("a", { class: "ui-paragraph-4", href: href }, title)))))), h("div", null, h(Heading, { level: 5 }, "Resources"), h("ul", { class: "routes" }, h("li", null, h("a", { class: "ui-paragraph-4", href: "/blog" }, "Blog")), h("li", null, h("a", Object.assign({ class: "ui-paragraph-4" }, href('/community')), "Community")), h("li", null, h("a", { class: "ui-paragraph-4", href: this.defaults.social.githubDiscussions, target: "_blank", rel: "noopener" }, "Discussions")), h("li", null, h("a", Object.assign({ class: "ui-paragraph-4" }, href('/enterprise')), "Enterprise")))), h("div", null, h(Heading, { level: 5 }, "Connect"), h("ul", { class: "routes" }, h("li", null, h("a", { class: "ui-paragraph-4", href: this.defaults.social.github, target: "_blank", rel: "noopener" }, "GitHub")), h("li", null, h("a", { class: "ui-paragraph-4", href: this.defaults.social.gitlab, target: "_blank", rel: "noopener" }, "GitLab")), h("li", null, h("a", { class: "ui-paragraph-4", href: this.defaults.social.facebook, target: "_blank", rel: "noopener" }, "Facebook")), h("li", null, h("a", { class: "ui-paragraph-4", href: this.defaults.social.twitter, target: "_blank", rel: "noopener" }, "Twitter")))))))))));
  }
};
CapacitorSiteFooter.style = capacitorSiteFooterCss;

export { CapacitorSiteFooter as C };

//# sourceMappingURL=capacitor-site-footer-b0a8fc6f.js.map