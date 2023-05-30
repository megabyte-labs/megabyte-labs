import { r as registerInstance, h, k as Host, l as getElement } from './index-9fe124a3.js';

const wistiaVideoCss = ".sc-wistia-video-h{display:block}.sc-wistia-video-h .wistia_embed.sc-wistia-video{margin:auto}";

const WistiaVideo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.width = 720;
    this.height = 520;
  }
  handleWindowResize() {
    window.requestAnimationFrame(() => this.resizeVideo());
  }
  componentDidLoad() {
    window.requestAnimationFrame(() => this.resizeVideo());
  }
  resizeVideo() {
    if (this.el) {
      const parent = this.el.parentElement;
      const width = parent === null || parent === void 0 ? void 0 : parent.offsetWidth;
      if (!width) {
        return;
      }
      this.width = width;
      this.height = width * (10 / 16);
    }
  }
  render() {
    const { videoId } = this;
    if (!videoId) {
      return null;
    }
    return (h(Host, null, h("script", { src: "//fast.wistia.com/assets/external/E-v1.js", async: true }), h("div", { class: `wistia_embed wistia_async_${videoId}`, style: {
        width: `${this.width}px`,
        height: `${this.height}px`,
      } }, "\u00A0")));
  }
  get el() { return getElement(this); }
};
WistiaVideo.style = wistiaVideoCss;

export { WistiaVideo as wistia_video };

//# sourceMappingURL=wistia-video.entry.js.map