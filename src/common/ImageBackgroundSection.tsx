import styled from "styled-components";

import Theme from "../style/Theme";

const ImageBackgroundSection = styled.div`
  .bg-overlay-white {
    background: ${Theme.whiteColor80};
  }
  .bg-overlay-green {
    // background: ${Theme.baseColor80};
    background: linear-gradient(
      to right,
      rgba(0, 146, 112, 1) 25%,
      rgba(0, 146, 112, 0) 100%
    );
  }

  .bg-image-content {
    padding: 50px 0;
  }
`;

export default ImageBackgroundSection;
