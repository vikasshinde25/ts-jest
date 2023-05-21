import React from "react";

import ErrorMsgStyle from "./ErrorMsgStyle";
import LoginErrorMsgProps from "../props";
import { cricketBall } from "../images";

// interface PropsTypes {
//   jkl: Props;
// }

function ErrorBox({ message }: LoginErrorMsgProps) {
  return (
    <ErrorMsgStyle>
      <div className="img-box">
        <img src={cricketBall} alt="cricketball" className="cricket-ball" />
      </div>
      <div className="message-box">
        <p>{message}</p>
      </div>
    </ErrorMsgStyle>
  );
}

export default ErrorBox;
