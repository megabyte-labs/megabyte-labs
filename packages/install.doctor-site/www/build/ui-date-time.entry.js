import { r as registerInstance, h } from './index-9fe124a3.js';
import { D as DateTime } from './DateTime-8119d1b0.js';
import { g as getProps } from './tools-3c05f2a6.js';
import './common-ec05915d.js';

const UIDateTime = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.format = {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
  }
  render() {
    return (h(DateTime, Object.assign({ date: this.date }, getProps(['format'], this)), h("slot", null)));
  }
};

export { UIDateTime as ui_date_time };

//# sourceMappingURL=ui-date-time.entry.js.map