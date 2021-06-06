/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

import Header from "./header"
import { ThemeContext } from '../contexts/themeContext'

import "../styles/config.scss"
import "../styles/layout.scss"

import Moon from '../icons/crescent.svg'
import Sun from '../icons/sun.svg'
import Portfolio from "../icons/portfolio.svg"
import Github from "../icons/github.svg"
import LinkedIn from "../icons/linkedin.svg"
import Twitter from "../icons/twitter-alt.svg"

const Layout = ({ children }) => {

  // Query for site information and blog tags
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          socials {
            twitter
            github
            linkedIn
            website
          }
        }
      }

      allContentfulBlogPost {
        edges {
          node {
            tags
          }
        }
      }
    }
  `)

  // extract a unique list of all tags from contentful posts
  const tags = Array.from(new Set(data.allContentfulBlogPost.edges.map(({ node }) => node.tags).flat().sort()))

  const { title, author, socials } = data.site.siteMetadata

  const { theme, themeToggle } = React.useContext(ThemeContext)


  return (
    <div className={`layout ${theme}`}>
      <div className="content">
        <div className="sidebar">
          <div className="container flex">
            <Header siteTitle={title} />
            <StaticImage src='../images/emblem.png' alt="Folajomi's Avatar" />

            <div className="contacts">
              <a href={socials.website} className="contact" aria-label="portfolio-icon"><Portfolio /></a>
              <a href={socials.github} className="contact" aria-label="github-icon"><Github /></a>
              <a href={socials.twitter} className="contact" aria-label="twitter-icon"><Twitter /></a>
              <a href={socials.linkedIn} className="contact" aria-label="linkedin-icon"><LinkedIn /></a>
            </div>

            <p className="about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere suscipit dui, eu luctus justo consectetur sed. Fusce in est pharetra, elementum augue eu, cursus ex. In quis sem ipsum. Integer a aliquet nibh. Maecenas elementum, nibh non iaculis porttitor, eros massa bibendum dolor, sit amet cursus augue eros interdum nisi.
            </p>

            <div className="filters">
            
              <h3>All Tags</h3>
              
              <ul className="tags">
                {
                  tags.map(tag => <li className="tag" key={tag}><Link to={`/tags/${tag}`}>{`#${tag}`}</Link></li>)
                }
              </ul>

            </div>

            <footer>
              © {new Date().getFullYear()}. Built with ❤, ☕ and {` `}
              <a href="https://gatsbyjs.org" target="_blank" rel="noreferrer noopener">Gatsby</a> {` `}by {` `}
              <a href={socials.twitter}>{author}</a>
            </footer>
          </div>
        </div>
          <main>
            <button className="theme-toggle" onClick={() => themeToggle()}>
              {
                theme === 'light' ? <Moon /> : <Sun />
              }
            </button>
            <div className="container">{children}</div>
          </main>
      </div>
    </div>
  )
}

export default Layout