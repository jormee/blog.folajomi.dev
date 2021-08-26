import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import '../styles/404.scss'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="error-message">
      <h1 className="head">404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... </p>
      <p>Please make sure the link is correct and try again. </p>
    </div>
  </Layout>
)

export default NotFoundPage
