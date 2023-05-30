import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import nodePolyfills from 'rollup-plugin-node-polyfills'
import resolvePlugin from 'rollup-plugin-node-resolve'

export const config: Config = {
  devServer: {
    openBrowser: false,
    // logRequests: true,
  },
  globalStyle: './src/global/style.scss',
  namespace: 'site',
  outputTargets: [
    {
      type: 'www',
      prerenderConfig: './prerender.config.ts',
      baseUrl: 'https://install.doctor/',
      serviceWorker: {
        swSrc: 'src/sw.js',
        globPatterns: [
          '*.{png,xml,ico,json,svg,html}',
          'host.config.json',
          'page.state.json',
          '*/**/*.json',
          '*/**/*.{js,css,json,html,webp,woff2}',
          '**/build/svg/{logo-github,close,logo-gitlab,logo-slack,logo-discord,logo-facebook,logo-twitter,logo-linkedin,information-circle-outline,link,mail,navigate,checkmark-circle}.svg'
        ]
      },
      copy: [
        /*{
          src: '../docs/build',
          dest: 'docs'
        },*/
        {
          src: './android-chrome-192x192.png',
          dest: 'android-chrome-192x192.png'
        },
        {
          src: './android-chrome-512x512.png',
          dest: 'android-chrome-512x512.png'
        },
        {
          src: './apple-touch-icon.png',
          dest: 'apple-touch-icon.png'
        },
        {
          src: './browserconfig.xml',
          dest: 'browserconfig.xml'
        },
        {
          src: './favicon-16x16.png',
          dest: 'favicon-16x16.png'
        },
        {
          src: './favicon-32x32.png',
          dest: 'favicon-32x32.png'
        },
        {
          src: './favicon.ico',
          dest: 'favicon.ico'
        },
        {
          src: './mstile-150x150.png',
          dest: 'mstile-150x150.png'
        },
        {
          src: './safari-pinned-tab.svg',
          dest: 'safari-pinned-tab.svg'
        },
        {
          src: './sitemap_index.xml',
          dest: 'sitemap_index.xml'
        },
        {
          src: './robots.txt',
          dest: 'robots.txt'
        },
        {
          src: './ads.txt',
          dest: 'ads.txt'
        },
        {
          src: './humans.txt',
          dest: 'humans.txt'
        },
        {
          src: './site-noscript.css',
          dest: 'site-noscript.css'
        }
      ],
    },
  ],
  plugins: [
    sass({
      includePaths: ['ds'],
    })
  ],
  rollupPlugins: {
    before: [
      resolvePlugin()
    ],
    after: [
      nodePolyfills(),
    ]
  }
};
