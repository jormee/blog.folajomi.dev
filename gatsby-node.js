const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('src/templates/blogPost.js')
  const tagsPageTemplate = path.resolve('src/templates/tagsPageTemplate.js')
  const blogPost = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
            tags
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

  // add tags from each blog post to the tagsList array.
  const tags = Array.from(new Set(blogPost.data.allContentfulBlogPost.edges.map(({ node }) => node.tags).flat()))

  tags.map(tag => {
    createPage({
      component: tagsPageTemplate,
      path: `/tags/${tag}`,
      context: {tag}
    })
  })
}
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const postListTemplate = path.resolve('src/templates/postList.js')

//   const tags = await graphql(`
//     query {
//       allContentful
//     }
//   `)
// }