const path = require('path');

module.exports = {
  title: 'Redis Developer Hub',
  tagline: 'The Home of Redis Developers',
  url: 'https://ddecrulle.github.io/',
  baseUrl: '/onboarding-kub/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'ddecrulle', // Usually your GitHub org/user name.
  projectName: 'onboarding-kub', // Usually your repo name.

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  themeConfig: {
    prism: {
      additionalLanguages: [
        'csharp',
        'php',
        'ruby',
        'java',
        'rust',
        'elixir',
        'groovy',
      ],
    },

    navbar: {
      style: 'dark',
      title: null,
      logo: {
        alt: 'Redis Developer Hub logo',
        src: 'img/logo-1.png',
      },
      hideOnScroll: true,
      items: [
        {
          to: '/get-started',
          activeBasePath: 'docs',
          label: 'Get started',
          position: 'right',
        },
        {
          href: 'https://github.com/ddecrulle/onboarding-kub',
          label: 'Github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Redis logo',
        src: 'img/redis_logo_red_white_rgb.svg',
        href: 'https://redis.com/',
      },
      links: [
        {
          title: 'Get Started',
          items: [
            {
              label: 'Create Pods',
              to: '/get-started',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Community',
              href: 'https://community.url',
            },
            {
              label: 'Cluster dev',
              href: 'https://cluster.url',
            },
          ],
        },
      ],
      copyright: `Licence MIT: © ${new Date().getFullYear()} OnBoarding Kub`,
    },
    colorMode: {
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
    },
    // announcementBar: {
    //   id: 'redisconf20201cfp', // Any value that will identify this message.
    //   content:
    //     '<p class="text"> RedisDays Available Now On-Demand. </p> <a href="https://redis.com/redisdays/" target="_blank" rel="noopener" class="btn">Learn More</a>',
    //   //  content: '<p class="text"></p> <a href="https://redislabs.com/redisconf/" target="_blank" rel="noopener" class="btn"></a>',
    //   backgroundColor: '#fff', // Defaults to `#fff`.
    //   textColor: '#000', // Defaults to `#000`.
    //   isCloseable: true, // Defaults to `true`.
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/redis-developer/redis-developer/edit/master/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          remarkPlugins: [],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/lp/**'],
          filename: 'sitemap.xml',
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
};
