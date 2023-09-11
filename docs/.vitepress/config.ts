import { defineConfig } from 'vitepress';
import fieldTypesSidebar from '../field-types/typedoc-sidebar.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'HubSpot - JS Building Blocks',
  description: 'Documentation for HubSpot CMS JS Building Blocks',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'API Reference', link: '/reference/project-structure' },
      { text: 'Appendix', link: '/appendix' },
    ],

    sidebar: {
      '/': [
        {
          text: 'Documentation',
          items: [
            {
              text: 'Getting started',
              link: 'https://github.com/HubSpot/cms-js-building-block-examples/tree/main/hello-world',
            },
            { text: 'API reference', link: '/reference/project-structure' },
            { text: 'Field types', link: '/field-types/' },
            { text: 'Appendix', link: '/appendix' },
          ],
        },
      ],
      '/reference/': {
        base: '/reference/',
        items: [
          {
            text: 'API Reference',
            items: [
              {
                text: 'Project Structure',
                link: 'project-structure',
              },
              { text: 'JS Partials', link: 'js-partials' },
              { text: 'JS Modules', link: 'js-modules' },
              { text: 'Islands', link: 'islands' },
              { text: '@hubspot/cms-components', link: 'cms-components' },
              { text: '@hubspot/cms-dev-server', link: 'cms-dev-server' },
              { text: 'Styling', link: 'styling' },
              { text: 'Static assets', link: 'static-assets' },
              {
                text: 'Third-party dependencies',
                link: 'dependencies',
              },
              { text: 'Prerendering', link: 'prerendering' },
              { text: 'Testing', link: 'testing' },
              { text: 'Data Fetching', link: 'data-fetching' },
            ],
          },
          {
            text: 'Module field types',
            link: '../field-types/',
          },
        ],
      },
      '/field-types/': {
        base: '/field-types/',
        items: fieldTypesSidebar.map((sidebarItem) => {
          // remove nesting in sidebar, at least while it doesn't include
          // anything
          const { items, collapsed, ...rest } = sidebarItem;
          if (items.length === 0) {
            return rest;
          }
          return sidebarItem;
        }),
      },
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/HubSpot/cms-js-building-block-examples/',
      },
    ],
  },
});