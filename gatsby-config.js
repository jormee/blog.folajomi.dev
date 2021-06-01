require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {

  flags: {
    THE_FLAG: false
  },
  
  siteMetadata: {
    title: `Fola's Blog`,
    description: `This is a space where I document my Web Dev learning journey and talk about things I found amusing in the tech space`,
    author: `Folajomi Shotunde`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.GATSBY_CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Folajomi Shotunde's Web Dev Blog`,
        short_name: `Fola's Blog`,
        start_url: `/`,
        background_color: `#00D7B8`,
        theme_color: `#00D7B8`,
        display: `standalone`,
        icon: `src/images/emblem.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
