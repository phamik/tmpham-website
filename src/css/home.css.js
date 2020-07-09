import { css } from "@emotion/core"
import mediaQueryGenerator from "../utils/mediaQGen"

const [media36em, media50em] = mediaQueryGenerator([
  { type: "max", size: "36" },
  { type: "max", size: "50" },
])

const styles = {
  e404:css`
    background-color: white;
  `,
  blackColor: css`
    color: #000;
  `,
  dataSection: css`
    height: 100%;
    color: #fff;
  `,
  dataContainer: css`
    margin: 0 auto;
    padding: 0 3rem;
    margin-top: 6rem;
    /* max-width: 700px; */
    /* height: 100%; */
    @media only screen and (max-width: 480px) {
      margin-top: 20%;
      padding: 0 2rem;
    }  
  `,
  dataContent: css`
    position: relative;
    top: 20%;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    @media only screen and (min-width: 768px) {
      top: 10%;
    } 
  `,
  dataTopbar: css`
    position: fixed;
    top: 0;
    right: 20px;
    /* left: 50%; */
    /* transform: translate(-50%, 0); */
    /* height: 80px; */
    z-index: 3;
  `,
  layout: css`
    margin-bottom: 1.45rem;
    position: relative;
    z-index: 4;
  `,

  aboutMeText: css`
    text-align: justify;
    text-justify: inter-character;
    @media only screen and (min-width: 768px) {
      width: 50%;
    }  
    @media only screen and (max-width: 480px) {
      font-size: 70%;
    }  
    h1 {
      margin: 0 0 1rem;
      font-size: 3rem;
      line-height: 1.25;
      ${media50em} {
        font-size: 2.4rem;
      }
    }
    p {
      padding: 0;
      font-weight: 700;
      font-size: 1.2em;
      ${media50em} {
        font-size: 1em;
        line-height: 1.2em;
        max-width: 500px;
      }
    }
  `,
}

export default styles
