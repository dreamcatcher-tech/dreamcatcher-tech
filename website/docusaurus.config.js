const remarkPlugins = [
  require('mdx-mermaid'),
  { mermaid: { theme: { light: 'neutral', dark: 'forest' } } },
]

module.exports = {
  title: 'Dreamcatcher',
  tagline: 'A Packetised Invention Machine',
  url: 'https://dreamcatcher.land',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dreamcatcher-tech', // Usually your GitHub org/user name.
  projectName: 'dreamcatcher-tech', // do not add .github.io else will publish to master
  themeConfig: {
    announcementBar: {
      id: 'announcement_1',
      content: '🚧 DRAFT - UNDER CONSTRUCTION 🚧',
      isCloseable: false,
    },
    navbar: {
      logo: {
        alt: 'Dreamcatcher',
        src: 'img/dreamcatcher.svg',
      },
      items: [
        {
          to: 'builders/',
          activeBasePath: 'builders',
          label: 'Do-ers',
          position: 'left',
        },
        {
          to: 'investors/',
          activeBasePath: 'investors',
          label: 'Funders',
          position: 'left',
        },
        {
          to: 'buyers/',
          activeBasePath: 'buyers',
          label: 'Buyers',
          position: 'left',
        },
        {
          to: 'live/',
          activeBasePath: 'live',
          label: 'Live',
          position: 'left',
        },

        { to: 'blog', label: 'Blog', position: 'right' },
        {
          label: 'Apps',
          to: 'store',
          position: 'right',
        },
        {
          label: 'Benchmarks',
          href: 'https://dreamcatcher-tech.github.io/artifact/dev/bench',
          position: 'right',
        },
        {
          label: 'Contributing',
          to: 'contributing',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'White Papers',
              to: 'docs/',
            },
            {
              label: 'Contributing',
              to: 'contributing/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCysqnESDAhA0NzfbS1GI9YQ/videos',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/ZfTkcgaEmh',
            },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/dreamcatcher-tech',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dreamcatcher.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/',
          remarkPlugins,
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'apps',
        path: 'apps',
        routeBasePath: 'apps',
        sidebarPath: require.resolve('./sidebarsApps.js'),
        editUrl:
          'https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/',
        remarkPlugins,
        sidebarCollapsed: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'license',
        path: 'license',
        routeBasePath: 'license',
        sidebarPath: require.resolve('./sidebarsLicense.js'),
        editUrl:
          'https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/',
        remarkPlugins,
        sidebarCollapsed: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'interblock',
        path: 'interblock',
        routeBasePath: 'interblock',
        sidebarPath: require.resolve('./sidebarsInterblock.js'),
        editUrl:
          'https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/',
        remarkPlugins,
        sidebarCollapsed: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dust',
        path: 'dust',
        routeBasePath: 'dust',
        sidebarPath: require.resolve('./sidebarsDust.js'),
        editUrl:
          'https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/',
        remarkPlugins,
        sidebarCollapsed: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'pool',
        path: 'pool',
        routeBasePath: 'pool',
        sidebarPath: require.resolve('./sidebarsPool.js'),
        editUrl:
          'https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/',
        remarkPlugins,
        sidebarCollapsed: true,
      },
    ],
  ],
}
