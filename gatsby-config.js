require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {

  siteMetadata: {
    title: `Fola's Blog`,
    description: `This is a space where I document my Web Dev learning journey and talk about things I found amusing in the tech space`,
    author: `Folajomi Shotunde`,
    siteUrl: process.env.URL,
    socials: {
      twitter: `https://twitter.com/folajomi__`,
      linkedIn: `https://linkedin.com/in/folajomi-shotunde`,
      github: `https://github.com/jormee`,
      gitlab: `https://gitlab.com/jormee`,
      website: `https://folajomi.dev`,
    }
  },

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },

    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /icons/
        }
      }
    },
    
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

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // inserts 'language' before the class name for the pre tag
              classPrefix: `language-`,
              inlineCodeMarker: null,
              aliases: {},
              // show line numbers in the code snippets
              showLineNumbers: true,
              // customise shell prompt
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false
              },
              escapeEntities: {},
            }
          }
        ]
      }
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              nodes {
                path
              }
            }
          }
        `
      }
    },

    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
