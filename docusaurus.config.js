// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import remarkDefList from 'remark-deflist';



// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Osama Ata',
  tagline: 'Contracts Management Consultant',
  //landingPageTitle: 'Driving Contracts and Claims Success',
  favicon: 'favicons/favicon.ico',

  // Set the production url of your site here
  url: 'https://osamata.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  noIndex: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],


  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".




  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          remarkPlugins: [
            remarkDefList,
          ],
          sidebarPath: './sidebars.js',
        },
        blog: {
          remarkPlugins: [
            remarkDefList,
          ],
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Osama Ata`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
          blogTitle: 'Construction Contracts',
          blogDescription: 'A blog where we discuss construction contracts and claims',
          blogSidebarCount: 5,
          blogSidebarTitle: 'All our posts',
          routeBasePath: 'blog',
          postsPerPage: 10,
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        pages: {
          path: './src/pages',
          remarkPlugins: [
            remarkDefList,
          ],
          rehypePlugins: [],
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: ['**/_*.{js,jsx,ts,tsx,md,mdx}'],
          mdxPageComponent: '@theme/MDXPage',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [],



  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: 'OA',
        // logo: {alt: 'OSAMA ATA Logo', src: 'img/diamond-logo.svg'},
        logo: { alt: 'OSAMA ATA Logo', src: 'img/Home.svg' },

        hideOnScroll: false,

        items: [
          { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Learn' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/about', label: 'About', position: 'left' },
          // {type: 'localeDropdown'},
          // {href: 'https://www.linkedin.com/in/osamata/', label: 'LinkedIn', position: 'right'},
        ],
      },
      footer: {
        //style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              { label: 'Explanations', to: '/docs/category/explanations' },
              { label: 'Tutorials', to: '/docs/category/tutorials' },
              { label: 'How-to Guides', to: '/docs/category/how-to-guides' },
              { label: 'References', to: '/docs/category/references' },
            ],
          },
          {
            title: 'Connect',
            items: [
              { label: 'Jus Connect', href: 'https://jusconnect.com/en/p/osama-ata' },
              { label: 'CIArb Profile', href: 'https://www.ciarb.org/member-directory/profile/?id=f2c4f170-ad4c-ea11-a812-000d3a86ad30' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/osamata' },
              { label: 'Github', href: 'https://github.com/osama-ata' },
            ],
          },
          {
            title: 'Services',
            items: [
              { label: 'Coming soon', to: '#' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Blog', to: '/blog' },
              { label: 'Authors', to: '/blog/authors' },
              { label: 'CV', to: '/cv' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Osama Ata.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      metadata: [
        { name: 'keywords', content: 'Contracts, Legal, Construction, Saudi Arabia' },
      ],

      mermaid: {
        // theme: {light: 'base', dark: 'dark'},
        options: {
          //maxTextSize: 200,
        },
      },

      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },

      blog: {
        sidebar: {
          groupByYear: false,
        },
      },

    }),

  scripts: [
    '/jsonld.js', // ✅ This will load the script from the static folder
  ],


}

export default config;
