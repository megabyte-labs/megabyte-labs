import { r as registerInstance, h, k as Host } from './index-9fe124a3.js';
import { P as Paragraph } from './index-257c74e4.js';

const newsletterSignupParallaxCss = "newsletter-signup-parallax{position:absolute;height:50px;width:180px;left:calc(50% - 188px);width:180px;transition:all 1s ease-in-out;opacity:0;pointer-events:none;z-index:-1}newsletter-signup-parallax .hs-submit{position:absolute;top:0;right:0}newsletter-signup-parallax .hs-button{letter-spacing:0;font-weight:bold;margin-inline-start:0.5em;height:50px;border-radius:50px}newsletter-signup-parallax input{padding-inline-start:16px;width:100%;height:50px;border:0;border-radius:50px;transition:border 0.2s ease-out, box-shadow 0.2s ease-out}newsletter-signup-parallax .form-message>p{position:relative;top:60px;color:white}newsletter-signup-parallax.loading{display:none}newsletter-signup-parallax.open{width:374px;opacity:1;pointer-events:all;z-index:1}newsletter-signup-parallax.nopointer{pointer-events:none}newsletter-signup-parallax.nopointer .form-group{display:none}newsletter-signup-parallax.nopointer .hs-form{display:none}";

const NewsletterSignupParallax = class {
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
          value: this.defaults.brandName + ' Newsletter Parallax',
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
  render() {
    return (h(Host, { class: {
        nopointer: this.hasSubmitted,
        loading: this.isLoading
      } }, h("div", { class: "wrapper" }, this.hasSubmitted ? (h("div", { class: "form-message" }, h(Paragraph, null, this.handleInlineMessage(this.inlineMessage)))) : (h("div", { class: "form-group" }, h("form", { class: "hs-form", onSubmit: e => this.handleNewsletterSubmit(e) }, h("div", { class: "hs_email hs-email hs-fieldtype-text field hs-form-field" }, h("div", { class: "input" }, h("input", { name: "email", type: "email", autocomplete: "email", inputmode: "email", value: this.email, onInput: () => this.handleEmailChange(event), disabled: this.isLoading, placeholder: "E-mail", class: { 'error': this.isValid, 'ui-paragraph-4': true }, "aria-label": "Email", required: true }))), h("div", { class: "hs_submit hs-submit" }, h("div", { class: "actions" }, h("input", { type: "submit", class: "hs-button ui-button primary large", value: " ->" }))))))), !this.isValid && (h(Paragraph, { level: 5, class: "error-message" }, this.inlineMessage))));
  }
};
NewsletterSignupParallax.style = newsletterSignupParallaxCss;

export { NewsletterSignupParallax as N };

//# sourceMappingURL=newsletter-signup-parallax-b03c9559.js.map