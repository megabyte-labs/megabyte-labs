import { r as registerInstance, h } from './index-9fe124a3.js';
import { G as Grid } from './Grid-cc0c81db.js';
import './common-ec05915d.js';

const UIGrid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Grid, null, h("slot", null)));
  }
};

export { UIGrid as ui_grid };

//# sourceMappingURL=ui-grid.entry.js.map