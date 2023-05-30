import { r as registerInstance, h, k as Host, l as getElement } from './index-9fe124a3.js';

const WebpImg = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.src = '';
    this.alt = '';
    this.width = undefined;
    this.height = undefined;
    this.srcset = '';
    this.class = '';
    this.loading = 'lazy';
  }
  render() {
    const webpSrc = this.src.replace(/.png/gi, '.webp');
    return (h(Host, null, h("picture", null, h("source", { type: "image/webp", src: webpSrc }), h("source", { type: "image/png", src: this.src }), h("img", { "data-webp-image": "true", src: this.src, alt: this.alt, width: this.width, height: this.height, class: this.class, loading: this.loading }))));
  }
  get el() { return getElement(this); }
};

export { WebpImg as W };

//# sourceMappingURL=webp-image-4c979646.js.map