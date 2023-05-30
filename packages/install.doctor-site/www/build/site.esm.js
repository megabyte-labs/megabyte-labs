import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-9fe124a3.js';
export { s as setNonce } from './index-9fe124a3.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v3.2.0 | MIT Licensed | https://stenciljs.com
 */
/**
 * Helper method for querying a `meta` tag that contains a nonce value
 * out of a DOM's head.
 *
 * @param doc The DOM containing the `head` to query against
 * @returns The content of the meta tag representing the nonce value, or `undefined` if no tag
 * exists or the tag has no content.
 */
function queryNonceMetaTagContent(doc) {
    var _a, _b, _c;
    return (_c = (_b = (_a = doc.head) === null || _a === void 0 ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) === null || _b === void 0 ? void 0 : _b.getAttribute('content')) !== null && _c !== void 0 ? _c : undefined;
}
// TODO(STENCIL-661): Remove code related to the dynamic import shim
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    // TODO(STENCIL-659): Remove code implementing the CSS variable shim
    if (BUILD.cssVarShim) {
        // shim css vars
        // TODO(STENCIL-659): Remove code implementing the CSS variable shim
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        // because the mark/measure APIs are designed to write entries to a buffer in the browser that does not exist,
        // simply stub the implementations out.
        // TODO(STENCIL-323): Remove this patch when support for older browsers is removed (breaking)
        // @ts-ignore
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = 
    // TODO(STENCIL-661): Remove code related to the dynamic import shim
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? (scriptElm || {})['data-opts'] || {} : {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-c0f8af80.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
// TODO(STENCIL-661): Remove code related to the dynamic import shim
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            var _a;
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                // Apply CSP nonce to the script tag if it exists
                const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
                if (nonce != null) {
                    script.setAttribute('nonce', nonce);
                }
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["solution-page",[[2,"solution-page",{"solutionId":[1,"solution-id"],"defaults":[8]}]]],["capacitor-site",[[0,"capacitor-site"]]],["docs-root",[[0,"docs-root"]]],["resource-webinar",[[2,"resource-webinar",{"prismicData":[16],"state":[8]}]]],["resource-article",[[2,"resource-article",{"prismicData":[16]}]]],["newsletter-signup",[[0,"newsletter-signup",{"defaults":[8],"email":[32],"isLoading":[32],"hasSubmitted":[32],"isValid":[32],"inlineMessage":[32]}]]],["resource-case-study",[[2,"resource-case-study",{"prismicData":[16]}]]],["resource-whitepaper",[[2,"resource-whitepaper",{"prismicData":[16]}]]],["top-parallax",[[2,"top-parallax",{"defaults":[8],"showEmailInput":[32],"showCommunity":[32]}]]],["internal-ad",[[0,"internal-ad",{"ad":[32],"update":[64]}]]],["ui-blockquote",[[4,"ui-blockquote"]]],["ui-box",[[4,"ui-box"]]],["ui-breadcrumbs",[[4,"ui-breadcrumbs"]]],["ui-breakpoint",[[4,"ui-breakpoint",{"xs":[4],"sm":[4],"md":[4],"lg":[4],"xl":[4],"display":[1]}]]],["ui-button",[[4,"ui-button"]]],["ui-card",[[4,"ui-card",{"embelish":[4]}]]],["ui-date-time",[[4,"ui-date-time",{"date":[16],"format":[16]}]]],["ui-dropdown",[[4,"ui-dropdown",{"open":[4]}]]],["ui-grid",[[4,"ui-grid"]]],["ui-heading",[[4,"ui-heading",{"level":[2],"poster":[4],"as":[1]}]]],["ui-paragraph",[[4,"ui-paragraph",{"level":[2],"leading":[1]}]]],["ui-responsive-container",[[4,"ui-responsive-container",{"as":[1]}]]],["ui-skeleton",[[4,"ui-skeleton"]]],["ui-text",[[4,"ui-text"]]],["ui-theme-provider",[[4,"ui-theme-provider",{"type":[1]}]]],["blog-page",[[2,"blog-page",{"data":[16],"defaults":[8]}]]],["landing-page",[[2,"landing-page",{"data":[8],"template":[8],"selectedCodeTab":[32],"ebookModalOpen":[32]}]]],["enterprise-page",[[2,"enterprise-page",{"data":[8],"ebookModalOpen":[32]}]]],["community-page",[[2,"community-page",{"data":[8]}]]],["not-found-page",[[2,"not-found-page",{"defaults":[8]}]]],["privacy-policy-page",[[2,"privacy-policy-page",{"defaults":[8]}]]],["terms-service-page",[[2,"terms-service-page",{"defaults":[8]}]]],["shared-demo",[[0,"shared-demo",{"data":[32]}]]],["component-detail",[[0,"component-detail",{"component":[1],"example":[1]}]]],["component-list",[[0,"component-list"]]],["component-overview",[[0,"component-overview",{"component":[1]}]]],["newsletter-signup-parallax",[[0,"newsletter-signup-parallax",{"defaults":[8],"email":[32],"isLoading":[32],"hasSubmitted":[32],"isValid":[32],"inlineMessage":[32]}]]],["wistia-video",[[2,"wistia-video",{"videoId":[1,"video-id"],"width":[32],"height":[32]},[[9,"resize","handleWindowResize"]]]]],["blog-post",[[0,"blog-post",{"preview":[4],"data":[8],"defaults":[8],"ogAssetPath":[32],"moreResources":[32]}]]],["code-tabs",[[2,"code-tabs",{"data":[16],"activeTab":[32],"codeLeft":[32]}]]],["blog-pagination",[[2,"blog-pagination",{"defaults":[8],"linkText":[16],"rssIcon":[4,"rss-icon"]}]]],["enterprise-subnav",[[2,"enterprise-subnav",{"visible":[32]}]]],["hubspot-form",[[0,"hubspot-form",{"formId":[1,"form-id"],"portalId":[1,"portal-id"],"goToWebinarKey":[1,"go-to-webinar-key"],"ajax":[4],"submitArrow":[4,"submit-arrow"],"buttonPosition":[1,"button-position"],"error":[32]},[[8,"message","handleWindowMessage"]]]]],["platform-bar",[[0,"platform-bar",{"productName":[1,"product-name"],"containerClass":[1,"container-class"]}]]],["resource-toc",[[2,"resource-toc",{"titleNames":[16]}]]],["site-root",[[4,"site-root"]]],["blog-social-actions",[[2,"blog-social-actions",{"post":[8],"column":[4],"defaults":[8],"loaded":[32]}]]],["blog-subnav",[[2,"blog-subnav",{"breadcrumbs":[16],"socialActions":[4,"social-actions"],"pagination":[4],"sticky":[32],"open":[32]}]]],["disqus-comments",[[2,"disqus-comments",{"url":[1],"siteId":[1,"site-id"]}]]],["site-modal",[[4,"site-modal",{"open":[1028],"modalClose":[16],"visible":[32]},[[8,"keyup","handleKeyUp"]]]]],["capacitor-hubspot-form",[[0,"capacitor-hubspot-form",{"formId":[1,"form-id"],"goToWebinarKey":[1,"go-to-webinar-key"],"ajax":[4],"defaults":[8],"error":[32]},[[8,"message","handleWindowMessage"]]]]],["code-snippet",[[1,"code-snippet",{"language":[1],"code":[1]}]]],["prismic-image",[[0,"prismic-image",{"image":[8],"defaults":[8],"params":[8],"height":[8],"width":[8],"loading":[1],"alt":[1],"class":[1]}]]],["resource-meta",[[2,"resource-meta",{"tags":[16]}]]],["resource-author-item",[[2,"resource-author-item",{"author":[16]}]]],["resource-card",[[2,"resource-card",{"prismicData":[16],"row":[4],"headingLevel":[2,"heading-level"],"type":[4],"tags":[4],"author":[4],"description":[4],"routing":[16]}]]],["more-resources",[[2,"more-resources",{"resourceData":[16],"resources":[16],"headingLevel":[2,"heading-level"],"type":[4],"tags":[4],"description":[4],"author":[4],"routing":[16]}]]],["pre-footer",[[2,"pre-footer",{"defaults":[8]}]]],["ion-icon",[[1,"ion-icon",{"mode":[1025],"color":[1],"ariaLabel":[1537,"aria-label"],"ariaHidden":[513,"aria-hidden"],"ios":[1],"md":[1],"flipRtl":[4,"flip-rtl"],"name":[1],"src":[1],"icon":[8],"size":[1],"lazy":[4],"sanitize":[4],"svgContent":[32],"isVisible":[32]}]]],["docs-search",[[0,"docs-search",{"theme":[1],"placeholder":[1],"defaults":[8],"input":[32],"searchStats":[32]},[[9,"resize","getContentStats"]]]]],["app-menu-toggle",[[0,"app-menu-toggle",{"icon":[1]}]]],["more-button",[[0,"more-button"]]],["site-backdrop",[[2,"site-backdrop",{"visible":[4],"mobileOnly":[4,"mobile-only"]}]]],["site-header",[[2,"site-header",{"template":[8],"defaults":[8],"includeLogo":[4,"include-logo"],"includeBurger":[4,"include-burger"],"theme":[1],"sticky":[4],"collapsed":[32],"expanded":[32],"scrolled":[32]}]]],["capacitor-site-footer",[[0,"capacitor-site-footer",{"defaults":[8],"email":[32],"isLoading":[32],"hasSubmitted":[32],"isValid":[32],"inlineMessage":[32]}]]],["meta-tags",[[0,"meta-tags",{"pageTitle":[8,"page-title"],"defaults":[8],"description":[8],"image":[8],"authorTwitter":[8,"author-twitter"],"ogType":[8,"og-type"],"canonicalUrl":[8,"canonical-url"],"rssTitle":[8,"rss-title"]}]]],["webp-image",[[0,"webp-image",{"src":[1],"alt":[1],"width":[8],"height":[8],"srcset":[1],"class":[1],"loading":[1]}]]]], options);
});

//# sourceMappingURL=site.esm.js.map