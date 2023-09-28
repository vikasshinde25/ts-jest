import React from "react";

import styled from "styled-components";

import { cricketBall, cricketPinkBall, cricketWhiteBall } from "../images";
import Theme from "../style/Theme";
import { CricketMessageProps } from "../props";

function CricketMessageBox({
  matchFormat,
  message,
  boxSize,
}: CricketMessageProps) {
  // get cricket ball image
  const getCricketBallImg = () => {
    switch (matchFormat) {
      case "test":
        return cricketBall;
      case "test-pink":
        return cricketPinkBall;
      default:
        return cricketWhiteBall;
    }
  };

  /* ********** Main return statement of this component ********** */
  return (
    <CricketMessageBoxStyle className={matchFormat || ""}>
      <img
        src={getCricketBallImg()}
        alt="cricketball"
        className={`cricket-ball cricket-ball-${boxSize}`}
      />
      <div className={`message-box message-box-${boxSize}`}>{message}</div>
    </CricketMessageBoxStyle>
  );
}

export default CricketMessageBox;

const CricketMessageBoxStyle = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  border-radius: 16px;
  color: ${Theme.white};
  padding: 1px;

  &.test {
    border: 1px solid ${Theme.darkRed};
    background: ${Theme.darkRed};
  }
  &.test-pink {
    border: 1px solid ${Theme.pink};
    background: ${Theme.pink};
  }
  &.odi {
    border: 1px solid ${Theme.baseColor};
    background: ${Theme.baseColor};
  }

  &.t20 {
    border: 1px solid ${Theme.skyBlue};
    background: ${Theme.skyBlue};
  }

  .cricket-ball {
    width: 25px;
    height: auto;
    border-radius: 16px;
  }

  .cricket-ball-small {
    width: 14px;
    border: 1px solid white;
  }

  .message-box {
    width: 100%;
    padding: 5px 9px 0px 10px;
  }
  .message-box-small {
    font-size: ${Theme.verySmall};
    padding: 1px 10px 0px 5px;
  }
`;
