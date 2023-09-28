import styled from "styled-components";
import Theme from "../style/Theme";

const Heading = styled.div`
  border-bottom: 1px solid ${Theme.baseColor};
  h3 {
    margin: 0;
    width: fit-content;
    color: ${Theme.white};
    background: ${Theme.baseColor};
    padding: 5px 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export default Heading;
