import * as React from "react"
import { Link } from "gatsby"

import "../styles/config.scss"
import "../styles/header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div className={``}>
      <h1><Link to="/">{siteTitle}</Link></h1>
    </div>
  </header>
)

export default Header