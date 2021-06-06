import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import '../styles/index.scss'

export const blogPosts = graphql`
  query tagsQuery($tag: String){
    allContentfulBlogPost(filter: {tags: {in: [$tag]}}) {
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

// Render blog posts under the specified $tag
const TaggedPosts = ({ pageContext, data }) => {
  const { edges: posts } = data.allContentfulBlogPost
  const noOfPosts = posts.length
  return (
    <Layout>
      <Seo title={`${pageContext.tag} posts`} />
      <h1>{`${noOfPosts} articles tagged '${pageContext.tag}'`}</h1>
      <div className="blogposts">
        <ul className="posts">
          {
            posts.map(({ node }) => 
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

export default TaggedPosts
