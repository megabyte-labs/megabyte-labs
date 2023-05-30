import { r as registerInstance, j as createEvent, h, k as Host, l as getElement } from './index-9fe124a3.js';

const hubspotFormCss = "hubspot-form{--c-label:var(--c-carbon-90);--arrow-size:1em;max-width:420px;display:block;margin:0 auto;font-weight:400}.hs-form-required{display:none}form fieldset.form-columns-2 .input{margin-right:12px}form.stacked .field{margin-bottom:4px}.hs-input,input.hs-input,select.hs-input{border:1px solid #e1e5ed;border-radius:4px;transition:border-color 0.2s;box-shadow:none;outline:none;height:30px;padding:6px 12px;font-size:14px;line-height:1.428571429}.hs-input:placeholder,input.hs-input:placeholder,select.hs-input:placeholder{color:var(--c-carbon-60)}.hs-input:hover,.hs-input:focus,.hs-input:active,input.hs-input:hover,input.hs-input:focus,input.hs-input:active,select.hs-input:hover,select.hs-input:focus,select.hs-input:active{outline:none;border-color:var(--c-ionic-brand);box-shadow:none}.hs-input.hs-input.error,input.hs-input.hs-input.error,select.hs-input.hs-input.error{border-color:var(--c-red-60)}select.hs-input{height:44px;width:100% !important}textarea.hs-input{padding:12px;width:100% !important;min-height:192px;font-family:var(--f-family-text);color:var(--c-carbon-90)}.hs_submit input.hs-button{display:block;margin:auto;cursor:pointer;font-size:13px;padding:10px 18px 10px;margin-right:-14px;margin-top:-36px;margin-left:auto;margin-right:auto;line-height:23px;float:right;font-weight:600;letter-spacing:0;text-transform:none;text-shadow:none;background:var(--c-ionic-brand);border:0;outline:0;transition:all 0.2s linear}.hs_submit input.hs-button:hover{border:0;background:#5995fc;color:#fff;outline:0}.hs_submit input.hs-button:active,.hs_submit input.hs-button:active:not(.inactive):not(.link),.hs_submit input.hs-button:focus:not(.inactive){border:0;color:#fff;box-shadow:inset 0 1px 4px rgba(0, 0, 0, 0.2);background:#5995fc;outline:0}.submitted-message{font-size:18px;padding:34px 0 78px;text-align:center;display:flex;flex-direction:column;align-items:center;font-weight:400;color:#35af55;max-width:410px;background-color:white;margin:0 auto}.submitted-message:before{content:\"\";display:block;background-image:url(\"/img/checkmark-light-green.svg\");background-repeat:no-repeat;background-size:100%;width:42px;height:42px;margin-bottom:12px}.hubspot-override .hs-form{font-family:var(--f-family-system)}.hubspot-override .hs-form .input{margin:0 !important}.hubspot-override .hs-form,.hubspot-override .hs-form fieldset,.hubspot-override .hs-form iframe{max-width:100%}.hubspot-override .hs-form .hs-form-field{margin-top:16px}.hubspot-override .hs-form label{font-family:var(--f-family-text);margin-bottom:8px;color:var(--c-label);font-weight:500;font-size:14px;line-height:112%;letter-spacing:-0.02em}.hubspot-override .hs-form .hs-richtext{margin-top:8px}.hubspot-override .hs-form .hs-input,.hubspot-override .hs-form input.hs-input{height:56px;transition:border 0.3s;background-color:#fff;background-image:none;border:1px solid #CED6E0;line-height:1.12;border-radius:8px;padding:17px 16px;font-size:16px;margin-bottom:0;color:var(--c-carbon-90);letter-spacing:-0.01em}.hubspot-override .hs-form input.hs-input[type=number]{float:none}.hubspot-override .hs-form input.hs-input[type=text],.hubspot-override .hs-form input.hs-input[type=email],.hubspot-override .hs-form input.hs-input[type=tel]{width:100% !important;float:none}.hubspot-override .hs-form input.hs-input[type=text]:focus,.hubspot-override .hs-form input.hs-input[type=email]:focus,.hubspot-override .hs-form input.hs-input[type=tel]:focus{border-color:#629eff}.hubspot-override .hs-form input.hs-input[type=radio],.hubspot-override .hs-form input.hs-input[type=checkbox]{height:auto;margin-right:8px}.hubspot-override .hs-form .hs-form-booleancheckbox-display{display:flex}.hubspot-override .hs-form select.hs-input{height:54px;padding-left:16px;padding-inline-end:48px;position:relative;appearance:none;-webkit-appearance:none;-moz-appearance:none;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBvbHlsaW5lIHBvaW50cz0nMTEyIDE4NCAyNTYgMzI4IDQwMCAxODQnIHN0eWxlPSdmaWxsOm5vbmU7c3Ryb2tlOiM0NDVCNzg7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDo0OHB4Jy8+PC9zdmc+\");background-size:1.2em;background-position:calc(100% - .9em) center;background-repeat:no-repeat}.hubspot-override .hs-form select.hs-input:active{background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPmlvbmljb25zLXY1LWE8L3RpdGxlPjxwb2x5bGluZSBwb2ludHM9JzExMiAzMjggMjU2IDE4NCA0MDAgMzI4JyBzdHlsZT0nZmlsbDpub25lO3N0cm9rZTojNDQ1Qjc4O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6NDhweCcvPjwvc3ZnPg==\")}.hubspot-override .hs-form select.hs-input:hover{cursor:pointer}.hubspot-override .hs-form fieldset:first-of-type .hs-form-field{margin-block-start:0px}.hubspot-override .hs-form fieldset.form-columns-2 .input{margin:0}.hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field{padding:0 10px}.hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field:first-child{padding-left:0}.hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field:last-child{padding-right:0}.hubspot-override .hs-form .inputs-list,.hubspot-override .hs-form .hs-error-msgs{margin:0;padding:0;list-style-type:none}.hubspot-override .hs-form .inputs-list.multi-container{overflow:hidden}.hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child,.hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child~li{width:50%;float:left;padding-right:11px}.hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child~li:nth-child(even){padding-right:0;padding-left:11px}.hubspot-override .hs-form .hs-form-checkbox-display{margin-top:4px;display:flex}.hubspot-override .hs-form .hs-form-checkbox-display .hs-input[type=checkbox]{margin-right:10px}.hubspot-override .hs-form .hs-form-checkbox-display span{font-size:15px;color:#505863}.hubspot-override .hs-form .hs-error-msg{margin:10px 0;display:inline-block;padding:0;font-size:14px;font-weight:500;color:var(--c-red-100)}.hubspot-override .hs-form .hs_submit{margin-top:30px}.hubspot-override .hs-form .hs_submit input.hs-button{transition:all 0.3s ease-out;margin:0;float:none;margin:auto;font-family:var(--f-family-text);font-size:16px;font-weight:600;padding:19px 20px;vertical-align:middle;color:white;background:var(--c-blue-80);border-radius:1000px;line-height:112%;letter-spacing:-0.02em}.hubspot-override .hs-form .hs_submit input.hs-button:hover{background:var(--c-blue-70);color:#fff;outline:none}@media (max-width: 768px){.hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field{width:100%;float:none;padding:0}.hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field+.hs-form-field{margin-top:24px}.hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child,.hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child~li{width:100%;float:none;padding-right:0}.hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child~li:nth-child(even){padding-left:0}.hubspot-override .hs-form .hs_submit input.hs-button{width:100%}}.hubspot-override.submit-arrow .hs-form .hs_submit input.hs-button{padding:19px 20px;padding-inline-end:calc(var(--arrow-size) + 24px);background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBvbHlsaW5lIHBvaW50cz0nMjY4IDExMiA0MTIgMjU2IDI2OCA0MDAnIHN0eWxlPSdmaWxsOm5vbmU7c3Ryb2tlOiNmZmY7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0OHB4Jy8+PGxpbmUgeDE9JzM5MicgeTE9JzI1NicgeDI9JzEwMCcgeTI9JzI1Nicgc3R5bGU9J2ZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjQ4cHgnLz48L3N2Zz4=\");background-size:var(--arrow-size);background-position:calc(100% - 20px) center;background-repeat:no-repeat}.hubspot-override.button-position--start .hs-form .hs_submit input.hs-button{float:left}.hubspot-override.button-position--end .hs-form .hs_submit input.hs-button{float:right}.hubspot-override.button-position--center .hs-form .hs_submit input.hs-button{margin-inline-start:auto;margin-inline-end:auto}.hubspot-override--large .hs-form label:not(.hs-form-booleancheckbox-display){text-transform:uppercase;font-size:12px;letter-spacing:0.05em;margin-bottom:6px}.hubspot-override--large .hs-form .hs-form-booleancheckbox-display{font-size:15px}.hubspot-override--large .hs-form .hs-richtext p span,.hubspot-override--large .hs-form .hs-richtext p a{font-size:15px}.hubspot-override--large .hs-form .hs-input,.hubspot-override--large .hs-form input.hs-input{padding:16px 20px 18px;font-size:18px}.hubspot-override--large .hs-form select.hs-input{text-indent:10px;height:60px}@-moz-document url-prefix(){.hubspot-override--large .hs-form select.hs-input{text-indent:0}}.hubspot-override--large .hs-form .hs-error-msgs label{font-size:11px;letter-spacing:0;text-transform:none}.hubspot-override--large .hs-form fieldset.form-columns-2 .hs-form-field{padding:0 20px}.hubspot-override--large .hs-form .hs_submit{text-align:center;padding-top:18px}.hubspot-override--large .hs-form .hs_submit input.hs-button{padding:22px 27px 24px;border-radius:6px}@media (max-width: 768px){.hubspot-override--large .hs-form fieldset.form-columns-2 .hs-form-field{padding:0}}.hubspot-override--measure{max-width:748px;margin-left:auto;margin-right:auto}";

const HubspotForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.formSubmitted = createEvent(this, "formSubmitted", 7);
    this.portalId = '3776657';
    this.ajax = false;
    this.submitArrow = false;
    this.error = null;
    this.handleScriptLoad = () => {
      requestAnimationFrame(() => {
        window.hbspt.forms.create({
          portalId: '3776657',
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
      (_b = formEl.querySelector('input[type="submit"]')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (e) => {
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
  }
  disconnectCallback() {
    var _a, _b;
    (_b = (_a = this.scriptEl) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(this.scriptEl);
  }
  componentDidLoad() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = '//js.hsforms.net/forms/v2.js';
    script.addEventListener('load', this.handleScriptLoad);
    this.scriptEl = script;
    document.body.appendChild(script);
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
        this.error = 'Unable to submit. Please check your information and try again.';
      }
      else {
        this.error = '';
      }
    }
  }
  render() {
    return (h(Host, null, h("div", { class: `
            hubspot-override
            ${this.submitArrow ? 'submit-arrow' : ''}
            ${this.buttonPosition ? `button-position--${this.buttonPosition}` : ''}
          ` }, h("div", { id: this.getFormElementId() })), this.error ? h("div", { class: "hs-error-msgs" }, this.error) : null));
  }
  get el() { return getElement(this); }
};
HubspotForm.style = hubspotFormCss;

export { HubspotForm as hubspot_form };

//# sourceMappingURL=hubspot-form.entry.js.map