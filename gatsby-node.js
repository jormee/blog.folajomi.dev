const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('src/templates/blogPost.js')
  const blogPost = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  blogPost.data.allContentfulBlogPost.edges.map(({ node }) => {
    createPage({
      component: blogPostTemplate,
      path: `/posts/${node.slug}`,
      context: {
        slug: node.slug
      }
    })
  })
}