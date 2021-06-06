import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage} from 'gatsby-plugin-image'

import Layout from '../components/layout.js'
import '../styles/config.scss'
import '../styles/blogPost.scss'

export const query = graphql`
  query postQuery($slug: String){
    contentfulBlogPost(slug: { eq: $slug}) {
      title
      coverImg {
        description
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      childContentfulBlogPostPostBodyTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

const BlogPost = ({ data }) => {
  const { title, childContentfulBlogPostPostBodyTextNode, coverImg } = data.contentfulBlogPost
 
  const { html } = childContentfulBlogPostPostBodyTextNode.childMarkdownRemark
  const cover = getImage(coverImg)
  return(
    <Layout>
      <article className="post">
        <h1 className="post-title">{title}</h1>
        <GatsbyImage image={cover} alt={coverImg.description} />
        <div 
          className="post-body"
          dangerouslySetInnerHTML={{__html: html}}
        >          
        </div>
      </article>
    </Layout>
  )
}

export default BlogPost