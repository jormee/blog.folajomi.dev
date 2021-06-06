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
      published(formatString: "Do MMM, YYYY")
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
          timeToRead
          tableOfContents
        }
      }
    }
  }
`

const BlogPost = ({ data }) => {
  const { title, childContentfulBlogPostPostBodyTextNode, coverImg, published } = data.contentfulBlogPost
 
  const { html, timeToRead, tableOfContents } = childContentfulBlogPostPostBodyTextNode.childMarkdownRemark
  const cover = getImage(coverImg)
  return(
    <Layout>
      <article className="post">
        <h1 className="post-title">{title}</h1>
        <p className="post-details">
          {
            `${published} • ${timeToRead}mins read`
          }
        </p>
        <GatsbyImage image={cover} alt={coverImg.description} />
        <div className="post-content">
          <div className="ToC">
            <h3>Table of Contents</h3>
            <div dangerouslySetInnerHTML={{__html: tableOfContents}}></div>
          </div>
          <div 
            className="post-body"
            dangerouslySetInnerHTML={{__html: html}}
          >          
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default BlogPost