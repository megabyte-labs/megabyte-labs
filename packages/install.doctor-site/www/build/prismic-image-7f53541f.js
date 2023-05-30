import { r as registerInstance, h, l as getElement } from './index-9fe124a3.js';

const PrismicImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.image = undefined;
    this.defaults = undefined;
    this.params = undefined;
    this.height = undefined;
    this.width = undefined;
    this.loading = 'lazy';
    this.alt = undefined;
    this.class = undefined;
  }
  render() {
    // This was copied from ionic-ds-no-fonts after it was compiled which is not available on GitHub. Not sure
    // how they are getting the data but this code seems to work. Wasn't sure what to make of it.
    const __rest = (this && this.__rest) || function (s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        // @ts-ignore
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    // @ts-ignore
    var { image, params } = this.image, props = __rest(this.image, ["image", "params"]);
    const regex = new RegExp(this.defaults.homepage, "gi");
    const strippedUrl = props.url.replace(regex, '');
    const webpSrc = strippedUrl.replace(/.png/gi, '.webp');
    const webpSrc2x = strippedUrl.replace(/.png/gi, '-2x.webp');
    const pngSrc2x = strippedUrl.replace(/.png/gi, '-2x.png');
    const imgSrcSet = strippedUrl + ' 1x, ' + pngSrc2x + ' 2x';
    if (strippedUrl.match(/-1x.png$/gi)) {
      return (h("picture", null, h("source", { type: "image/webp", src: webpSrc }), h("source", { type: "image/png", src: strippedUrl }), h("img", { src: strippedUrl, alt: props.alt, width: this.width, height: this.height, class: this.class, loading: this.loading })));
    }
    else {
      return (h("picture", null, h("source", { type: "image/webp", src: webpSrc + ' 1x' }), h("source", { type: "image/webp", src: webpSrc2x + ' 2x' }), h("source", { type: "image/png", src: props.url + ' 1x' }), h("source", { type: "image/png", src: pngSrc2x + ' 2x' }), h("img", { src: strippedUrl, alt: props.alt, width: this.width, height: this.height, class: this.class, loading: this.loading, srcset: imgSrcSet })));
    }
  }
  get el() { return getElement(this); }
};

export { PrismicImage as P };

//# sourceMappingURL=prismic-image-7f53541f.js.map