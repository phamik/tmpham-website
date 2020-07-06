import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import styles from "./layout.css"
import Navbar from "../navbar/Navbar";

const Layout = ({
  title,
  children,
  bgClassName,
  fixedMenuPosition = false,
}) => {
  return (
    <div className={`layout-wrapper ${bgClassName || "white"}`}>
      <StaticQuery
        query={graphql`
          {
            site {
              siteMetadata {
                title

                siteKeywords
                siteDescription
              }
            }
          }
        `}
        render={({
          site: {
            siteMetadata: { title: siteTitle, siteKeywords, siteDescription },
          },
        }) => (
          <>
            <Helmet
              title={title || siteTitle}
              meta={[
                {
                  name: "description",
                  content: siteDescription,
                },
                {
                  name: "keywords",
                  content: siteKeywords,
                },
                { charSet: "utf-8" },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div className="layout-inner">
              <div css={styles.layout}>
                <Navbar />
                {children}
              </div>
            </div>
          </>
        )}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  bgClassName: PropTypes.string,
  // fixedMenuPosition: PropTypes.bool,
}

export default Layout
