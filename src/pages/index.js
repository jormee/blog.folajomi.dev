import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import '../styles/index.scss'

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
          slug
          title
          published(formatString: "Do MMM, YYYY")
          childContentfulBlogPostPostBodyTextNode {
            childMarkdownRemark {
              excerpt
              timeToRead
            }
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <h1 className="page-header">Folajomi's Web Dev Blog</h1>
      <StaticImage 
        src='../images/hero.jpg'
        alt="page image, scrabble tiles spelling out 'Read More'"
        placeholder="blurred"
        layout="fixed"
        width={600}
        className="page-image"
      />
      <p className="page-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere suscipit dui, eu luctus justo consectetur sed. Fusce in est pharetra, elementum augue eu, cursus ex. In quis sem ipsum. Integer a aliquet nibh. Maecenas elementum, nibh non iaculis porttitor, eros massa bibendum dolor, sit amet   cursus augue eros interdum nisi.
      </p>
      <div className="blog-posts">
        <ul className="posts">
          {
            data.allContentfulBlogPost.edges.map(({ node }) => 
              <li className="post" key={node.contentful_id}>
                <Link to={`/posts/${node.slug}`}><h3 className="post-title">{node.title}</h3></Link>

                <p className="post-details">
                  {`${node.published} • ${node.childContentfulBlogPostPostBodyTextNode.childMarkdownRemark.timeToRead}min read`}
                </p>

                <p className="excerpt">{node.childContentfulBlogPostPostBodyTextNode.childMarkdownRemark.excerpt}</p>
                <hr />
              </li>
            )
          }
        </ul>
      </div>
    </Layout>
  )
}

export default Blog
