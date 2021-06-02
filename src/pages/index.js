import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const blogPosts = graphql`
  query {
    allContentfulBlogPost (
      sort: {
        fields:published,
        order:DESC
      }) {
        edges {
          node {
            contentful_id
            title
            slug
            published(fromNow: true)
            excerpt
          }
        }
      }
  }
`

const Blog = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Folajomi's Web Dev Blog</h1>
      <p>Welcome to your new Gatsby site.</p>
      <div className="blogposts">
        <ul className="posts">
          {
            data.allContentfulBlogPost.edges.map(({ node }) => 
              <li className="post" key={node.contentful_id}>
                <Link to={`/posts/${node.slug}`}><h3>{node.title}</h3></Link>
                <p className="excerpt">{node.excerpt}</p>
                <p className="published">{node.published}</p>
              </li>
            )
          }
        </ul>
      </div>
    </Layout>
  )
}

export default Blog
