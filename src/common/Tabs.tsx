import styled from "styled-components";
import Theme from "../style/Theme";

const Tabs = styled.div`
  .tabs-jumbo {
    border-bottom: 1px solid ${Theme.gray99};
    li {
      display: inline-block;
      padding: 0 20px 10px 20px;
      font-size: ${Theme.extraMedium};
      text-transform: uppercase;
      &.active {
        font-weight: bold;
        border-bottom: 2px solid ${Theme.baseColor};
      }
      :hover {
        font-weight: bold;
        border-bottom: 2px solid ${Theme.baseColor};
      }
    }
  }

  .tabs-primary {
    border-bottom: 1px solid ${Theme.gray99};
    li {
      display: inline-block;
      padding: 10px 20px;
      &.active {
        font-weight: bold;
        border-bottom: 2px solid ${Theme.baseColor};
      }
      :hover {
        font-weight: bold;
        border-bottom: 2px solid ${Theme.baseColor};
      }
    }
  }
`;

export default Tabs;
