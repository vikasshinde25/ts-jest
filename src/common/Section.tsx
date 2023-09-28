import styled from "styled-components";
import Theme from "../style/Theme";

const Section = styled.div`
  padding: 50px 0;
  &.mini-section {
    padding: 20px 0;
  }
  &.bg-green {
    background: ${Theme.baseColor};
  }
  &.section-bg-image {
    background-position: bottom;
    background-attachment: scroll;
    background-repeat: repeat-x;
    background-size: cover;
  }
  .section-bg-overlay {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.8) 100%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .section-content {
    padding: 50px 0;
  }
`;
export default Section;
