import React from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";

import Theme from "../style/Theme";
import SiteBranding from "./SiteBranding";
import Button from "./Button";
import { AppDispatch } from "../store";
import { userLogout } from "../redux/services/UserServices";
// import customerDetails from "../redux/services/CustomerServices";

function Header() {
  const dispatch = useDispatch<AppDispatch>();

  // useEffect
  // useEffect(() => {
  //   // dispatch(customerDetails("CMORug2"));
  // }, [dispatch]);

  // display site branding
  const displaySiteBranding = () => {
    return <SiteBranding logoType="white" maxWidth="100px" />;
  };

  // display header navigation
  const displayHeaderNavigation = () => {
    return (
      <div className="header-nav">
        <ul>
          <li>Dashboard</li>
        </ul>
      </div>
    );
  };

  // display user profile and logout option
  const displayUserProfile = () => {
    return (
      <div className="user-profile">
        <ul>
          <li>
            <div className="user-info">VS</div>
          </li>
          <li>
            <div>Vikas Shinde</div>
            <Button className="button" onClick={() => dispatch(userLogout())}>
              Logout
            </Button>
          </li>
        </ul>
      </div>
    );
  };

  /* ********** Main return statement of this component ********** */
  return (
    <GlobalHeader id="header">
      <div className="container">
        <div className="row">
          <div className="col-8 col-md-3 col-lg-2">{displaySiteBranding()}</div>
          <div className="col-4 col-md-9 col-lg-10">
            <div className="row">
              <div className="col-6 col-md-9 col-xxl-10">
                {displayHeaderNavigation()}
              </div>
              <div className="col-6 col-md-3 col-xxl-2">
                {displayUserProfile()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalHeader>
  );
}

export default Header;
const GlobalHeader = styled.div`
  background: ${Theme.baseColor};
  padding: 10px 0;
  color: ${Theme.white};

  .header-nav {
  }
  .user-profile {
    color: ${Theme.white};
    li {
      display: inline-block;
      margin-right: 5px;
      .user-info {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: ${Theme.white};
        color: ${Theme.baseColor};
        font-weight: bold;
        padding-top: 9px;
        text-align: center;
      }
    }
    li:last-child {
      margin-right: 0px;
    }
  }
`;
