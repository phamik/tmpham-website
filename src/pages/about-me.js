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
        <title>About me | Tien Pham</title>
        <meta charset="UTF-8" />
      </Helmet>
      <section css={styles.dataSection}>
        <div css={styles.dataContainer}>
          <div css={styles.dataContent}>
            <h1>Hello there 👋</h1>
            <h3>Thanks for visiting my website</h3>
            <h3>Here is a few words about me:</h3>
            <h4>
            I have graduated from the University of Warwick with a degree of Computer Science and Business. The choice of my degree has foresighted my interests that have been driving my motivation as a software developer. It is the application of technology in businesses that particularly interest me, which is also why the majority of my time as a developer has been around the e-commerce space and helping clients build software that will further allow them to reach their business goals.
            </h4>
            <h4>
            I have started my career as a web developer while interning at Deloitte Digital in 2016, where I was mainly working as a frontend developer working with technologies such as React.js. In 2018, I have started at Deloitte Digital as a full-time developer and switched to a platform/infrastructure role. This has mainly involved working with how to build internal tools for the development teams and continuously improving build and deployment times of applications. In this role I have been exposed a lot to the principles of DevOps and also realised, that in order to be able to continuously deliver quality software, DevOps is no longer a responsibility of a single team, but this mindset should be carried by all the developer. It is no longer a role that makes sure that code is deployed correctly, but it is also a methodology which ensures that developers are responsible for the code they produce all the way up to production. 
            </h4>
            <h4>
            After nearly 2 years, I have switched back to a fronted role. This transition has been eyeopening in many ways. It is a well known fact that technology (especially frontend) is constantly changing, therefore the ability to constantly learn is a must. I have been re-acquainted with React.js which has now  introduced concepts such React Hooks and so much more. I have also worked with GraphQL, a new technology that has revolutionised the way we can query data from a database. In addition to this, the scope of frontend has also expanded from being only a way to create good looking interfaces, to actually contain logic that drives web applications. That is also why frontend development is my favourite area.   
            </h4>
            <h4>
            Throughout the years of developing applications, not only have I strengthened my technological abilities, but I also worked under agile conditions and I am able to deliver solutions with the best practices in mind.

            I have always been interested in helping businesses grow and what better way to so  in today's digital age than to build a website! 

            I am always eager to learn new things and solve problems. Thanks to this mindset coupled with the experiences throughout the years have been instrumental to narrowing down what my passions are and what I would like to be doing in the future. 

            </h4>
            <h4>
            If you are interested in working with me or simply having a chat feel free to contact me!
            </h4>
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
