module.exports = {
  siteMetadata: {
    basePath: ``,
    path: `${__dirname}/src/`,
    imagesPath: `${__dirname}/src/images/`,
    siteName: `Tien Pham`,
    title: `Tien Pham Portfolio`,
    description: `My personal portfolio`,
    author: `Tien Pham`,
    title: `Welcome`,
    email: `tien.phamminh95@gmail.com`,
    siteKeywords: ``,
    siteDescription: ``,
    social: {
      // Usernames
      twitter: `phamik95`,
      gitHub: `phamik`,
      stackOverflow: `13788016/tien-pham`,
      linkedIn: `in/tien-pham-minh`,
      resumeInPdf: ``, // url or local link
    },
    footer: `heart`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/layout`),
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
