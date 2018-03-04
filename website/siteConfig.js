/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/test-site/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Documentation' /* title for your website */,
  tagline: 'How to get started using GulpJS',
  url: 'https://gulpjs.github.io/docs' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'GulpJS Docs',
  customDocsPath: 'converted-docs',
  headerLinks: [
    {doc: 'getting-started', label: 'Get Started'},
    {doc: 'api', label: 'API'},
    {doc: 'faq', label: 'FAQ'},
    {doc: 'cli', label: 'CLI'},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/gulp.svg',
  footerIcon: 'img/gulp.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#CF4647',
    secondaryColor: '#205C3B',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' GulpJS',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'tomorrow-night',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/gulpjs/gulp',
  markdownPlugins: [
    commentOutHeading
  ]
};

module.exports = siteConfig;

/* Utils */
function commentOutHeading(md) {
  var ogHeadingOpen = md.renderer.rules.heading_open;
  var ogHeadingClose = md.renderer.rules.heading_close;

  var waitingForClose = false;

  md.renderer.rules.heading_open = function(tokens, idx /*, options, env */) {
    if (tokens[idx].hLevel === 1 && idx === 0) {
      waitingForClose = true;
      return '<!-- ';
    }
    return ogHeadingOpen.apply(this, arguments);
  };

  md.renderer.rules.heading_close = function(tokens, idx /*, options, env */) {
    if (tokens[idx].hLevel === 1 && waitingForClose) {
      waitingForClose = false;
      return ' -->';
    }
    return ogHeadingClose.apply(this, arguments);
  };
}
