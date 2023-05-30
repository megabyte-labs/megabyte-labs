import { r as registerInstance, h } from './index-9fe124a3.js';
import { P as Paragraph } from './Paragraph-0aec567b.js';
import { g as getProps } from './tools-3c05f2a6.js';
import './common-ec05915d.js';

const UIParagraph = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Which heading level to use
     * [Figma Spec](https://www.figma.com/file/JhTzz4Z6S4WDyfgtMZ1fr1/DS---Core?node-id=353%3A10)
     */
    this.level = 3;
    this.leading = 'body';
  }
  render() {
    return (h(Paragraph, Object.assign({}, getProps(['level', 'heading'], this)), h("slot", null)));
  }
};

export { UIParagraph as ui_paragraph };

//# sourceMappingURL=ui-paragraph.entry.js.map