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
    margin-top: 10%;
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
}

export default styles
