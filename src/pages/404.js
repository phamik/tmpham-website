import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styles from "../css/home.css"

const NotFoundPage = () => (
  <div css={styles.e404}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p>Go back to the <Link to="/">homepage</Link></p>
  </div>
)

export default NotFoundPage
