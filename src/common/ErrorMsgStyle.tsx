import styled from "styled-components";
import Theme from "../style/Theme";

const ErrorMsgStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${Theme.darkRed};
  border-radius: 16px;
  color: ${Theme.red};

  .img-box {
    flex: 0 0 25px;
    width: 25px;
    border-radius: 16px;
  }

  .cricket-ball {
    width: 100%;
    height: auto;
  }
  .message-box {
    flex: calc(100% - 75px);
    width: calc(100% - 75px);
    padding: 5px 5px 0 5px;
  }
`;

export default ErrorMsgStyle;
