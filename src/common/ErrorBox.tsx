import React from "react";

import styled from "styled-components";

import LoginErrorMsgProps from "../props";
import { cricketBall } from "../images";

import Theme from "../style/Theme";

// interface PropsTypes {
//   jkl: Props;
// }

function ErrorBox({ message }: LoginErrorMsgProps) {
  /* ********** Main return statement of this component ********** */
  return (
    <ErrorMsgStyle>
      <img src={cricketBall} alt="cricketball" className="cricket-ball" />
      <div className="message-box">
        <p>{message}</p>
      </div>
    </ErrorMsgStyle>
  );
}

export default ErrorBox;

const ErrorMsgStyle = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  border: 1px solid ${Theme.darkRed};
  border-radius: 16px;
  color: ${Theme.red};

  .img-box {
    width: 25px;
    border-radius: 16px;
  }

  .cricket-ball {
    width: 25px;
    height: auto;
    border-radius: 16px;
  }
  .message-box {
    width: 100%;
    padding: 5px 10px 0px 10px;
  }
`;
