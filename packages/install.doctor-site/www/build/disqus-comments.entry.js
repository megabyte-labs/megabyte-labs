import { r as registerInstance, h, k as Host } from './index-9fe124a3.js';

const disqusCommentsCss = ".sc-disqus-comments-h{display:block}";

const DisqusComments = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    const existingScript = document.getElementById('disqus-embed-script');
    const siteId = this.siteId;
    const siteUrl = this.url;
    const init = () => {
      console.log('DISQUS INIT');
      window.DISQUS.reset({
        reload: true,
        config: function () {
          console.log('DISQUS CONFIG', siteId, siteUrl, document.title);
          this.page.identifier = siteId;
          this.page.url = siteUrl;
          this.page.title = document.title;
          this.language = 'en';
        }
      });
    };
    if (!existingScript) {
      this.scriptEl = document.createElement('script');
      this.scriptEl.id = 'disqus-embed-script';
      this.scriptEl.type = 'text/javascript';
      this.scriptEl.async = true;
      this.scriptEl.src = `https://${this.siteId}.disqus.com/embed.js`;
      this.scriptEl.setAttribute('data-timestamp', '' + +new Date());
      this.scriptEl.addEventListener('load', () => {
        setTimeout(() => {
          init();
        }, 100);
      });
      document.body.appendChild(this.scriptEl);
      const disqusScript = document.createElement('script');
      disqusScript.id = 'dsq-count-scr';
      disqusScript.async = true;
      disqusScript.src = `//${this.siteId}.disqus.com/count.js`;
      this.disqusScriptEl = disqusScript;
      document.body.appendChild(disqusScript);
    }
    else {
      setTimeout(() => {
        init();
      }, 100);
    }
  }
  render() {
    return (h(Host, null, h("div", { id: "disqus_thread" }), h("noscript", null, "Please enable JavaScript to view the", ' ', h("a", { href: "https://disqus.com/?ref_noscript" }, "comments powered by Disqus."))));
  }
};
DisqusComments.style = disqusCommentsCss;

export { DisqusComments as disqus_comments };

//# sourceMappingURL=disqus-comments.entry.js.map