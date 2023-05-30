import { r as registerInstance, h } from './index-9fe124a3.js';
import { B as Breadcrumbs } from './Breadcrumbs-f91fb5a9.js';
import './common-ec05915d.js';

const UIBreadcrumbs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Breadcrumbs, null, h("slot", null)));
  }
};

export { UIBreadcrumbs as ui_breadcrumbs };

//# sourceMappingURL=ui-breadcrumbs.entry.js.map