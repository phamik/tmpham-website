import { css } from "@emotion/core"

// made position fixed here so the page is not scrollable and doesnt shift both the menu bar and the content 

const styles = {
  layout: css`
    margin-bottom: 1.45rem;
    position: relative;
    z-index: 4;
    top: 5rem;
  `,
}

export default styles
