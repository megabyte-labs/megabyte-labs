import { r as registerInstance, h } from './index-9fe124a3.js';
import { R as ResponsiveContainer } from './ResponsiveContainer-7e776113.js';
import './common-ec05915d.js';

const UIResponsiveContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.as = 'div';
  }
  render() {
    return (h(ResponsiveContainer, { as: this.as }, h("slot", null)));
  }
};

export { UIResponsiveContainer as ui_responsive_container };

//# sourceMappingURL=ui-responsive-container.entry.js.map