import { r as registerInstance, j as createEvent, h, k as Host, l as getElement } from './index-9fe124a3.js';
import { i as importResource } from './utils-fb465d6a.js';

const hubspotFormCss = ":root{--color-capacitor-blue:#119eff;--button-background:var(--color-capacitor-blue);--color-woodsmoke:#16161d;--color-dolphin:#626177;--color-gunpowder:#505061;--color-manatee:#8888a2;--color-cadet-blue:#abb2bf;--color-whisper:#ebebf7;--color-selago:#f4f4fd;--color-white-lilac:#f8f8fc;--color-white:#fff;--color-grey-blue:#73849a;--color-green-haze:#00ab47;--color-dodger-blue:#1d9aff;--color-dodger-blue-hover:rgba(#1d9aff, 0.2);--color-old-lace:#fdf5e4;--color-wheatfield:#f1e3c5;--color-pirate-gold:#9a6400;--button-shadow:0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);--button-shadow-hover:0 4px 6px rgba(0, 0, 0, 0.12),\n    0 1px 3px rgba(0, 0, 0, 0.08);--ease-out-expo:cubic-bezier(0.19, 1, 0.22, 1);--line-rule-color:#edf2f6}capacitor-hubspot-form{display:block;max-width:720px;margin:0 auto;font-weight:400}capacitor-hubspot-form .hs-form-required{display:none}capacitor-hubspot-form form fieldset.form-columns-2 .input{margin-right:12px}capacitor-hubspot-form form.stacked .field{margin-bottom:4px}capacitor-hubspot-form .hs-input,capacitor-hubspot-form input.hs-input,capacitor-hubspot-form select.hs-input{border:1px solid #e1e5ed;font-weight:500;border-radius:4px;transition:border-color 0.2s;box-shadow:none;outline:none;height:30px;padding:6px 12px;font-size:14px;line-height:1.428571429}capacitor-hubspot-form .hs-input:placeholder,capacitor-hubspot-form input.hs-input:placeholder,capacitor-hubspot-form select.hs-input:placeholder{color:var(--c-carbon-60)}capacitor-hubspot-form .hs-input:hover,capacitor-hubspot-form .hs-input:focus,capacitor-hubspot-form .hs-input:active,capacitor-hubspot-form input.hs-input:hover,capacitor-hubspot-form input.hs-input:focus,capacitor-hubspot-form input.hs-input:active,capacitor-hubspot-form select.hs-input:hover,capacitor-hubspot-form select.hs-input:focus,capacitor-hubspot-form select.hs-input:active{outline:none;border-color:var(--c-ionic-brand);box-shadow:none}capacitor-hubspot-form .hs-input.hs-input.error,capacitor-hubspot-form input.hs-input.hs-input.error,capacitor-hubspot-form select.hs-input.hs-input.error{border-color:var(--c-red-60)}capacitor-hubspot-form select.hs-input{height:44px;width:calc(100% + 6px) !important}capacitor-hubspot-form textarea.hs-input{padding:12px;width:calc(100% + 3px) !important;min-height:192px}capacitor-hubspot-form .hs_submit input.hs-button{display:block;margin:auto;cursor:pointer;font-size:13px;padding:10px 18px 10px;margin-right:-14px;margin-top:-36px;margin-left:auto;margin-right:auto;line-height:23px;float:right;font-weight:600;letter-spacing:0;text-transform:none;text-shadow:none;background:var(--c-ionic-brand);border:0;outline:0;transition:all 0.2s linear;box-shadow:0 1px 3px rgba(0, 0, 0, 0.12)}capacitor-hubspot-form .hs_submit input.hs-button:hover{border:0;box-shadow:0 4px 8px rgba(0, 0, 0, 0.12);background:#5995fc;color:#fff;outline:0}capacitor-hubspot-form .hs_submit input.hs-button:active,capacitor-hubspot-form .hs_submit input.hs-button:active:not(.inactive):not(.link),capacitor-hubspot-form .hs_submit input.hs-button:focus:not(.inactive){border:0;color:#fff;box-shadow:inset 0 1px 4px rgba(0, 0, 0, 0.2);background:#5995fc;outline:0}capacitor-hubspot-form .submitted-message{font-size:18px;padding:34px 0 78px;text-align:center;display:flex;flex-direction:column;align-items:center;font-weight:400;color:#35af55;max-width:410px;background-color:white;margin:0 auto}capacitor-hubspot-form .submitted-message:before{content:\"\";display:block;background-image:url(\"/img/checkmark-light-green.svg\");background-repeat:no-repeat;background-size:100%;width:42px;height:42px;margin-bottom:12px}capacitor-hubspot-form .hubspot-override .hs-form{font-family:var(--f-family-system)}capacitor-hubspot-form .hubspot-override .hs-form,capacitor-hubspot-form .hubspot-override .hs-form fieldset,capacitor-hubspot-form .hubspot-override .hs-form iframe{max-width:100%}capacitor-hubspot-form .hubspot-override .hs-form .hs-form-field{margin-top:16px}capacitor-hubspot-form .hubspot-override .hs-form label{margin-bottom:3px}capacitor-hubspot-form .hubspot-override .hs-form .hs-form-required{display:inline;color:#f45454;margin-left:4px}capacitor-hubspot-form .hubspot-override .hs-form .hs-richtext{margin-top:8px}capacitor-hubspot-form .hubspot-override .hs-form .hs-input,capacitor-hubspot-form .hubspot-override .hs-form input.hs-input{transition:border 0.3s;font-weight:500;background-color:#fff;background-image:none;border:1px solid #ced6e3;line-height:1.39286;border-radius:4px;padding:11px 15px;font-size:15px;margin-bottom:0;color:#505863}capacitor-hubspot-form .hubspot-override .hs-form input.hs-input[type=number]{float:none}capacitor-hubspot-form .hubspot-override .hs-form input.hs-input[type=text],capacitor-hubspot-form .hubspot-override .hs-form input.hs-input[type=email],capacitor-hubspot-form .hubspot-override .hs-form input.hs-input[type=tel]{height:auto;width:100%;float:none}capacitor-hubspot-form .hubspot-override .hs-form input.hs-input[type=text]:focus,capacitor-hubspot-form .hubspot-override .hs-form input.hs-input[type=email]:focus,capacitor-hubspot-form .hubspot-override .hs-form input.hs-input[type=tel]:focus{border-color:#629eff}capacitor-hubspot-form .hubspot-override .hs-form input.hs-input[type=radio],capacitor-hubspot-form .hubspot-override .hs-form input.hs-input[type=checkbox]{height:auto;margin-right:8px}capacitor-hubspot-form .hubspot-override .hs-form .hs-form-booleancheckbox-display{display:flex}capacitor-hubspot-form .hubspot-override .hs-form select.hs-input{height:44px;appearance:none;-moz-appearance:none;background-image:linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);background-position:calc(100% - 20px) 50%, calc(100% - 15px) 50%;background-size:5px 5px, 5px 5px, 1px 1.5em;background-repeat:no-repeat}capacitor-hubspot-form .hubspot-override .hs-form form fieldset.form-columns-2 .input{margin:0}capacitor-hubspot-form .hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field{padding:0 10px}capacitor-hubspot-form .hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field:first-child{padding-left:0}capacitor-hubspot-form .hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field:last-child{padding-right:0}capacitor-hubspot-form .hubspot-override .hs-form .inputs-list,capacitor-hubspot-form .hubspot-override .hs-form .hs-error-msgs{margin:0;padding:0;list-style-type:none}capacitor-hubspot-form .hubspot-override .hs-form .inputs-list.multi-container{overflow:hidden}capacitor-hubspot-form .hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child,capacitor-hubspot-form .hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child~li{width:50%;float:left;padding-right:11px}capacitor-hubspot-form .hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child~li:nth-child(even){padding-right:0;padding-left:11px}capacitor-hubspot-form .hubspot-override .hs-form .hs-form-checkbox-display{margin-top:4px;display:flex}capacitor-hubspot-form .hubspot-override .hs-form .hs-form-checkbox-display .hs-input[type=checkbox]{margin-right:10px}capacitor-hubspot-form .hubspot-override .hs-form .hs-form-checkbox-display span{font-size:15px;color:#505863}capacitor-hubspot-form .hubspot-override .hs-form .hs-error-msgs{padding:5px 0 0;font-size:11px;color:#f45454}capacitor-hubspot-form .hubspot-override .hs-form .hs_submit{margin-top:30px}capacitor-hubspot-form .hubspot-override .hs-form .hs_submit input.hs-button{transition:all 0.3s ease;margin:0;float:none;margin:auto;font-size:16px;font-weight:700;padding:12px 20px;vertical-align:middle;color:white;background:#3880ff;box-shadow:0 1px 3px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.12);border-radius:4px;line-height:18px;letter-spacing:-0.01em}capacitor-hubspot-form .hubspot-override .hs-form .hs_submit input.hs-button:hover{box-shadow:0 7px 14px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.08);background:#4d8dfd;color:#fff;outline:none}@media (max-width: 480px){capacitor-hubspot-form .hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field{width:100%;float:none;padding:0}capacitor-hubspot-form .hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field+.hs-form-field{margin-top:24px}capacitor-hubspot-form .hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child,capacitor-hubspot-form .hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child~li{width:100%;float:none;padding-right:0}capacitor-hubspot-form .hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child~li:nth-child(even){padding-left:0}capacitor-hubspot-form .hubspot-override .hs-form .hs_submit input.hs-button{width:100%}}capacitor-hubspot-form .hubspot-override--large .hs-form label:not(.hs-form-booleancheckbox-display){text-transform:uppercase;font-size:12px;letter-spacing:0.05em;margin-bottom:6px}capacitor-hubspot-form .hubspot-override--large .hs-form .hs-form-booleancheckbox-display{font-size:15px}capacitor-hubspot-form .hubspot-override--large .hs-form .hs-richtext p span,capacitor-hubspot-form .hubspot-override--large .hs-form .hs-richtext p a{font-size:15px}capacitor-hubspot-form .hubspot-override--large .hs-form .hs-input,capacitor-hubspot-form .hubspot-override--large .hs-form input.hs-input{padding:16px 20px 18px;font-size:18px}capacitor-hubspot-form .hubspot-override--large .hs-form select.hs-input{text-indent:10px;height:60px}@-moz-document url-prefix(){capacitor-hubspot-form .hubspot-override--large .hs-form select.hs-input{text-indent:0}}capacitor-hubspot-form .hubspot-override--large .hs-form .hs-error-msgs label{font-size:11px;letter-spacing:0;text-transform:none}capacitor-hubspot-form .hubspot-override--large .hs-form fieldset.form-columns-2 .hs-form-field{padding:0 20px}capacitor-hubspot-form .hubspot-override--large .hs-form .hs_submit{text-align:center;padding-top:18px}capacitor-hubspot-form .hubspot-override--large .hs-form .hs_submit input.hs-button{padding:22px 27px 24px;border-radius:6px}@media (max-width: 480px){capacitor-hubspot-form .hubspot-override--large .hs-form fieldset.form-columns-2 .hs-form-field{padding:0}}capacitor-hubspot-form .hubspot-override--measure{max-width:748px;margin-left:auto;margin-right:auto}";

const HubspotForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.formSubmitted = createEvent(this, "formSubmitted", 7);
    this.handleScriptLoad = () => {
      requestAnimationFrame(() => {
        window.hbspt.forms.create({
          portalId: this.defaults.hubspot.fullForm.id,
          formId: this.formId,
          target: `#${this.getFormElementId()}`,
          goToWebinarWebinarKey: this.goToWebinarKey || '',
          css: '',
          onFormReady: this.handleFormReady,
        });
      });
    };
    this.handleFormReady = (_e, _c) => {
      var _a, _b;
      // Don't override the form if not using the ajax method
      if (!this.ajax) {
        return;
      }
      const formEl = (_a = this.el) === null || _a === void 0 ? void 0 : _a.querySelector(`#${this.getFormElementId()} form`);
      if (!formEl) {
        return;
      }
      formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      });
      (_b = formEl
        .querySelector('input[type="submit"]')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', e => {
        this.submitForm(formEl);
        e.preventDefault();
      });
    };
    this.getFormElementId = () => `hbspt-form-${this.formId}`;
    this.submitForm = async (form) => {
      const data = new FormData(form);
      try {
        const ret = await fetch(form.getAttribute('action'), {
          method: 'POST',
          body: data,
        });
        if (ret.status !== 200) {
          this.error = 'Error submitting form';
        }
        else {
          // The response from hubspot is a script tag. I know, it's truly magnificent
          const frame = document.createElement('iframe');
          frame.srcdoc = await ret.text();
          document.body.appendChild(frame);
        }
      }
      catch (e) {
        this.error = 'Unable to submit form';
      }
    };
    this.formId = undefined;
    this.goToWebinarKey = undefined;
    this.ajax = false;
    this.defaults = undefined;
    this.error = null;
  }
  componentDidLoad() {
    importResource({ propertyName: 'hbspt', link: '//js.hsforms.net/forms/v2.js' }, this.handleScriptLoad);
  }
  handleWindowMessage(e) {
    var _a;
    if (e.data && e.data.formGuid && this.ajax) {
      // Don't let hubspot do anything
      e.preventDefault();
      e.stopImmediatePropagation();
      if (e.data.accepted === true) {
        (_a = this.formSubmitted) === null || _a === void 0 ? void 0 : _a.emit();
      }
      else if (e.data.accepted === false) {
        this.error =
          'Unable to submit. Please check your information and try again.';
      }
      else {
        this.error = '';
      }
    }
  }
  render() {
    return (h(Host, null, h("div", { class: "hubspot-override" }, h("div", { id: this.getFormElementId() })), this.error ? h("div", { class: "hs-error-msgs" }, this.error) : null));
  }
  get el() { return getElement(this); }
};
HubspotForm.style = hubspotFormCss;

export { HubspotForm as H };

//# sourceMappingURL=hubspot-form-e0a65583.js.map