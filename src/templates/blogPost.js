import React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Layout from '../components/layout.js'

export const query = graphql`
  query postQuery($slug: String){
    contentfulBlogPost(slug: { eq: $slug}) {
      title
      slug
      body {
        raw
      }
    }
  }
`
const options = {}
const BlogPost = ({ data }) => {
  const { body } = data.contentfulBlogPost
  return(
    <Layout>
      <article className="post-body">
        {body.raw && renderRichText(body, options)}
      </article>
    </Layout>
  )
}

export default BlogPost