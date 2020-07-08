import React from "react"
import { Global } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./layout.css"
import styleColors from "./layoutColors.css"
import Obfuscate from "react-obfuscate";


export default ({ children }) => {

  const siteQuery = graphql`
    {
      site {
        siteMetadata {
          email
          footer
        }
      }
    }
  `
  const {
    site: {
      siteMetadata: {
        email
      }
    },
  } = useStaticQuery(siteQuery)

  const year = new Date().getFullYear();

  return (
    <>
      <div className="pgContainer">
        <div className="pgContent">
          <Global styles={[styles, styleColors]} />
          {children}
        </div>
        <div className="copy">
          <a
            href="https://www.linkedin.com/in/tien-pham-minh/"
            rel="noopener noreferrer"
            className="nolink"
            target="_blank"
          >
            &copy; {year} Tien Pham 
          </a>
        </div>
      </div>
      {/* This add a line in the bottom, but let Paint Drive Animation Work */}
      {/* <span className="bgPageColor">.</span> */}
    </>
  )
}
