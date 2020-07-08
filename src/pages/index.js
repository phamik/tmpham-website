import React from "react";
import { Helmet } from "react-helmet";
import Menu from "../components/layout/menu";
import styles from "../css/home.css";
import AnimatedIntroString from "../components/typewriter/typewriter";

export const IndexPage = () => (
    <Menu bgClassName="home">
      <Helmet>
        <title>Welcome! 👋 | Tien Pham</title>
        <meta charset="UTF-8" />
      </Helmet>
      <section css={styles.dataSection}>
        <div css={styles.dataContainer}>
          <div css={styles.dataContent}>
            <AnimatedIntroString/>
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
