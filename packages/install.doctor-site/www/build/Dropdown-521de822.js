import { h } from './index-9fe124a3.js';

const Dropdown = ({ open = false }, children) => {
  return open ? h("ul", { class: `ui-dropdown${open ? ' ui-dropdown--open' : ''}` }, children) : null;
};

export { Dropdown as D };

//# sourceMappingURL=Dropdown-521de822.js.map