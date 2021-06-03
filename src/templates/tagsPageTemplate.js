import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const blogPosts = graphql`
  query tagsQuery($tag: String){
    allContentfulBlogPost(filter: {tags: {in: [$tag]}}) {
      edges {
        node {
          contentful_id
          slug
          title
          published(formatString: "Do MMM, YYYY")
          tags
        }
      }
    }
  }
`

// Render blog posts under the specified $tag
const TaggedPosts = ({ pageContext, data }) => {
  return (
    <Layout>
      <Seo title={`${pageContext.tag} posts`} />
      <h1>{`Articles on ${pageContext.tag}`}</h1>
      <div className="blogposts">
        <ul className="posts">
          {
            data.allContentfulBlogPost.edges.map(({ node }) => 
              <li className="post" key={node.contentful_id}>
                <Link to={`/posts/${node.slug}`}><h3>{node.title}</h3></Link>
                
                <span className="published">{node.published}</span>
              </li>)
          }
        </ul>
      </div>
    </Layout>
  )
}

export default TaggedPosts
