module.exports = {
  siteMetadata: {
    title: `Melody CLI`,
    description: `一个强大的、便捷的命令行集成管理工具，支持插拔式的命令工具集成，拥有完善的文档，支持自定义套件开发与集成。`,
    author: `@melody-core`,
    siteUrl: `https://www.npmjs.com/package/@melody-core/melody-cli`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        "excerpt_separator": `<!-- more -->` // 设置摘要分隔符
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663300`,
        theme_color: `#663300`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
