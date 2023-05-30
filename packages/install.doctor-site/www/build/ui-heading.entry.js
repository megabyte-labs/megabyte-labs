import { r as registerInstance, h } from './index-9fe124a3.js';
import { H as Heading } from './Heading-19e4b567.js';
import { g as getProps } from './tools-3c05f2a6.js';
import './common-ec05915d.js';

const UIHeading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Which heading level to use
     * [Figma Spec](https://www.figma.com/file/JhTzz4Z6S4WDyfgtMZ1fr1/DS---Core?node-id=353%3A10)
     */
    this.level = 3;
    /**
     * Posters are extra large text, typically used in the hero section of a page.
     * _Note_: Poster only supports levels 1 - 4.
     * [Figma Spec](https://www.figma.com/file/JhTzz4Z6S4WDyfgtMZ1fr1/DS---Core?node-id=363%3A4)
     */
    this.poster = false;
  }
  render() {
    return (h(Heading, Object.assign({}, getProps(['level', 'poster', 'as'], this)), h("slot", null)));
  }
};

export { UIHeading as ui_heading };

//# sourceMappingURL=ui-heading.entry.js.map