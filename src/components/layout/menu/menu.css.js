import { css } from "@emotion/core"
import mediaQueryGenerator from "../../../utils/mediaQGen"
import logo from "../../../images/logo/logo-goldenrod-transparent.png";

const [media40em] = mediaQueryGenerator([{ type: "max", size: "40" }])

const styles = {
  wrapper: css`
    .contact {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 50vh;
    }
    .page {
      width: 100%;
      position: relative;
      perspective: 1200px;
      perspective-origin: 50% 0;
      ${media40em} {
        perspective-origin: 50% -10%;
      }
      height: 96vh;
      overflow: hidden;
    }
    .tab {
      transition: transform 1s;
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      &:first-of-type {
        background: #bbbbbb;
      }
      &:nth-of-type(2) {
        background: #848484;
      }
      &:nth-of-type(3) {
        background: #3d3d3d;
      }
    }
    .page-move {
      pointer-events: none;
      .tab:first-of-type {
        transform: translate3d(0px, 75vh, -300px);
      }
      .tab:nth-of-type(2) {
        transform: translate3d(0px, 75vh, -250px);
      }
      .tab:nth-of-type(3) {
        transform: translate3d(0px, 75vh, -200px);
      }
      .tab:nth-of-type(4) {
        transform: translate3d(0px, 75vh, -150px);
      }
    }
    .btn-contactme-close {
      pointer-events: none;
      font-size: 2em;
      position: absolute;
      top: 1.25em;
      right: 1.25em;
      display: block;
      color: #fff;
      z-index: 2;
      opacity: 0;
      transform: scale3d(0.8, 0.8, 1);
      transition: opacity 0.5s, transform 0.5s;
      ${media40em} {
        font-size: 1.25em;
      }
    }
    .contactme-open .btn-contactme-close {
      pointer-events: auto;
    }
    .contactme-open {
      pointer-events: auto;
    }
    .menu-container {
      margin: 5em 0;
      color: #fff;
      width: 100%;
    }
    .menu-contact { 
      font-size: 1.5rem;
      display: block;
      width: 75%;
      margin: 0 auto;
      padding: 0.85em 0;
      text-align: center;
      display: block;
      transform: translate3d(0, 20px, 0);
      p {
        margin-bottom: 0;
      }
      ${media40em} {
        font-size: 1.3rem;
      }
    }
    .menu-links {
      font-size: 1.5rem;
      display: block;
      width: 75%;
      margin: 0 auto;
      padding: 0.85em 0;
      text-align: center;
      transform: translate3d(0, 20px, 0);
      p {
        margin-bottom: 0;
      }
      ${media40em} {
        font-size: 1.3rem;
      }
    }
    #link-option:hover {
      text-decoration: underline;
    }
    .contactme-open .btn-contactme-close {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
    .menu-container,
    .menu-links {
      opacity: 0;
      transform: translate3d(0, 150px, 0);
      transition: opacity 1s, transform 1s;
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }
    .contactme-open .menu-container,
    .contactme-open .menu-links {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    .contactme-open .menu-links {
      transition-delay: 0.35s;
    }
  `,
  pageTab: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate3d(0);
  `,
  mainContainer: css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100%;
    background-color: #63686E;
    background-repeat: no-repeat;
    background-position: 50% 10em;
    background-size: 75% auto;
  `,
  layoutMagin: css`
    margin-bottom: 1.45rem;
  `,
  pageContainer: css`
    margin: 0 auto;
    padding: 0px 1.0875rem 1.45rem;
    padding-top: 0;
    /* height: 100vh; */
    min-height: 100%;
    min-width: 100%;
    @-moz-document url-prefix() { 
      height: 100vh;
    }

    position: relative;
    overflow: hidden;
    &::before{
      content: "";
      position: absolute;
      width: 200%;
      height: 200%;
      top: -50%;
      left: -50%;
      z-index: 0;
      background: url(${logo});
      background-repeat: no-repeat;
      background-position: right 45% center;
      background-size: 25%;
      -webkit-transform: rotate(20deg);
      -moz-transform: rotate(20deg);
      -ms-transform: rotate(20deg);
      -o-transform: rotate(20deg);
      transform: rotate(20deg);
      filter: blur(12px);
      -webkit-filter: blur(12px);
      @media only screen and (max-width: 480px) {
        background-position: right 30% center;
        background-size: 50%;
      } 
    }
  `,
  contactContactme: css`
    position: absolute;
    top: 1.15em;
    right: 1.25em;
    z-index: 7;
    ${media40em} {
      font-size: 0.85em;
      position: absolute;

      right: 2em;
    }
  `,
  btn: css`
    margin: 0;
    padding: 0;
    cursor: pointer;
    border: none;
    background: none;
    text-decoration: none;
    color: #000;
    outline: none;
    &:focus {
      outline: none;
      ::after {
      width: 100%;
    }
    }
  `,
  btnContactme: css`
    font-size: 1.5em;
    &:hover {
    color: goldenrod;
    }
  `,
  contactMe: css`
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1;
    display: inline-block;
    box-sizing: border-box;
    width: 75%;
    max-width: 900px;
    padding: 3em 0 0.1em;
  `,
  whiteLink: css`
    color: #fff;
    display: inline-block;
    padding: 10px;
  `,
}

export default styles
