import { r as registerInstance, e as Build, h, k as Host, l as getElement } from './index-9fe124a3.js';
import { i as importResource } from './utils-fb465d6a.js';

const codeSnippetCss = "code[class*=language-],pre[class*=language-]{color:#ccc;background:none;font-family:Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:0.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#2d2d2d}:not(pre)>code[class*=language-]{padding:0.1em;border-radius:0.3em;white-space:normal}.token.comment,.token.block-comment,.token.prolog,.token.doctype,.token.cdata{color:#999}.token.punctuation{color:#ccc}.token.tag,.token.attr-name,.token.namespace,.token.deleted{color:#e2777a}.token.function-name{color:#6196cc}.token.boolean,.token.number,.token.function{color:#f08d49}.token.property,.token.class-name,.token.constant,.token.symbol{color:#f8c555}.token.selector,.token.important,.token.atrule,.token.keyword,.token.builtin{color:#cc99cd}.token.string,.token.char,.token.attr-value,.token.regex,.token.variable{color:#7ec699}.token.operator,.token.entity,.token.url{color:#67cdcc}.token.important,.token.bold{font-weight:bold}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:green}:host{display:block;min-width:0;max-width:100%;overflow-x:auto;border-radius:16px;background:#00233a}.dollar-sign::before{content:\"$ \";color:#4ebdfc}:not(pre)>code[class*=language-],pre[class*=language-]{padding:28px 32px;background:#00233a;margin:0;width:fit-content}:not(pre)>code[class*=language-] code,pre[class*=language-] code{line-height:1.8;display:block;font-family:\"Roboto Mono\", \"Source Code Pro\", monospace;font-size:14px;color:var(--c-carbon-10)}:not(pre)>code[class*=language-] code span,pre[class*=language-] code span{display:inline}:not(pre)>code[class*=language-] code .token.selector,:not(pre)>code[class*=language-] code .token.important,:not(pre)>code[class*=language-] code .token.atrule,:not(pre)>code[class*=language-] code .token.keyword,:not(pre)>code[class*=language-] code .token.builtin,pre[class*=language-] code .token.selector,pre[class*=language-] code .token.important,pre[class*=language-] code .token.atrule,pre[class*=language-] code .token.keyword,pre[class*=language-] code .token.builtin{color:#4ebdfc}:not(pre)>code[class*=language-] code .token.string,:not(pre)>code[class*=language-] code .token.char,:not(pre)>code[class*=language-] code .token.attr-value,:not(pre)>code[class*=language-] code .token.regex,:not(pre)>code[class*=language-] code .token.variable,pre[class*=language-] code .token.string,pre[class*=language-] code .token.char,pre[class*=language-] code .token.attr-value,pre[class*=language-] code .token.regex,pre[class*=language-] code .token.variable{color:#00e9ac}pre.language-shell-session code{line-height:200%}";

const CodeSnippet = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.loadInPrismLanguage = () => {
      importResource({
        propertyName: `Prism.languages.${this.language}`,
        link: `${CodeSnippet.prismCdn}/components/prism-${this.language}.min.js`,
      }, this.highlightCode);
    };
    this.highlightCode = async () => {
      if (Build.isServer)
        return;
      await customElements.whenDefined('code-snippet');
      window.Prism.hooks.add('before-insert', env => {
        switch (env.language) {
          case 'shell-session':
            const lines = env.code.split('\n');
            const code = lines.map(line => {
              return line.trim() === '' || line.trim()[0] === '#'
                ? `<span class="token output">${line}</span>\n`
                : `<span class="dollar-sign token output">${line}</span>\n`;
            });
            env.highlightedCode = code.join('');
            break;
          default:
        }
      });
      window.Prism.highlightElement(this.codeEl, false);
    };
    this.language = undefined;
    this.code = undefined;
  }
  componentWillLoad() {
    importResource({ propertyName: 'Prism', link: `${CodeSnippet.prismCdn}/prism.min.js` }, this.loadInPrismLanguage);
  }
  render() {
    if (!this.code) {
      return null;
    }
    return (h(Host, null, h("pre", { class: `language-${this.language}` }, h("code", { ref: e => (this.codeEl = e) }, this.code.trim()))));
  }
  get elm() { return getElement(this); }
};
// use an exact version so the cdn response is heavily cached
CodeSnippet.prismCdn = `https://cdn.jsdelivr.net/npm/prismjs@1.21.0`;
CodeSnippet.style = codeSnippetCss;

export { CodeSnippet as C };

//# sourceMappingURL=code-snippet-ea02d110.js.map