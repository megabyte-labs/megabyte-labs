import { r as registerInstance, j as createEvent, h, k as Host } from './index-9fe124a3.js';

const appMenuToggleCss = ":root{--color-capacitor-blue:#119eff;--button-background:var(--color-capacitor-blue);--color-woodsmoke:#16161d;--color-dolphin:#626177;--color-gunpowder:#505061;--color-manatee:#8888a2;--color-cadet-blue:#abb2bf;--color-whisper:#ebebf7;--color-selago:#f4f4fd;--color-white-lilac:#f8f8fc;--color-white:#fff;--color-grey-blue:#73849a;--color-green-haze:#00ab47;--color-dodger-blue:#1d9aff;--color-dodger-blue-hover:rgba(#1d9aff, 0.2);--color-old-lace:#fdf5e4;--color-wheatfield:#f1e3c5;--color-pirate-gold:#9a6400;--button-shadow:0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);--button-shadow-hover:0 4px 6px rgba(0, 0, 0, 0.12),\n    0 1px 3px rgba(0, 0, 0, 0.08);--ease-out-expo:cubic-bezier(0.19, 1, 0.22, 1);--line-rule-color:#edf2f6}app-menu-toggle{display:none;top:0px;left:0px}app-menu-toggle .menu-toggle-button{display:flex;align-items:flex-start;justify-content:center;border:none;background:transparent;font-size:28px;outline:none}app-menu-toggle .menu-toggle-button:hover ion-icon{opacity:0.7}app-menu-toggle .menu-toggle-button:active ion-icon{color:initial}app-menu-toggle ion-icon{transition:opacity 0.2s ease-out;opacity:0.7;cursor:pointer}app-menu-toggle.left-sidebar-in>div{height:100vh;padding-right:50px}@media screen and (max-width: 768px){app-menu-toggle{display:flex}}";

const AppBurger = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.menuToggleClick = createEvent(this, "menuToggleClick", 7);
    this.icon = 'menu-outline';
  }
  handleButtonClick() {
    this.menuToggleClick.emit();
  }
  render() {
    return (h(Host, null, h("button", { class: "menu-toggle-button", onClick: () => this.handleButtonClick() }, h("ion-icon", { icon: this.icon }))));
  }
};
AppBurger.style = appMenuToggleCss;

export { AppBurger as A };

//# sourceMappingURL=app-menu-toggle-5e322aee.js.map