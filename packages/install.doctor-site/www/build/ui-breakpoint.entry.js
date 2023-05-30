import { r as registerInstance, h } from './index-9fe124a3.js';
import { B as Breakpoint } from './Breakpoint-eaff237a.js';
import { g as getProps } from './tools-3c05f2a6.js';
import './common-ec05915d.js';

const UIBreakpoint = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.display = 'block';
  }
  render() {
    return (h(Breakpoint, Object.assign({}, getProps(['xs', 'sm', 'md', 'lg', 'xl', 'display'], this)), h("slot", null)));
  }
};
UIBreakpoint.style = "breakpoint.scss";

export { UIBreakpoint as ui_breakpoint };

//# sourceMappingURL=ui-breakpoint.entry.js.map