import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout/index";
import SEO from "../components/seo";
import Menu from "../components/layout/menu";
import styles from "../css/home.css";
import Navbar from "../components/navbar/Navbar"
import AnimatedIntroString from "../components/typewriter/typewriter";
import Logo from "../components/navbar/Logo";

export const IndexPage = () => (
    <Menu bgClassName="home">
      <Helmet>
        <title>Welcome! 👋 | Tien Pham</title>
        <meta charset="UTF-8" />
      </Helmet>
      <section css={styles.dataSection}>
        <div css={styles.dataContainer}>
          <div css={styles.dataContent}>
            {/* <div css={styles.dataTopbar}>
              <Logo/>
            </div> */}
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
