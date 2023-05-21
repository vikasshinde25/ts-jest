import styled from "styled-components";
import Theme from "../style/Theme";

import { cricketGround } from "../images";

const AuthContainer = styled.div`
  width: 100vw;
  height: 100vh;

  .bg-image {
    background-image: url(${cricketGround});
    background-position: center;
    background-size: cover;
    height: 100%;
  }

  .bg-overlay {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.7);
  }

  .authbox {
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    box-shadow: ${Theme.boxShadow};
  }
`;

export default AuthContainer;
