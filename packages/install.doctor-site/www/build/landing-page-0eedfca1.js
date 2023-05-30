import { r as registerInstance, h, k as Host } from './index-9fe124a3.js';
import { R as ResponsiveContainer, c as PrismicRichText, b as Button, B as Breakpoint, H as Heading, P as Paragraph, G as Grid, C as Col } from './index-257c74e4.js';
import { h as href } from './index-cb9de30c.js';

const landingPageCss = ".sc-landing-page:root{--c-capacitor-blue:#119eff}.sc-landing-page-h{--h1-color:var(--c-carbon-100);--h1-size:clamp(48px, 6vw, 64px);--h2-color:var(--c-carbon-50);--h2-size:clamp(40px, 6vw, 48px);--h3-color:var(--c-carbon-100);--h3-size:clamp(22px, 3vw, 28px);--h4-color:#010610;--h4-size:clamp(16px, 2.5vw, 20px);--p2-color:var(--c-carbon-80);--p2-size:clamp(16px, 2vw, 20px);--p3-color:var(--c-indigo-80);--p3-size:clamp(14px, 2vw, 16px)}h1.sc-landing-page,h2.sc-landing-page,h3.sc-landing-page,h4.sc-landing-page,h5.sc-landing-page,h6.sc-landing-page{font-family:var(--f-family-text)}.ui-heading-2.sc-landing-page em.sc-landing-page{font-style:normal;color:var(--c-carbon-100)}.sc-landing-page-h{overflow:hidden;display:block}#top.sc-landing-page .heading-group.sc-landing-page img.sc-landing-page{width:214px}#top.sc-landing-page>.ui-container.sc-landing-page>.heading-group.sc-landing-page>.link.sc-landing-page{margin-left:5px;margin-bottom:14px}.ui-col.ui-col-6.ui-col-sm-3.sc-landing-page:nth-child(1){background:#cfecfa}.ui-col.ui-col-6.ui-col-sm-3.sc-landing-page:nth-child(2){background:#f5caeb}.ui-col.ui-col-6.ui-col-sm-3.sc-landing-page:nth-child(3){background:#fdcbdd}.ui-col.ui-col-6.ui-col-sm-3.sc-landing-page:nth-child(4){background:#b7d2fa}.ui-col.ui-col-6.ui-col-sm-3.sc-landing-page:nth-child(5){background:#cfcfcf}.ui-col.ui-col-6.ui-col-sm-3.sc-landing-page:nth-child(6){background:#e1edff}.ui-col.ui-col-6.ui-col-sm-3.sc-landing-page:nth-child(7){background:#fbdbd0}.ui-col.ui-col-6.ui-col-sm-3.sc-landing-page:nth-child(8){background:#cceeff}#features.sc-landing-page .heading-group.sc-landing-page .ui-heading.sc-landing-page{max-width:500px}#native.sc-landing-page .heading-group.sc-landing-page{max-width:500px}#cta.sc-landing-page .ui-heading-2.sc-landing-page{max-width:44rem}#products.sc-landing-page .ui-col.ui-col-6.ui-col-sm-3.sc-landing-page:nth-child(1){background:#cccccc}#products.sc-landing-page .ui-col.ui-col-6.ui-col-sm-3.sc-landing-page:nth-child(2){background:#c6d2e5}#products.sc-landing-page .ui-col.ui-col-6.ui-col-sm-3.sc-landing-page:nth-child(3){background:#fad6d9}#products.sc-landing-page .ui-col.ui-col-6.ui-col-sm-3.sc-landing-page:nth-child(4){background:#cccccc}#top.sc-landing-page{overflow:hidden;position:relative;margin-bottom:178px}#top.sc-landing-page .ui-container.sc-landing-page{display:flex;margin-block-start:clamp(64px, 14vh, 154px)}@media screen and (max-width: 640px){#top.sc-landing-page .ui-container.sc-landing-page{margin-block-start:240px;flex-direction:column-reverse}}#top.sc-landing-page .ui-container.sc-landing-page>*.sc-landing-page{flex-grow:1}#top.sc-landing-page .background.sc-landing-page img.sc-landing-page{position:absolute;bottom:100px;width:1800px;height:1800px;left:calc((1800px - 100%) / -2 - 50px);background:#f6f9fc;transform:rotate(29deg) skewX(-30deg);z-index:-1}#top.sc-landing-page .heading-group.sc-landing-page{position:relative}#top.sc-landing-page .heading-group.sc-landing-page .ui-heading.sc-landing-page{max-width:504px}#top.sc-landing-page .heading-group.sc-landing-page .ui-paragraph.sc-landing-page{margin-block-end:var(--space-6);max-width:580px}#top.sc-landing-page .buttons.sc-landing-page{display:flex;flex-wrap:wrap;margin-inline-start:-15px;margin-block-start:-16px}#top.sc-landing-page .buttons.sc-landing-page .ui-button.sc-landing-page{margin-inline-start:15px;margin-block-start:16px}#top.sc-landing-page .buttons.sc-landing-page .ui-button.primary.sc-landing-page{--c-background:var(--c-capacitor-blue);--c-background--hover:#24a7ff;--c-background--active:#0090f0;--c-focus:#bde4ff}#top.sc-landing-page .buttons.sc-landing-page .ui-button.secondary.sc-landing-page{--c-text:var(--c-capacitor-blue);--c-focus:#80caff}#top.sc-landing-page .link.sc-landing-page{margin-block-start:var(--space-2);margin-block-end:var(--space-4)}#top.sc-landing-page .image-wrapper.sc-landing-page{display:flex;justify-content:flex-end;align-items:center;position:relative;top:-64px;right:-32px}@media screen and (max-width: 640px){#top.sc-landing-page .image-wrapper.sc-landing-page{justify-content:center;right:initial;top:initial}}#top.sc-landing-page .image-wrapper.sc-landing-page img.sc-landing-page{width:100%}@media screen and (max-width: 640px){#top.sc-landing-page .image-wrapper.sc-landing-page img.sc-landing-page{--width:200px;max-width:var(--width);left:calc(50% - var(--width) / 2) !important;top:-220px;position:absolute}}#announcement.sc-landing-page{position:absolute;white-space:nowrap;top:clamp(-50px, -17vh, -40px);width:auto;display:flex;align-items:center;padding:4px;border-radius:16px;background:white;color:var(--c-indigo-90);font-size:12px;box-shadow:0px 1px 4px rgba(0, 0, 0, 0.1)}@media screen and (max-width: 767px){#announcement.sc-landing-page{top:calc(100% + 32px)}}#announcement.sc-landing-page .text.sc-landing-page .text__content.sc-landing-page{padding:0 8px}#announcement.sc-landing-page .tag.sc-landing-page{display:inline-block;white-space:nowrap;padding:4px 6px;color:white;background:#ffb762;border-radius:var(--radius-3);font-size:var(--f-size-0);font-weight:bold;text-transform:uppercase;letter-spacing:var(--f-tracking-super)}#announcement.sc-landing-page:hover,#announcement.sc-landing-page:active,#announcement.sc-landing-page:focus,#announcement.sc-landing-page:focus-within{border-bottom-color:transparent}#ioniconf-cta.sc-landing-page{margin-block-start:9rem;margin-block-end:11.75rem}#ioniconf-cta.sc-landing-page .section-wrapper.sc-landing-page{display:grid;grid-template-columns:1fr 1fr;align-items:center;column-gap:2rem;row-gap:2rem;background-image:url(\"/assets/img/landing/bg-ioniconf-cta.png\");background-repeat:no-repeat;background-size:cover;border-radius:32px;overflow:hidden;min-height:22.5rem;margin-inline-start:-3rem;margin-inline-end:-3rem;padding:3rem}#ioniconf-cta.sc-landing-page .section-wrapper.sc-landing-page>*.sc-landing-page{flex-basis:50%}@media (max-width: 1023px){#ioniconf-cta.sc-landing-page .section-wrapper.sc-landing-page{grid-template-columns:1fr}}#ioniconf-cta.sc-landing-page .start.sc-landing-page{display:flex;justify-content:center}#ioniconf-cta.sc-landing-page .start.sc-landing-page .logo.sc-landing-page{max-width:100%}#ioniconf-cta.sc-landing-page header.sc-landing-page>*.sc-landing-page{max-width:32rem}#ioniconf-cta.sc-landing-page header.sc-landing-page .overline.sc-landing-page{color:var(--c-blue-20);font-family:var(--f-family-monospace);font-weight:500;font-size:0.75rem;line-height:112%;letter-spacing:0.16em;text-transform:uppercase;margin-block-end:0.75rem}#ioniconf-cta.sc-landing-page header.sc-landing-page .ui-heading.sc-landing-page{color:var(--c-indigo-10);margin-block-end:1rem}#ioniconf-cta.sc-landing-page header.sc-landing-page .ui-paragraph.sc-landing-page{color:var(--c-blue-10)}#ioniconf-cta.sc-landing-page header.sc-landing-page .ui-paragraph.sc-landing-page a.sc-landing-page{color:#35e2e9}#ioniconf-cta.sc-landing-page header.sc-landing-page .ui-button.sc-landing-page{--c-background:#fff;--c-background--hover:rgba(255, 255, 255, 0.8);--c-background--active:#fff;--c-focus:rgba(255, 255, 255, 0.3);--c-text:#11193f}#started.sc-landing-page{margin-block-end:223px}#started.sc-landing-page .heading-group.sc-landing-page{margin-block-end:90px}@media screen and (max-width: 640px){#started.sc-landing-page .heading-group.sc-landing-page{margin-block-end:64px}}#started.sc-landing-page .step.sc-landing-page{display:flex;padding-block-end:120px;position:relative}@media screen and (max-width: 767px){#started.sc-landing-page .step.sc-landing-page{flex-direction:column;padding-block-end:64px}#started.sc-landing-page .step.sc-landing-page::before{display:none}}#started.sc-landing-page .step.sc-landing-page:last-of-type{padding-block-end:0}#started.sc-landing-page .step.sc-landing-page:last-of-type::before{display:none}#started.sc-landing-page .step.sc-landing-page::before{content:\"\";position:absolute;top:24px;left:7px;bottom:0;width:1px;background:var(--c-carbon-10)}#started.sc-landing-page .step.sc-landing-page sup.sc-landing-page{position:relative;top:3px;width:40px;margin-inline-end:clamp(12px, 1.5vw, 24px);margin-block-end:var(--space-4)}#started.sc-landing-page .step.sc-landing-page .heading-panel-wrapper.sc-landing-page{display:flex;margin-block-start:-32px;margin-inline-start:-32px;width:calc(100% + 32px)}@media screen and (max-width: 767px){#started.sc-landing-page .step.sc-landing-page .heading-panel-wrapper.sc-landing-page{flex-direction:column}}#started.sc-landing-page .step.sc-landing-page .heading-panel-wrapper.sc-landing-page>*.sc-landing-page{margin-block-start:32px;margin-inline-start:32px}#started.sc-landing-page .step.sc-landing-page .heading-wrapper.sc-landing-page{flex-grow:1}#started.sc-landing-page .step.sc-landing-page .heading-wrapper.sc-landing-page .ui-heading.sc-landing-page{font-weight:600;max-width:384px;margin-inline-end:32px}#started.sc-landing-page .step.sc-landing-page .heading-wrapper.sc-landing-page .ui-paragraph.sc-landing-page{margin-block-start:24px;max-width:384px}#started.sc-landing-page .step.sc-landing-page .panel.sc-landing-page{flex-basis:560px;max-width:560px;min-width:0}@media screen and (max-width: 767px){#started.sc-landing-page .step.sc-landing-page .panel.sc-landing-page{flex-basis:auto}}#started.sc-landing-page .step.sc-landing-page .platforms.sc-landing-page{display:flex}#started.sc-landing-page .step.sc-landing-page .platforms.sc-landing-page *.sc-landing-page+*.sc-landing-page{margin-inline-start:var(--space-3)}#started.sc-landing-page em.sc-landing-page::after{right:3px}#technologies.sc-landing-page .heading-group.sc-landing-page{text-align:center}#technologies.sc-landing-page .ui-paragraph.sc-landing-page{text-align:center;margin:0 auto;display:inline-block}#technologies.sc-landing-page prismic-image.sc-landing-page{display:inline-block;margin:14px;filter:grayscale(1)}#technologies.sc-landing-page .images.sc-landing-page{margin-top:29px;text-align:center}#ebook.sc-landing-page site-modal.sc-landing-page h2.sc-landing-page{text-align:center;color:var(--c-carbon-100);margin-block-end:2rem}#ebook.sc-landing-page .background.sc-landing-page img.sc-landing-page{position:absolute;object-fit:cover;width:100%;height:100%;z-index:0;border-radius:32px}#ebook.sc-landing-page .wrapper.sc-landing-page{position:relative;margin-inline-start:-3rem;margin-inline-end:-3rem}@media (max-width: 1215px){#ebook.sc-landing-page .wrapper.sc-landing-page{margin:0}}#ebook.sc-landing-page .content.sc-landing-page{display:flex;background:#011830;border-radius:32px}@media (max-width: 640px){#ebook.sc-landing-page .content.sc-landing-page{flex-direction:column}}@media (max-width: 640px){#ebook.sc-landing-page .content.sc-landing-page{padding-inline-start:clamp(1rem, 8vw, 3rem);padding-inline-end:clamp(1rem, 8vw, 3rem)}}#ebook.sc-landing-page .heading-group.sc-landing-page{flex-basis:50%;position:relative;z-index:1;align-self:center;max-width:35rem;padding:clamp(1rem, 2.5vw, 2rem);padding-inline-end:3rem}@media (max-width: 640px){#ebook.sc-landing-page .heading-group.sc-landing-page{padding:clamp(1rem, 8vw, 3rem) 0}}#ebook.sc-landing-page .heading-group.sc-landing-page .ui-paragraph.sc-landing-page{color:var(--c-carbon-20);font-weight:600;font-size:1.5rem;line-height:120%;letter-spacing:-0.03em;margin-block-end:2rem}#ebook.sc-landing-page .heading-group.sc-landing-page .ui-paragraph.sc-landing-page em.sc-landing-page{font-style:normal;color:#fff}#ebook.sc-landing-page .heading-group.sc-landing-page .ui-button.sc-landing-page{color:#011830;--c-background:rgba(255, 255, 255, 1);--c-focus:rgba(255, 255, 255, 0.6);--c-background--hover:rgba(255, 255, 255, 0.9);--c-background--active:#f2f2f2}#ebook.sc-landing-page .image-wrapper.sc-landing-page{flex-basis:50%;position:relative;z-index:1;align-self:flex-end}@media (max-width: 640px){#ebook.sc-landing-page .image-wrapper.sc-landing-page{align-self:center}}#ebook.sc-landing-page .image-wrapper.sc-landing-page img.sc-landing-page{margin-inline-start:clamp(2rem, 8vw, 10rem);margin-inline-end:clamp(2rem, 8vw, 6rem);margin-block-start:-3rem;max-width:100%}@media (max-width: 1023px){#ebook.sc-landing-page .image-wrapper.sc-landing-page img.sc-landing-page{margin-inline-start:0;margin-inline-end:0;padding-inline-start:3rem;width:100%}}@media (max-width: 640px){#ebook.sc-landing-page .image-wrapper.sc-landing-page img.sc-landing-page{padding:0}}#native.sc-landing-page{margin-block-start:6.25rem;margin-block-end:6.25rem}#native.sc-landing-page .heading-group.sc-landing-page{max-width:480px;margin-block-end:var(--space-11)}#native.sc-landing-page .ui-grid.sc-landing-page{column-gap:var(--space-6)}#native.sc-landing-page .ui-grid.sc-landing-page .ui-col.sc-landing-page img.sc-landing-page{margin-block-end:40px}#native.sc-landing-page img.sc-landing-page{width:64px;height:64px}#features.sc-landing-page{padding-block-start:6.25rem;padding-block-end:6.25rem;background:#f7f9fc;position:relative;z-index:0}#features.sc-landing-page .heading-group.sc-landing-page{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;margin-inline-start:-32px;margin-block-start:-16px;margin-block-end:var(--space-11)}#features.sc-landing-page .heading-group.sc-landing-page>*.sc-landing-page{margin-inline-start:32px;margin-block-start:16px}#features.sc-landing-page .heading-group.sc-landing-page .ui-heading.sc-landing-page{max-width:448px;margin-block-end:0px}#features.sc-landing-page .ui-grid.sc-landing-page .ui-col.sc-landing-page img.sc-landing-page{margin-block-end:32px}#features.sc-landing-page .link.sc-landing-page{margin-block-end:6px}#framework.sc-landing-page,#products.sc-landing-page{margin-block-start:6.25rem;margin-block-end:6.25rem}#framework.sc-landing-page .heading-group.sc-landing-page,#products.sc-landing-page .heading-group.sc-landing-page{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;margin-inline-start:-32px;margin-block-start:-16px;margin-block-end:var(--space-11)}#framework.sc-landing-page .heading-group.sc-landing-page>*.sc-landing-page,#products.sc-landing-page .heading-group.sc-landing-page>*.sc-landing-page{margin-inline-start:32px;margin-block-start:16px}#framework.sc-landing-page .heading-group.sc-landing-page .ui-heading.sc-landing-page,#products.sc-landing-page .heading-group.sc-landing-page .ui-heading.sc-landing-page{margin-block-end:0px;max-width:400px}#framework.sc-landing-page .heading-group.sc-landing-page .ui-paragraph.sc-landing-page,#products.sc-landing-page .heading-group.sc-landing-page .ui-paragraph.sc-landing-page{max-width:560px}#framework.sc-landing-page .ui-grid.sc-landing-page,#products.sc-landing-page .ui-grid.sc-landing-page{column-gap:16px;row-gap:16px}#framework.sc-landing-page .ui-grid.sc-landing-page .ui-col.sc-landing-page a.sc-landing-page,#products.sc-landing-page .ui-grid.sc-landing-page .ui-col.sc-landing-page a.sc-landing-page{display:block;overflow:hidden}#framework.sc-landing-page .ui-grid.sc-landing-page .ui-col.sc-landing-page a.sc-landing-page:hover img.sc-landing-page,#framework.sc-landing-page .ui-grid.sc-landing-page .ui-col.sc-landing-page a.sc-landing-page:active img.sc-landing-page,#framework.sc-landing-page .ui-grid.sc-landing-page .ui-col.sc-landing-page a.sc-landing-page:focus img.sc-landing-page,#products.sc-landing-page .ui-grid.sc-landing-page .ui-col.sc-landing-page a.sc-landing-page:hover img.sc-landing-page,#products.sc-landing-page .ui-grid.sc-landing-page .ui-col.sc-landing-page a.sc-landing-page:active img.sc-landing-page,#products.sc-landing-page .ui-grid.sc-landing-page .ui-col.sc-landing-page a.sc-landing-page:focus img.sc-landing-page{transform:scale(1.05)}#framework.sc-landing-page .ui-grid.sc-landing-page img.sc-landing-page,#products.sc-landing-page .ui-grid.sc-landing-page img.sc-landing-page{transition:transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);width:100%}#tweets.sc-landing-page{--h2-color:var(--c-carbon-50);padding-block-start:6.25rem;padding-block-end:6.25rem;background:var(--c-indigo-10)}#tweets.sc-landing-page article.sc-landing-page{width:269px}#tweets.sc-landing-page .heading-group.sc-landing-page{margin-block-end:6rem}#tweets.sc-landing-page .heading-group.sc-landing-page .ui-heading-2.sc-landing-page{max-width:38rem;font-size:3rem;line-height:112%;letter-spacing:-0.05em}#tweets.sc-landing-page .heading-group.sc-landing-page .ui-heading-2.sc-landing-page em.sc-landing-page{color:var(--c-carbon-100)}#tweets.sc-landing-page .heading-group.sc-landing-page .ui-heading-2.sc-landing-page em.sc-landing-page::after{display:none}#tweets.sc-landing-page .tweets.sc-landing-page{columns:3;column-gap:32px}@media (max-width: 1023px){#tweets.sc-landing-page .tweets.sc-landing-page{columns:2}}@media (max-width: 640px){#tweets.sc-landing-page .tweets.sc-landing-page{columns:1}}#tweets.sc-landing-page .tweets.sc-landing-page .tweet.sc-landing-page{-webkit-column-break-inside:avoid;page-break-inside:avoid;break-inside:avoid;padding:1.5rem;border:1px solid #e9edf3;border-radius:8px;background:#fff}#tweets.sc-landing-page .tweets.sc-landing-page .tweet.sc-landing-page+.tweet.sc-landing-page{margin-block-start:2rem}#tweets.sc-landing-page .tweets.sc-landing-page .tweet.sc-landing-page .title-row.sc-landing-page{display:grid;align-items:center;column-gap:16px;grid-template-columns:40px 1fr 16px;margin-block-end:1.25rem}#tweets.sc-landing-page .tweets.sc-landing-page .tweet.sc-landing-page .title-row.sc-landing-page .title.sc-landing-page .ui-heading.sc-landing-page{line-height:100%;margin-block-end:0.375rem}#tweets.sc-landing-page .tweets.sc-landing-page .tweet.sc-landing-page .title-row.sc-landing-page .title.sc-landing-page .ui-heading.sc-landing-page svg.sc-landing-page{width:0.875rem;margin-inline-start:0.25rem;margin-block-start:0.125rem;margin-block-end:-0.125rem}#tweets.sc-landing-page .tweets.sc-landing-page .tweet.sc-landing-page .title-row.sc-landing-page .title.sc-landing-page .ui-paragraph.sc-landing-page{font-weight:500;color:var(--c-carbon-60);line-height:100%}#tweets.sc-landing-page .tweets.sc-landing-page .tweet.sc-landing-page .content.sc-landing-page{color:#222d3a}#tweets.sc-landing-page .bottom.sc-landing-page{display:flex;flex-direction:column;margin-block-start:4rem;text-align:center}#tweets.sc-landing-page .bottom.sc-landing-page .emoji.sc-landing-page{font-size:1.75rem;margin-block-end:0.5rem}#tweets.sc-landing-page .bottom.sc-landing-page .ui-paragraph-1.sc-landing-page{letter-spacing:0;font-weight:bold;font-size:28px;line-height:120%;color:var(--c-carbon-50)}#tweets.sc-landing-page .bottom.sc-landing-page .ui-paragraph-1.sc-landing-page em.sc-landing-page{color:#03060b;display:block;font-style:normal}#tweets.sc-landing-page .bottom.sc-landing-page .links.sc-landing-page{margin-inline-start:-1.5rem;margin-block-start:-1.5rem}#tweets.sc-landing-page .bottom.sc-landing-page .links.sc-landing-page article.sc-landing-page{margin-inline-start:1.5rem;margin-block-start:1.5rem;padding:1.375rem 20px;display:grid;grid-template-columns:24px 1fr;align-items:center;column-gap:12px;background:#ffffff;border-radius:16px;transition:all 0.2s ease-out;border:1px solid #ced6e0}#tweets.sc-landing-page .bottom.sc-landing-page .links.sc-landing-page article.sc-landing-page:hover{transform:translateY(-1px);box-shadow:var(--elevation-2)}#tweets.sc-landing-page .bottom.sc-landing-page .links.sc-landing-page article.sc-landing-page img.sc-landing-page{max-width:100%}#tweets.sc-landing-page .bottom.sc-landing-page .links.sc-landing-page article.sc-landing-page .ui-heading.sc-landing-page{font-weight:bold;color:var(--c-carbon-100);line-height:112%;margin:0}#tweets.sc-landing-page .bottom.sc-landing-page .links.sc-landing-page article.sc-landing-page:hover{box-shadow:0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)}#multisection.sc-landing-page{background:linear-gradient(180deg, #ffffff 0%, #f6f8fc 100%)}#cta.sc-landing-page{--h2-color:var(--c-carbon-50);--p1-color:var(--c-indigo-40);--p1-size:2rem;--p1-weight:600;--p1-leading:120%;margin-block-start:6.25rem}#cta.sc-landing-page .ui-heading-2.sc-landing-page{max-width:38rem}#cta.sc-landing-page .ui-heading-2.sc-landing-page em.sc-landing-page{color:var(--c-carbon-100)}#cta.sc-landing-page .ui-heading-2.sc-landing-page em.sc-landing-page::after{display:none}#cta.sc-landing-page .wrapper.sc-landing-page{padding-block-start:4rem;overflow:hidden;margin-inline-start:-48px;margin-inline-end:-48px;padding-inline-start:48px;padding-inline-end:48px}#cta.sc-landing-page .card.sc-landing-page{position:relative;background:linear-gradient(180deg, #002038 0%, #001220 100%);border-radius:32px;margin-inline-start:-48px;margin-inline-end:-48px;padding-inline-start:48px;padding-inline-end:48px;padding-block-start:clamp(2rem, 8vw, 3.5rem)}@media (max-width: 1023px){#cta.sc-landing-page .card.sc-landing-page{overflow:hidden}}#cta.sc-landing-page .card.sc-landing-page .background.sc-landing-page img.sc-landing-page{position:absolute;z-index:1;right:0;top:-8.25%;max-width:100%;min-height:108.25%}@media (max-width: 1023px){#cta.sc-landing-page .card.sc-landing-page .background.sc-landing-page img.sc-landing-page{opacity:0.3}}#cta.sc-landing-page .card.sc-landing-page .heading-group.sc-landing-page{position:relative;z-index:2;max-width:528px}#cta.sc-landing-page .card.sc-landing-page .heading-group.sc-landing-page .ui-paragraph.sc-landing-page{margin-block-end:2.5rem}#cta.sc-landing-page .card.sc-landing-page .heading-group.sc-landing-page .ui-paragraph.sc-landing-page em.sc-landing-page{font-style:normal;color:#fff}#cta.sc-landing-page .card.sc-landing-page .heading-group.sc-landing-page .ui-paragraph.sc-landing-page em.sc-landing-page::after{display:none}#cta.sc-landing-page .card.sc-landing-page .heading-group.sc-landing-page .ui-button.sc-landing-page{margin-block-end:clamp(3rem, 10vw, 9rem);color:#01182a;--c-background:rgba(255, 255, 255, 1);--c-focus:rgba(255, 255, 255, 0.5);--c-background--hover:rgba(255, 255, 255, 0.9);--c-background--active:rgba(255, 255, 255, 1)}#companies.sc-landing-page{margin-block-start:8rem;margin-block-end:10.063rem}#companies.sc-landing-page .wrapper.sc-landing-page{display:flex;flex-wrap:wrap;justify-content:center}@media (max-width: 767px){#companies.sc-landing-page .wrapper.sc-landing-page{flex-direction:column}}#companies.sc-landing-page .wrapper.sc-landing-page .image-group.sc-landing-page{display:flex;flex-grow:1;flex-basis:50%;align-items:center;justify-content:space-around}@media (max-width: 767px){#companies.sc-landing-page .wrapper.sc-landing-page .image-group.sc-landing-page{justify-content:space-between}}#companies.sc-landing-page .wrapper.sc-landing-page .image-group.first.sc-landing-page{margin-inline-start:calc(-1 * (50% - 130px) / 7)}@media (max-width: 767px){#companies.sc-landing-page .wrapper.sc-landing-page .image-group.first.sc-landing-page{margin:0}}#companies.sc-landing-page .wrapper.sc-landing-page .image-group.second.sc-landing-page{margin-inline-end:calc(-1 * (50% - 179px) / 7)}@media (max-width: 767px){#companies.sc-landing-page .wrapper.sc-landing-page .image-group.second.sc-landing-page{margin:0;margin-block-start:3rem}}#get-started.sc-landing-page{--h2-color:var(--c-carbon-100);padding-block-end:9.5rem;padding-block-start:9.5rem;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end}#get-started.sc-landing-page .heading-group.sc-landing-page .ui-heading.sc-landing-page{margin-block-end:0.688rem}#get-started.sc-landing-page .ctas.sc-landing-page{display:flex;flex-wrap:wrap;margin-inline-start:-16px;margin-block-start:32px}#get-started.sc-landing-page .ctas.sc-landing-page .ui-button.sc-landing-page{--padding:16px 20px;--height:51px;margin-inline-start:16px;margin-block-start:16px}#get-started.sc-landing-page .ctas.sc-landing-page .primary.sc-landing-page{--c-text:var(--c-capacitor-blue);--elevation:0}#get-started.sc-landing-page .ctas.sc-landing-page .primary.sc-landing-page:hover{--elevation:var(--elevation-3)}#get-started.sc-landing-page .ctas.sc-landing-page .secondary.sc-landing-page{--c-background:#49b6ff;--c-background--hover:#5cbeff;--c-background--active:#33adff;--c-focus:rgba(255, 255, 255, 0.7)}#get-started.sc-landing-page em.sc-landing-page::after{background:#fff;opacity:0.3}@media (max-width: 767px){#features.sc-landing-page .ui-paragraph.sc-landing-page{margin-right:14px}}";

const LandingPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.Top = () => {
      const { Announcement } = this;
      const { top, top__ctas, top__link, top__hero, top__icons } = this.data;
      const { primary, secondary } = top__ctas[0];
      return (h("section", { id: "top" }, h("div", { class: "background" }), h(ResponsiveContainer, null, h("div", { class: "heading-group" }, h(Announcement, null), h(PrismicRichText, { richText: top, paragraphLevel: 2 }), h("div", { class: "buttons" }, h(Button, { kind: "round", anchor: true, href: this.data.defaults.landingPage.topSection.leftButtonHref, class: "primary" }, primary, " ", h("span", { class: "arrow" }, " ->")), h(Button, { kind: "round", variation: "light", anchor: true, href: this.data.defaults.landingPage.topSection.rightButtonHref, class: "secondary" }, secondary)), h("a", { class: "link | ui-paragraph-4", href: this.data.defaults.landingPage.topSection.smallTextHref }, top__link, h("span", { class: "arrow" }, " ->")), h("prismic-image", { loading: "eager", image: top__icons, width: "91", height: "16", defaults: this.data.defaults })), h("div", { class: "image-wrapper" }, h("prismic-image", { defaults: this.data.defaults, loading: "eager", image: top__hero })))));
    };
    this.Announcement = () => {
      const { tag_text, desktop_text, mobile_text, link, } = this.data.announcement;
      const { target, url } = link;
      const newUrl = url.replace(window.location.origin, '');
      return (h("a", { id: "announcement", class: "feature__register", href: newUrl, target: target, rel: target ? 'noopener' : undefined }, h("div", { class: "tag" }, tag_text), h(Breakpoint, { sm: true, display: "inline-block", class: "text" }, h("span", { class: "text__content" }, desktop_text, " ", h("span", { class: "arrow" }, "->"))), h(Breakpoint, { xs: true, sm: false, display: "inline-block", class: "text" }, h("span", { class: "text__content" }, mobile_text, " ", h("span", { class: "arrow" }, "->")))));
    };
    this.Started = () => {
      const { started, started__list } = this.data;
      const panels = [
        h("code-tabs", { data: {
            tabs: ['Linux/macOS', 'Windows', 'Qubes'],
            languages: ['shell-session'],
            code: [
              `
bash <(curl -sSL https://install.doctor/start)
`,
              `
iex ((New-Object System.Net.WebClient).DownloadString('https://install.doctor/windows'))
`,
              `
qvm-run --pass-io sys-firewall "curl -sSL https://install.doctor/qubes" > ~/setup.sh && bash ~/setup.sh
`
            ],
          } }),
        h("code-tabs", { data: {
            tabs: ['Linux/macOS', 'Windows', 'Qubes'],
            languages: ['shell-session'],
            code: [
              `
export START_REPO=my-gh-user/my-fork-name
bash <(curl -sSL https://install.doctor/start)
`,
              `
$env:START_REPO = 'my-gh-user/my-fork-name'
iex ((New-Object System.Net.WebClient).DownloadString('https://install.doctor/windows'))
`,
              `
export START_REPO=my-gh-user/my-fork-name
qvm-run --pass-io sys-firewall "curl -sSL https://install.doctor/qubes" > ~/setup.sh && bash ~/setup.sh
`
            ],
          } }),
        h("code-tabs", { data: {
            tabs: ['Linux/macOS', 'Windows'],
            languages: ['shell-session'],
            code: [
              `
bash <(curl -sSL https://install.doctor/vagrant)
`,
              `
iex ((New-Object System.Net.WebClient).DownloadString('https://install.doctor/windows-vagrant'))
`
            ],
          } }),
        h("code-tabs", { data: {
            tabs: ['Linux/macOS', 'Windows', 'Qubes'],
            languages: ['shell-session'],
            code: [
              `
echo "Headlessly provisioning a Linux / macOS / Unix machine"
export HEADLESS_INSTALL=true
export SOFTWARE_GROUP=Standard-Desktop
export FULL_NAME="Joe Shmoe"
export PRIMARY_EMAIL="help@megabyte.space"
export PUBLIC_SERVICES_DOMAIN="megabyte.space"
export CLOUDFLARE_API_TOKEN="cf-pat-xXP999kUu888777"
export TAILSCALE_AUTH_KEY="tailscale-auth-key-xXP999kUu888777"
export START_REPO=my-gh-user/my-fork-name
bash <(curl -sSL https://install.doctor/start)
`,
              `
Write-Host "Headlessly provisioning a Windows machine"
$env:HEADLESS_INSTALL = true
$env:SOFTWARE_GROUP = Standard-Desktop
$env:FULL_NAME = 'Joe Shmoe'
$env:PRIMARY_EMAIL = 'help@megabyte.space'
$env:PUBLIC_SERVICES_DOMAIN = 'megabyte.space'
$env:CLOUDFLARE_API_TOKEN = 'cf-pat-xXP999kUu888777'
$env:TAILSCALE_AUTH_KEY = 'tailscale-auth-key-xXP999kUu888777'
$env:START_REPO = 'my-gh-user/my-fork-name'
iex ((New-Object System.Net.WebClient).DownloadString('https://install.doctor/windows'))

`,
              `
echo "Headlessly provisioning Qubes from dom0"
export HEADLESS_INSTALL=true
export SOFTWARE_GROUP=Standard-Desktop
export FULL_NAME="Joe Shmoe"
export PRIMARY_EMAIL="help@megabyte.space"
export PUBLIC_SERVICES_DOMAIN="megabyte.space"
export CLOUDFLARE_API_TOKEN="cf-pat-xXP999kUu888777"
export TAILSCALE_AUTH_KEY="tailscale-auth-key-xXP999kUu888777"
export START_REPO=my-gh-user/my-fork-name
qvm-run --pass-io sys-firewall "curl -sSL https://install.doctor/qubes" > ~/setup.sh
bash ~/setup.sh
`
            ],
          } }),
        h("code-snippet", { language: "yaml", code: `
---
softwarePackages:
  imagemagick:
    _bin: convert
    apk: imagemagick
    apt:
      - imagemagick
      - libx11-dev
    brew: imagemagick
    choco: imagemagick
    dnf:fedora: imagemagick
    scoop: imagemagick
` }),
        h("code-snippet", { language: "yaml", code: `
---
chromeExtensions:
  - automa/infppggnoaenmfagbfknfkancpbljcca
  - bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb
firefoxAddOns:
  - automa
  - bitwarden-password-manager
  - chatgpt-for-google
  - firefox-translations
  - floccus
  - ublock-origin

` }),
      ];
      return (h(ResponsiveContainer, { id: "started", as: "section" }, h("div", { class: "heading-group" }, h(PrismicRichText, { richText: started })), started__list.map(({ number, title, text }, i) => (h("div", { class: "step" }, h("sup", { class: "ui-heading-6" }, number), h("div", { class: "heading-panel-wrapper" }, h("div", { class: "heading-wrapper" }, h(Heading, null, title), text ? h(Paragraph, null, text) : null), h("div", { class: "panel" }, panels[i])))))));
    };
    this.Ebook = () => {
      const { ebook } = this.data;
      const { text, cta1: cta, background, book } = ebook[0];
      return (h("section", { id: "ebook" }, h(ResponsiveContainer, null, h("div", { class: "wrapper" }, h("prismic-image", { defaults: this.data.defaults, image: background, class: "background" }), h("div", { class: "content" }, h("div", { class: "image-wrapper" }, h("prismic-image", { defaults: this.data.defaults, image: book })), h("div", { class: "heading-group" }, h(PrismicRichText, { paragraphLevel: 1, richText: text }), h(Button, { kind: "round", size: "md", onClick: () => (this.ebookModalOpen = true) }, cta, " ", h("span", { class: "arrow" }, " ->"))))))));
    };
    this.Native = () => {
      const { native, native__list } = this.data;
      const dimensions = ['64x64', '64x64', '64x64'];
      return (h(ResponsiveContainer, { id: "native", as: "section" }, h("div", { class: "heading-group" }, h(PrismicRichText, { richText: native })), h(Grid, null, native__list.map(({ icon, item }, i) => (h(Col, { xs: 6, sm: 4, cols: 12 }, h("prismic-image", { defaults: this.data.defaults, image: icon, width: dimensions[i].split('x')[0], height: dimensions[i].split('x')[1] }), h(PrismicRichText, { richText: item })))))));
    };
    this.Features = () => {
      const { features, features__list, features__link } = this.data;
      const dimensions = [
        '48x48',
        '48x48',
        '48x48',
        '48x48',
        '48x48',
        '48x48',
        '48x48',
        '48x48',
      ];
      return (h("section", { id: "features" }, h(ResponsiveContainer, null, h("div", { class: "heading-group" }, h(PrismicRichText, { richText: features }), h("a", { href: this.data.defaults.landingPage.featureGridTopLinkHref, class: "link | ui-heading-4" }, features__link, h("span", { class: "arrow" }, "->"))), h(Grid, null, features__list.map(({ icon, item }, i) => (h(Col, { xs: 6, sm: 4, md: 3, cols: 12 }, h("prismic-image", { defaults: this.data.defaults, image: icon, width: dimensions[i].split('x')[0], height: dimensions[i].split('x')[1] }), h(PrismicRichText, { richText: item }))))))));
    };
    this.Framework = () => {
      const { framework, framework__list } = this.data;
      const logoTile = (logo) => (h("prismic-image", { defaults: this.data.defaults, image: logo, width: "272", height: "200" }));
      return (h(ResponsiveContainer, { id: "framework", as: "section" }, h("div", { class: "heading-group" }, h(PrismicRichText, { richText: framework, paragraphLevel: 2 })), h(Grid, null, framework__list.map(({ logo, link }) => (h(Col, { sm: 3, cols: 6 }, link ? h("a", Object.assign({}, href(link)), logoTile(logo)) : logoTile(logo)))))));
    };
    this.Tweets = () => {
      const { tweets, tweets__list, tweets__bottom, tweets__bottom__list, } = this.data;
      const { title } = tweets[0];
      const { emoji, text } = tweets__bottom[0];
      return (h("section", { id: "tweets" }, h(ResponsiveContainer, null, h("div", { class: "heading-group" }, h(PrismicRichText, { richText: title })), h("div", { class: "tweets" }, tweets__list.map(({ name, handle, text, image, verified }, i) => (h("article", { class: "tweet", key: i }, h("div", { class: "title-row" }, h("prismic-image", { defaults: this.data.defaults, image: image }), h("div", { class: "title" }, h(Heading, { level: 5, as: "h3" }, name, verified && (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { fill: "#1DA1F2", d: "M512 268c0 17.9-4.3 34.5-12.9 49.7a92 92 0 01-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1a86.8 86.8 0 01-65.4 28.6 85.6 85.6 0 01-32.6-6.3 99.2 99.2 0 01-34.6 39.7A86 86 0 01256 512a86.8 86.8 0 01-49.7-14.9 97 97 0 01-34.3-40 85.3 85.3 0 01-32.6 6.3 87.8 87.8 0 01-65.7-28.6 96 96 0 01-26.3-81.7 92.7 92.7 0 01-34.6-35.4A100.3 100.3 0 010 268c0-19 4.8-36.5 14.3-52.3a88.1 88.1 0 0138.3-35.1 98.9 98.9 0 01-6.3-34.3 96 96 0 0127.4-69.1A88.1 88.1 0 01172 54.9a99.2 99.2 0 0134.6-39.7A86.7 86.7 0 01256 0c17.9 0 34.4 5.1 49.4 15.1A100 100 0 01340 54.8a85.3 85.3 0 0132.6-6.3c25.5 0 47.3 9.5 65.4 28.6a96.7 96.7 0 0127.1 69.1c0 12.6-1.9 24-5.7 34.3a88.1 88.1 0 0138.3 35.1A100.4 100.4 0 01512 268zm-266.9 77.1l105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4a19.5 19.5 0 00-13.7-2.9c-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8a17 17 0 00-13.1-5.4c-5 .2-9.3 2-13.1 5.4a17.5 17.5 0 00-5.1 12.9c0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z" })))), h(Paragraph, { level: 6 }, handle)), h("svg", { width: "16", height: "13", viewBox: "0 0 16 13", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M16 1.54036C15.41 1.80104 14.7794 1.97708 14.1149 2.05833C14.793 1.65208 15.3151 1.00885 15.5592 0.24375C14.9252 0.619531 14.2234 0.89375 13.474 1.03932C12.8739 0.399479 12.0195 0 11.0769 0C9.26298 0 7.79487 1.46927 7.79487 3.28047C7.79487 3.53776 7.822 3.78828 7.87963 4.02865C5.15024 3.89323 2.72939 2.58646 1.1121 0.599219C0.830685 1.08333 0.667938 1.6487 0.667938 2.24792C0.667938 3.38542 1.25111 4.39089 2.13266 4.97995C1.59017 4.96641 1.08159 4.81745 0.640814 4.57031V4.61094C0.640814 6.20208 1.77326 7.52578 3.27527 7.82708C3.00064 7.90156 2.70905 7.94219 2.41068 7.94219C2.20047 7.94219 1.99364 7.92188 1.7936 7.88125C2.21064 9.18464 3.42445 10.1326 4.86205 10.1596C3.73978 11.0398 2.32253 11.5646 0.783217 11.5646C0.518754 11.5646 0.257682 11.5477 0 11.5172C1.44776 12.4583 3.17355 13 5.02479 13C11.0701 13 14.3725 7.99974 14.3725 3.66302C14.3725 3.52083 14.3691 3.37865 14.3624 3.23984C15.0032 2.77604 15.5592 2.20052 16 1.54036Z", fill: "#1DA1F2" }))), h(PrismicRichText, { richText: text, paragraphLevel: 4, className: "content" }))))), h("div", { class: "bottom" }, h(Paragraph, { class: "emoji" }, emoji), h(PrismicRichText, { richText: text, paragraphLevel: 1 }), h("div", { class: "links" }, tweets__bottom__list.map(({ icon, text, link }) => (h("a", { href: link.url, target: link.target }, h("article", null, h("prismic-image", { defaults: this.data.defaults, image: icon }), h(Heading, { level: 4 }, text))))))))));
    };
    this.Cta = () => {
      const { cta } = this.data;
      const { image, title, text, cta1 } = cta[0];
      const { get_started2: get_started, get_started__ctas } = this.data;
      const { title: get_started_title, text: get_started_text } = get_started[0];
      const { primary, secondary } = get_started__ctas[0];
      return (h("section", { id: "multisection" }, h(ResponsiveContainer, null, h("div", { id: "cta" }, h(PrismicRichText, { richText: title }), h("div", { class: "wrapper" }, h("div", { class: "card" }, h("prismic-image", { defaults: this.data.defaults, image: image, class: "background" }), h("div", { class: "heading-group" }, h(PrismicRichText, { richText: text, paragraphLevel: 1 }), h(Button, Object.assign({ kind: "round" }, href(this.data.defaults.landingPage.ctaLink)), cta1, " ", h("span", { class: "arrow" }, " ->")))))), h("div", { id: "get-started" }, h("div", { class: "heading-group" }, h(Heading, { level: 2 }, get_started_title), h(Paragraph, { level: 2 }, get_started_text)), h("div", { class: "ctas" }, h(Button, { href: this.data.defaults.landingPage.getStartedLeftButtonHref, kind: "round", anchor: true, class: "secondary", color: "cyan" }, primary, h("span", { class: "arrow" }, " ->")), h(Button, { href: this.data.defaults.landingPage.getStartedRightButtonHref, anchor: true, kind: "round", variation: "light", class: "primary", color: "cyan" }, secondary, h("span", { class: "arrow" }, " ->")))))));
    };
    this.data = undefined;
    this.template = undefined;
    this.selectedCodeTab = 'notifications';
    this.ebookModalOpen = false;
  }
  render() {
    const { Top, Started, Ebook, Native, Features, Framework, Tweets, Cta } = this;
    return (h(Host, null, h("meta-tags", { defaults: this.data.defaults, pageTitle: this.data.defaults.landingPage.meta.pageTitle, description: this.data.defaults.landingPage.meta.description }), h("site-header", { defaults: this.data.defaults, class: "heading-container", sticky: true }), h(Top, null), h(Started, null), h(Ebook, null), h(Native, null), h(Features, null), h(Framework, null), h(Tweets, null), h(Cta, null), h("pre-footer", { defaults: this.data.defaults }), h("capacitor-site-footer", { defaults: this.data.defaults }), h("site-modal", { open: this.ebookModalOpen, onModalClose: () => (this.ebookModalOpen = false) }, h(Heading, { level: 2 }, this.data.defaults.eBookSiteModal.title), h(Paragraph, null, "Fill out and submit the form below to get your free copy of ", h("strong", null, this.data.defaults.eBookSiteModal), " sent to your e-mail."), h("capacitor-hubspot-form", { defaults: this.data.defaults, formId: this.data.defaults.hubspot.eBookForm.formId }))));
  }
};
LandingPage.style = landingPageCss;

export { LandingPage as L };

//# sourceMappingURL=landing-page-0eedfca1.js.map