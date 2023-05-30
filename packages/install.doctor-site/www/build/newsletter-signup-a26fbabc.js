import { r as registerInstance, h, k as Host } from './index-9fe124a3.js';
import { H as Heading, P as Paragraph } from './index-257c74e4.js';

const newsletterSignupCss = "newsletter-signup{display:block;background:#f8fafc;border:1px solid #dee3ea;border-radius:var(--radius-3);padding-inline-start:clamp(32px, 6vw, 56px);padding-inline-end:clamp(32px, 6vw, 56px);padding-block-start:64px;padding-block-end:64px}newsletter-signup .form-message{display:flex;align-items:center}newsletter-signup .form-message ion-icon{font-size:32px;color:#597eff;margin-inline-end:var(--space-3)}newsletter-signup .wrapper{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;margin-block-start:-32px}newsletter-signup .wrapper>*{margin-block-start:32px}newsletter-signup .heading-group{max-width:547px}newsletter-signup form.hs-form{display:flex;flex-wrap:wrap;margin-inline-start:-12px;margin-block-start:-16px;position:relative;bottom:6px}newsletter-signup form.hs-form>*{margin-block-start:16px}newsletter-signup form.hs-form li{list-style-type:none}newsletter-signup form.hs-form .hs-email{flex-grow:1;max-width:276px}newsletter-signup form.hs-form .hs-email label{position:absolute;opacity:0}newsletter-signup form.hs-form .input{width:100%;position:relative}newsletter-signup form.hs-form .input::before{left:30px;top:13px;position:absolute;vertical-align:middle;content:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNy41aDE0LjZjLjYgMCAxLjIuNiAxLjIgMS4ydjEwLjVjMCAuNy0uNiAxLjMtMS4yIDEuM0gxLjdjLS42IDAtMS4yLS42LTEuMi0xLjNWMS43YzAtLjYuNi0xLjIgMS4yLTEuMnoiIHN0cm9rZT0iIzkyQTBCMyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMi44IDIuOEw5IDcuN2w2LjItNC45IiBzdHJva2U9IiM5MkEwQjMiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)}newsletter-signup form.hs-form .input input{width:calc(100% - 12px);height:48px;margin-inline-start:12px;border:1px solid #ced6e0;border-radius:var(--radius-2);padding-inline-start:50px;transition:border 0.2s ease-out, box-shadow 0.2s ease-out}newsletter-signup form.hs-form .input input:focus{outline:1px solid rgba(0, 0, 0, 0);border:1px solid #3880ff;box-shadow:0px 0px 0px 3px #c2d8ff}newsletter-signup form.hs-form .hs-submit input{display:flex;align-items:center;justify-content:center;cursor:pointer;height:48px;border:none;background:var(--c-capacitor-blue);color:#fff;border-radius:var(--radius-2);margin-inline-start:12px;font-family:var(--f-family-text);text-transform:uppercase;letter-spacing:0.1em;font-weight:bold;font-size:16px;line-height:19px;padding:15px 18px 16px 18px;transition:box-shadow 0.2s ease-out, background-color 0.2s ease-out}newsletter-signup form.hs-form .hs-submit input:hover{background:#24a7ff;box-shadow:none}newsletter-signup form.hs-form .hs-submit input:active{background:#0090f0}newsletter-signup form.hs-form .hs-submit input:focus{outline:1px solid rgba(0, 0, 0, 0);box-shadow:0px 0px 0px 3px #c2d8ff}newsletter-signup form.hs-form .hs_error_rollup{position:absolute;top:100%;left:12px;font-size:14px;color:var(--c-red-100);margin-block-start:4px}";

const NewsletterSignup = class {
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
          value: this.defaults.brandName + ' Newsletter',
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
    return (h(Host, null, h("div", { class: "wrapper" }, h("div", { class: "heading-group" }, h(Heading, null, "The latest updates. Delivered monthly."), h(Paragraph, null, this.defaults.brandName, " is getting better every day. Sign up for a monthly email on the latest updates, releases, articles, news, and exclusive beta features!")), h("div", { class: "form-group" }, this.hasSubmitted ? (h("div", { class: "form-message" }, h("ion-icon", { name: "checkmark-circle" }), h(Paragraph, null, this.handleInlineMessage(this.inlineMessage)))) : (h("form", { class: "hs-form", onSubmit: e => this.handleNewsletterSubmit(e) }, h("div", { class: "hs_email hs-email hs-fieldtype-text field hs-form-field" }, h("div", { class: "input" }, h("input", { name: "email", type: "email", autocomplete: "email", inputmode: "email", value: this.email, onInput: () => this.handleEmailChange(event), disabled: this.isLoading, placeholder: "E-mail", class: { 'error': this.isValid, 'ui-paragraph-4': true }, "aria-label": "Email", required: true }))), h("div", { class: "hs_submit hs-submit" }, h("div", { class: "actions" }, h("input", { type: "submit", class: "hs-button primary large", value: "Subscribe" }))), !this.isValid && (h(Paragraph, { level: 5, class: "error-message" }, this.inlineMessage))))))));
  }
};
NewsletterSignup.style = newsletterSignupCss;

export { NewsletterSignup as N };

//# sourceMappingURL=newsletter-signup-a26fbabc.js.map