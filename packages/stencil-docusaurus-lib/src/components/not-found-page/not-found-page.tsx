import { Component, Host, h, Prop } from '@stencil/core';
import { ResponsiveContainer, Heading, Paragraph } from 'ionic-ds-no-fonts';
import { href } from '@stencil/router';

@Component({
  tag: 'not-found-page',
  styleUrl: 'not-found-page.scss',
  scoped: true,
})
export class NotFoundPage {
  @Prop() defaults: any;

  render() {
    const { NotFound } = this;

    return (
      <Host>
        <meta-tags
          defaults={this.defaults}
          pageTitle="Not Found: 404 Error"
          description={
            'This is a link to a page that does not exist. You should still visit this page to see how awesome our 404 page is though.'
          }
        />
        <site-header defaults={this.defaults} class="heading-container" sticky={true} />
        <NotFound />
        <pre-footer defaults={this.defaults} />
        <capacitor-site-footer defaults={this.defaults} />
      </Host>
    );
  }

  NotFound = () => (
    <ResponsiveContainer id="not-found" as="section">
      <Heading class="top-text" level={1}>
        404: Not Found
      </Heading>
      <Paragraph class="top-text">
        Houston, we have a problem! This URL does not link to an existing page. You might want to start with the{' '}
        <a {...href('/')}>home page</a> or go to the <a href="/docs">documentation portal</a> welcome page.
      </Paragraph>
      <webp-image alt="404 not found graphic" src="/assets/img/404.png" loading="eager"></webp-image>
    </ResponsiveContainer>
  );
}
