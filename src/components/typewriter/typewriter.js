import React from 'react';
import styled from "styled-components"
import Typewriter from "typewriter-effect"
import { graphql, useStaticQuery } from "gatsby"
import GraphemeSplitter from "grapheme-splitter"

const TypewriterIntroString = styled.div`
   font-size: 3.5em;
   font-weight: 900;
    margin-top: 20%;

   @media (max-width: 768px) {
    font-size: 1.5em;
    font-weight: 900;
    margin-top: 70%;
   }
`;

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
    {/* <div className="animated-string-wrapper">
      <Typewriter
        options={{
          // wrapperClassName: "animated-string-wrapper",
          // cursorClassName: "animated-cursor-wrapper",
          strings: "Hi, My Name is Tien",
          autoStart: true,
          // loop: true,
          delay: 150,
          stringSplitter
        }}
      />
    </div> */}
    <TypewriterIntroString>
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString('<  Hello! ' + stringSplitter(wave) + ' <br />')
          .typeString('&nbsp;&nbsp; My name is Tien and <br />')
          // .typeString('I am a web developer ' + stringSplitter('👨‍💻'))
          .typeString('&nbsp;&nbsp; I am a web developer <br />')
          .typeString('/> ' )
          .pauseFor(2500)
          .start();
      }}
    />
    </TypewriterIntroString>
    </section>

  )
}

export default AnimatedIntroString;