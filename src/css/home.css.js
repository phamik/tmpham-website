import { css } from "@emotion/core"

const styles = {
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
    max-width: 700px;
    height: 100%;
  `,
  dataContent: css`
    position: relative;
    top: 20%;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  `,
  dataTopbar: css`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    height: 80px;
    z-index: 1;
    p {
      float: left;
      line-height: 0px;
      font-size: 0.74rem;
      padding: 39.5px 0;
      font-weight: 700;
    }
  `,
  landingText: css`

  `,
  layout: css`
    margin-bottom: 1.45rem;
    position: relative;
    z-index: 4;
  `,
}

export default styles
