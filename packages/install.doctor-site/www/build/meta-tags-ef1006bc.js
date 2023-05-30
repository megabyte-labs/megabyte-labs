import { r as registerInstance, h, l as getElement } from './index-9fe124a3.js';

const isObject = (val) => !Array.isArray(val) && val !== null && typeof val === 'object';
const hasAttributes = ({ vattrs }, requiredAttrs = []) => isObject(vattrs) && requiredAttrs.every(vattrs.hasOwnProperty.bind(vattrs));
const isTextNode = ({ vtext }) => typeof vtext === 'string';
// Can't use instanceof HTMLElement because MockHTMLElement during pre-rendering isn't
const isElement = (val) => typeof val === 'object' && val.nodeType === 1 && typeof val.ownerDocument === 'object';
const isElementArray = (val) => Array.isArray(val) && val.every(isElement);

const createElement = ({ vtag, vattrs, vchildren, vtext }, utils) => {
    if (vtext != null) {
        return document.createTextNode(vtext);
    }
    const element = document.createElement(vtag);
    if (vattrs != null) {
        for (const key in vattrs) {
            element.setAttribute(key, vattrs[key]);
        }
    }
    if (vchildren != null) {
        utils.forEach(vchildren, (child) => {
            element.appendChild(createElement(child, utils));
        });
    }
    return element;
};
const shouldApplyToHead = (val) => isElement(val) || (isElementArray(val) && val.length === 2);
const applyToHead = (element) => {
    if (Array.isArray(element)) {
        return document.head.replaceChild(element[0], element[1]);
    }
    return document.head.appendChild(element);
};

const hasChildren = (node) => Array.isArray(node.vchildren);
const getFirstChild = (vchildren, utils) => {
    let firstChild = null;
    utils.forEach(vchildren || [], (c, i) => {
        if (i === 0) {
            firstChild = c;
            return;
        }
    });
    return firstChild;
};
function title(node, head, utils) {
    const firstChild = getFirstChild(node.vchildren || [], utils);
    if (firstChild && isTextNode(firstChild)) {
        return [createElement(node, utils), head.querySelector('title')];
    }
}
function meta(node, head, utils) {
    var _a, _b, _c;
    const namePropKey = ((_a = node.vattrs) === null || _a === void 0 ? void 0 : _a.property) ? 'property' : 'name';
    const namePropValue = ((_b = node.vattrs) === null || _b === void 0 ? void 0 : _b.property) || ((_c = node.vattrs) === null || _c === void 0 ? void 0 : _c.name);
    const existingElement = head.querySelector(`meta[${namePropKey}="${namePropValue}"]`);
    if (existingElement !== null) {
        return [createElement(node, utils), existingElement];
    }
    else {
        return createElement(node, utils);
    }
}
function link(node, _head, utils) {
    if (!hasChildren(node)) {
        return createElement(node, utils);
    }
}
function style(node, _head, utils) {
    const firstChild = getFirstChild(node.vchildren || [], utils);
    if (firstChild && isTextNode(firstChild)) {
        return createElement(node, utils);
    }
}
function script(node, _head, utils) {
    if (hasChildren(node) || hasAttributes(node)) {
        return createElement(node, utils);
    }
}
function base(node, _head, utils) {
    if (!hasChildren(node) && hasAttributes(node)) {
        return createElement(node, utils);
    }
}
const template = createElement;
const noscript = createElement; // SSR only
const types = {
    title,
    meta,
    link,
    style,
    script,
    base,
    template,
    noscript,
};

const headExists = document && document.head;
const validTagNames = Object.keys(types);
const isValidNode = (node) => validTagNames.indexOf(node.vtag) > -1;
const renderNode = (node, utils) => types[node.vtag](node, document.head, utils);
const Helmet = (_props, children, utils) => {
    if (!headExists) {
        return null;
    }
    const rendered = [];
    const validChildren = [];
    utils.forEach(children, (n) => {
        if (isValidNode(n)) {
            validChildren.push(n);
            rendered.push(renderNode(n, utils));
        }
    });
    // Build an HTMLElement for each provided virtual child
    rendered
        .filter(shouldApplyToHead)
        .forEach(applyToHead);
    return null;
};

const MetaTags = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.pageTitle = undefined;
    this.defaults = undefined;
    this.description = undefined;
    this.image = undefined;
    this.authorTwitter = undefined;
    this.ogType = undefined;
    this.canonicalUrl = undefined;
    this.rssTitle = undefined;
  }
  render() {
    this.site = this.defaults.homepage;
    if (!this.canonicalUrl)
      this.canonicalUrl = `${this.site}${location.pathname}`;
    if (!this.pageTitle)
      this.pageTitle = this.defaults.pageTitle;
    if (!this.description)
      this.description = this.defaults.description;
    if (!this.image)
      this.image = this.defaults.image;
    if (!this.authorTwitter)
      this.authorTwitter = this.defaults.authorTwitter;
    if (!this.ogType)
      this.ogType = this.defaults.ogType;
    const prettyTitle = this.pageTitle ===
      this.defaults.pageTitle
      ? this.pageTitle
      : `${this.pageTitle} | ${this.defaults.brandName}`;
    //if (!this.el.isConnected || Build.isServer) {
    //  return <Host></Host>
    //}
    if (this.rssTitle) {
      return (h(Helmet, null, h("title", null, prettyTitle), h("meta", { name: "description", content: this.description }), h("meta", { itemprop: "image", content: this.image }), h("meta", { property: "al:web:url", content: this.canonicalUrl }), h("meta", { property: "og:type", content: this.ogType }), h("meta", { property: "og:title", content: prettyTitle }), h("meta", { property: "og:description", content: this.description }), h("meta", { property: "og:image", content: this.image }), h("meta", { property: "og:url", content: `${this.site}${location.pathname}` }), h("meta", { name: "twitter:title", content: prettyTitle }), h("meta", { name: "twitter:description", content: this.description }), h("meta", { name: "twitter:image", content: this.image }), h("meta", { name: "twitter:creator", content: this.authorTwitter }), h("meta", { name: "rss:title", content: this.rssTitle }), h("link", { rel: "canonical", href: this.canonicalUrl }), h("link", { rel: "alternate", type: "application/rss+xml", title: this.rssTitle, href: this.canonicalUrl + '/rss.xml' })));
    }
    else {
      return (h(Helmet, null, h("title", null, prettyTitle), h("meta", { name: "description", content: this.description }), h("meta", { itemprop: "image", content: this.image }), h("meta", { property: "al:web:url", content: this.canonicalUrl }), h("meta", { property: "og:type", content: this.ogType }), h("meta", { property: "og:title", content: prettyTitle }), h("meta", { property: "og:description", content: this.description }), h("meta", { property: "og:image", content: this.image }), h("meta", { property: "og:url", content: `${this.site}${location.pathname}` }), h("meta", { name: "twitter:title", content: prettyTitle }), h("meta", { name: "twitter:description", content: this.description }), h("meta", { name: "twitter:image", content: this.image }), h("meta", { name: "twitter:creator", content: this.authorTwitter }), h("link", { rel: "canonical", href: this.canonicalUrl })));
    }
  }
  get el() { return getElement(this); }
};

export { MetaTags as M };

//# sourceMappingURL=meta-tags-ef1006bc.js.map