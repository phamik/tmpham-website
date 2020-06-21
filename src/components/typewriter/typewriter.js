import React from 'react';
import './typewriter.css';
import Typewriter from "typewriter-effect"
import { graphql, useStaticQuery } from "gatsby"
import GraphemeSplitter from "grapheme-splitter"

const AnimatedIntroString = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {

  //       }
  //     }
  //   }
  // `)
  function stringSplitter(string) {
    const splitter = new GraphemeSplitter()
    return splitter.splitGraphemes(string)
  }
  const wave = '\u{1F44B}';
  return (
    <section>
      <Typewriter
        options={{
          wrapperClassName: "animated-string-wrapper",
          cursorClassName: "animated-cursor-wrapper",
          strings: "Hi, My Name is Tien",
          autoStart: true,
          // loop: true,
          delay: 150,
          stringSplitter
        }}
      />
    </section>
  )
}

export default AnimatedIntroString;