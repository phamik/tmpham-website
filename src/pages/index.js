import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout/index";
import SEO from "../components/seo";
import Menu from "../components/layout/menu";
import styles from "../css/home.css";
import Navbar from "../components/navbar/Navbar"

export const IndexPage = () => (
    <Menu bgClassName="home">
      <Helmet>
        <title>Tien Pham</title>
        <meta charset="UTF-8" />
      </Helmet>
      <section css={styles.dataSection}>
        <div css={styles.dataContainer}>
          <div css={styles.dataContent}>
            <div css={styles.landingText}>
            <h1>&lt; Hello</h1>
            <h1>My name is Tien</h1>
            <h1>Welcome to my website /&gt;</h1>
            </div>
          </div>
        </div>
      </section>
    </Menu>
)


export default IndexPage

export const query = graphql`
  {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`
