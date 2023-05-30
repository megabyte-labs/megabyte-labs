import { r as registerInstance, h } from './index-9fe124a3.js';
import { B as Button } from './Button-08ed8aa1.js';
import './common-ec05915d.js';

const UIButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Button, null, h("slot", null)));
  }
};
UIButton.style = "button.scss";

export { UIButton as ui_button };

//# sourceMappingURL=ui-button.entry.js.map