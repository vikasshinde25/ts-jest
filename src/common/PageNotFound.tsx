import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { PATH_LOGIN } from "../constants";

function PageNotFound() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token");

  // useEffect
  useEffect(() => {
    console.log("isLoggedIn pnf", isLoggedIn);
    if (isLoggedIn) {
      navigate(PATH_LOGIN);
      console.log("navigate(PATH_LOGIN) inside page not found");
    } else {
      console.log("page not found inside else page not found");
    }
  }, [isLoggedIn, navigate]);
  /* ********** Main return statement of this component ********** */
  return (
    <PageNotFoundBox>
      {/* <img src={PageNotFoundImg} alt="not-found" /> */}
      <h3>Unable to resolve the request.</h3>
      <h5 className="mt-3">
        Unfortunately the page you requested was not found. Some of the possible
        reasons could be
      </h5>
      <div className="not-found-reason">
        <ul>
          <li>
            The page you were looking for might no longer exist. Please try the
            options below. There was a temporary problem.
          </li>
          <li>
            Please make sure you refresh/reload the page your were on before
            this one.
          </li>
        </ul>
      </div>
    </PageNotFoundBox>
  );
}

export default PageNotFound;
const PageNotFoundBox = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .not-found-reason {
    color: black;
    font-size: 16px;
    text-align: left;
  }
`;
