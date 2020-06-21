import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout/index";
import Image from "../components/image";
import SEO from "../components/seo";
import LayoutContactMe from "../components/layout/layout-contact-me";
import styles from "../css/home.css";

const IndexPage = () => (

    <LayoutContactMe bgClassName="home">
      <Helmet>
        <title>Tien Pham</title>
        <meta charset="UTF-8" />
      </Helmet>
      <section css={styles.dataSection}>
        <div css={styles.dataContainer}>
          <div css={styles.dataContent}>
            <h1>Hello</h1>
            <h2>I'm Tien</h2>
          </div>
        </div>
      </section>
    </LayoutContactMe>
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
