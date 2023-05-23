// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "NGOD",
  customFields: {
    description: `Learn and understand how to make high quality software
      to create faster with artificial intelligence.`,
  },
  tagline: "Welcome to the New Generation Of Developers.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "joaquinmetayer", // Usually your GitHub org/user name.
  projectName: "NGOD", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: "https://github.com/joaquinmetayer/NGOD/tree/master/",
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/gear.png",
      navbar: {
        title: "NGOD",
        logo: {
          alt: "NGOD",
          src: "img/gear.png",
        },
        items: [
          //{
          //  type: "docSidebar",
          //  sidebarId: "tutorialSidebar",
          //  position: "left",
          //  label: "Tutorial",
          //},
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: "https://github.com/joaquinmetayer/NGOD",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          //    {
          //      title: "Project",
          //      items: [
          //        {
          //          label: "How to collab",
          //          to: "/docs/collab",
          //        },
          //        {
          //          label: "GitHub Repository",
          //          href: "https://github.com/joaquinmetayer/NGOD",
          //        },
          //        {
          //          label: "GitHub Project",
          //          href: "https://github.com/users/joaquinmetayer/projects/3",
          //        },
          //      ],
          //    },
          //    {
          //      title: "Joaquin",
          //      items: [
          //        {
          //          label: "Website",
          //          href: "https://joaquinmetayer.com",
          //        },
          //        {
          //          label: "YouTube",
          //          href: "https://www.youtube.com/@joaquinmetayer",
          //        },
          //        {
          //          label: "LinkedIn",
          //          href: "https://www.linkedin.com/in/joaquinmetayer/",
          //        },
          //      ],
          //   },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NGOD. With ❤️ by the community and <a href="https://joaquinmetayer.com/" target="_blank">Joaquin Metayer</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
