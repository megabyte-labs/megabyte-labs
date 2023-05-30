import { r as registerInstance, h } from './index-9fe124a3.js';
import { T as ThemeProvider } from './ThemeProvider-c5f8f970.js';
import './common-ec05915d.js';

const UIThemeProvider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = 'base';
  }
  render() {
    return (h(ThemeProvider, Object.assign({}, this), h("slot", null)));
  }
};

export { UIThemeProvider as ui_theme_provider };

//# sourceMappingURL=ui-theme-provider.entry.js.map