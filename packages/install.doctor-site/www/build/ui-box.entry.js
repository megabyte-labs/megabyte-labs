import { r as registerInstance, h } from './index-9fe124a3.js';
import { B as Box } from './Box-c4fe00cb.js';
import './common-ec05915d.js';

const UIBox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Box, null, h("slot", null)));
  }
};

export { UIBox as ui_box };

//# sourceMappingURL=ui-box.entry.js.map