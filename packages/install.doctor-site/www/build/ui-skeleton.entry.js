import { r as registerInstance, h } from './index-9fe124a3.js';
import { S as Skeleton } from './Skeleton-a36d70a9.js';
import './common-ec05915d.js';

const UISkeleton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Skeleton, null, h("slot", null)));
  }
};

export { UISkeleton as ui_skeleton };

//# sourceMappingURL=ui-skeleton.entry.js.map