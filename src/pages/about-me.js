import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Menu from "../components/layout/menu";
import styles from "../css/home.css";
import CV from "../../static/TienPham-CV-2020.pdf";

export const IndexPage = (data) => (
    <Menu bgClassName="home">
      <Helmet>
        <title>About me | Tien Pham</title>
        <meta charset="UTF-8" />
      </Helmet>
      <section css={styles.dataSection}>
        <div css={styles.dataContainer}>
          <div css={styles.dataContent}>
            <div css={styles.aboutMeText}>
              <h1>
                About me
              </h1>
              <p>
              I am a web developer who is passionate about web design and writing code that translates into robust and user-friendly experiences. 
              </p>
              <p>
              I have been working in a digital consultancy for over 2 years. 
              Turning clients’ ambitions into reality from the design process up until delivery of the software. 
              </p>
              <p>
              It is the application of technology in businesses that particularly interest me. 
              This is also why the majority of my time as a developer has been around the e-commerce space. Helping 
              clients build software that will further allow them to reach their business goals.
              </p>
              <p>
              Check out <a href={CV} target="_blank">my CV</a> for more about my experience or find out more about what I can do <Link to="/skills">here</Link> ! 
              </p>
              <p>
                If you would like to work with me or simply have a chat, feel free to reach out (button on the top right corner). 
              </p>
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
        social {
          resumeInPdf
        }
      }
    }
  }
`
