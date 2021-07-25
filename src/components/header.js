import * as React from "react"
import { Link } from "gatsby"

import "../styles/_config.scss"
import "../styles/header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="container nav">
      <h3 className="title"><Link to="/">{siteTitle}</Link></h3>
        <ul className="nav-bar">
          <li className="nav-item"><Link to="/" activeClassName="active">Blog</Link></li>
          <li className="nav-item"><Link to="/snippets" activeClassName="active">Snippets</Link></li>
        </ul>
    </nav>
  </header>
)

export default Header