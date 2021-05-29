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
            title
            slug
            published
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
        <ul classname="posts">
          {
            data.allContentfulBlogPost.edges.map(({ node }) => 
              <li className="post">
                <Link to={`/posts/${node.slug}`}>{node.title}</Link>
              </li>)
          }
        </ul>
      </div>
    </Layout>
  )
}

export default Blog
