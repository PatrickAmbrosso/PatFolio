// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The PatFolio',
  tagline: 'A personal portfolio, technical documentation, blog and much more from Patrick Ambrose built with Docusaurus.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // url: 'https://your-docusaurus-test-site.com',
  url: 'https://patrickambrose.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PatrickAmbrosso', // Usually your GitHub org/user name.
  projectName: 'PatFolio', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'ignore',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Patrick Ambrose',
        logo: {
          alt: 'Patrick Ambrose Brand',
          src: 'img/PatLogo Model-1.svg',
        },
        items: [
          {
            to: '/docs/001 Get Started/Welcome',
            position: 'left',
            label: 'Digital Garden',
          },
          {
            to: '/blog',
            label: 'Blogs',
            position: 'left'
          },
          {
            to: '/Certifications',
            label: 'Certifications',
            position: 'left'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Socials',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/PatrickAmbrosso',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/patrickambrosso/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/PatrickAmbrosso',
              },
            ],
          },
          {
            title: 'Content',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub Repo (Open Source)',
                href: 'https://github.com/PatrickAmbrosso/PatFolio',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Patrick Ambrose | Built using Docusaurus, a lot of StackOverflow and a ton of ❤️`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
