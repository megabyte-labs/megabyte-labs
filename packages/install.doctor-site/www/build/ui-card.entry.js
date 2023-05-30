import { r as registerInstance, h } from './index-9fe124a3.js';
import { C as Card } from './Card-4d34e073.js';
import { g as getProps } from './tools-3c05f2a6.js';
import './common-ec05915d.js';

const UICard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Card, Object.assign({}, getProps(['embelish'], this)), h("slot", null)));
  }
};

export { UICard as ui_card };

//# sourceMappingURL=ui-card.entry.js.map