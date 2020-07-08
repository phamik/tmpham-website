import React from "react"
import { Global } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./layout.css"
import styleColors from "./layoutColors.css"


export default ({ children }) => {

  const siteQuery = graphql`
    {
      site {
        siteMetadata {
          footer
        }
      }
    }
  `
  const {
    site: {
      siteMetadata: { footer },
    },
  } = useStaticQuery(siteQuery)

  return (
    <>
      <div className="pgContainer">
        <div className="pgContent">
          <Global styles={[styles, styleColors]} />
          {children}
        </div>
        <div className="copy">
          <a
            href="https://github.com/phamik"
            rel="noopener noreferrer"
            className="nolink"
            target="_blank"
          >
            Made by Tien Pham 
          </a>
        </div>
      </div>
      {/* This add a line in the bottom, but let Paint Drive Animation Work */}
      {/* <span className="bgPageColor">.</span> */}
    </>
  )
}
