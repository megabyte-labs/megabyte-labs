import { r as registerInstance, h } from './index-9fe124a3.js';
import { D as Dropdown } from './Dropdown-521de822.js';

const UIDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.open = false;
  }
  render() {
    return (h(Dropdown, Object.assign({}, this), h("slot", null)));
  }
};

export { UIDropdown as ui_dropdown };

//# sourceMappingURL=ui-dropdown.entry.js.map