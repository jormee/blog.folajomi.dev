import * as React from "react"
import { Link, graphql } from "gatsby"

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
      <div className="home-page">
        
        <div className="blog-posts">
          <ul className="posts">
            {
              data.allContentfulBlogPost.edges.map(({ node }) => 
                <li className="post" key={node.contentful_id}>
                  <Link to={`/posts/${node.slug}`}><h3 className="post-title">{node.title}</h3></Link>

                  <p className="post-details highlight">
                    {`${node.published} • ${node.childContentfulBlogPostPostBodyTextNode.childMarkdownRemark.timeToRead}min read`}
                  </p>

                  <p className="excerpt">{node.childContentfulBlogPostPostBodyTextNode.childMarkdownRemark.excerpt}</p>
                  <hr />
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
