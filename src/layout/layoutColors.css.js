import { css } from "@emotion/core"
import lineSvg from "../../static/assets/line.svg"

const styles = css`
  .layout-wrapper { 
    background-color: #63686E;
  }
  .e404.layout-wrapper .layout-inner {
    background: #fff;
    background-color: white;
  }
  .e404 .data-section {
    color: #000;
    background-color: white;
  }
  .aboutme.layout-wrapper .layout-inner {
    background: #fff;
  }
  .aboutme .data-section {
    color: #000;
  }
  .aboutme .hamburgercolr::before,
  .aboutme .hamburgercolr::after,
  .e404 .hamburgercolr::before,
  .e404 .hamburgercolr::after {
    background-color: #000;
  }
  .home.layout-wrapper .layout-inner {
    background: #282b2f;
    background-size: contain;
  }
  .home.layout-wrapper h1,
  .home.layout-wrapper h2 {
    color: #fff;
  }
  .skill.layout-wrapper .layout-inner {
    color: #fff;
    background: #282B2F;
  }
  .home .btn-menu-color,
  .experience .btn-menu-color {
    color: #fff;
  }
  .aboutme .btn-menu-color,
  .e404 .btn-menu-color {
    color: #fff;
  }
`

export default styles
