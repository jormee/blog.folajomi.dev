import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

import "../styles/_config.scss"
import "../styles/header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/"><StaticImage src='../images/emblem.png' alt="Folajomi's Avatar" /></Link>
  </header>
)

export default Header