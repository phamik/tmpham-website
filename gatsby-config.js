module.exports = {
  siteMetadata: {
    basePath: ``,
    path: `${__dirname}/src/`,
    imagesPath: `${__dirname}/src/images/`,
    siteUrl: `https://tmpham.com/`,
    siteName: `Tien Pham`,
    title: `Tien Pham Portfolio`,
    description: `My personal portfolio`,
    author: `Tien Pham`,
    email: `tmpham95@gmail.com`,
    siteKeywords: `Web Developer, Front-end Developer, Web Design, React.js`,
    siteDescription: `Welcome to my website! Come and find out more about me!`,
    social: {
      // Usernames
      twitter: `phamik95`,
      gitHub: `phamik`,
      stackOverflow: `13788016/tien-pham`,
      linkedIn: `in/tien-pham-minh`,
      resumeInPdf: `/TienPham-CV-2021.pdf`, // url or local link
    },
    footer: `${__dirname}/src/images/logo/logo-black-back.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tien Pham Portfolio`,
        short_name: `tmpham`,
        start_url: `/`,
        background_color: `#282B2F`,
        theme_color: `#282B2F`,
        display: `minimal-ui`,
        icon: `src/images/logo/logo-grey-back.png`, // This path is relative to the root of the site.
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`${__dirname}/src/pages/*`],
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
  ],
}
