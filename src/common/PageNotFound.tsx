import React from "react";

import styled from "styled-components";

function PageNotFound() {
  return (
    <PageNotFoundBox>
      {/* <img src={PageNotFoundImg} alt="not-found" /> */}
      <h5 className="mt-3">Page not found</h5>
      <p className="not-found">
        The page you’re looking for can’t be found. Double check the URL and try
        again.
      </p>
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

  .not-found {
    color: black;
    font-size: 16px;
    text-align: center;
  }
`;
