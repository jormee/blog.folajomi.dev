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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere suscipit dui, eu luctus justo consectetur sed. Fusce in est pharetra, elementum augue eu, cursus ex. In quis sem ipsum. Integer a aliquet nibh. Maecenas elementum, nibh non iaculis porttitor, eros massa bibendum dolor, sit amet   cursus augue eros interdum nisi.
      </p>
      <div className="blogposts">
        <ul className="posts">
          {
            data.allContentfulBlogPost.edges.map(({ node }) => 
              <li className="post" key={node.contentful_id}>
                <Link to={`/posts/${node.slug}`}><h3>{node.title}</h3></Link>
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
