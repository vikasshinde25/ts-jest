import React, { MutableRefObject, useEffect, useRef, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { useDispatch } from "react-redux";

import Theme from "../style/Theme";
import SiteBranding from "./SiteBranding";
import Button from "./Button";
import { useAppDispatch, RootState, useAppSelector } from "../store";
import { userLogout } from "../redux/services/UserServices";
// import customerDetails from "../redux/services/CustomerServices";
import { PATH_LOGIN, navigationMenuConstant } from "../constants";

type UserData = {
  first_name: string;
  last_name: string;
};

function Header() {
  const location = useLocation();
  const dropdownRef = useRef<null | HTMLInputElement>(null);
  // redux store
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state: RootState) => state?.userState);
  let userData: UserData | null = null;
  userData = userState?.userData;
  const [showUserProfileDropdown, setShowUserProfileDropdown] = useState(false);

  // useEffect
  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem("token");
    if (!isLoggedIn) {
      navigate(PATH_LOGIN);
    }
    // dispatch(customerDetails("CMORug2"));
  }, [navigate]);

  function useOutsideAlerter(
    ref: MutableRefObject<HTMLInputElement | null>,
    type: string
  ) {
    useEffect(() => {
      function handleClickOutside(event: { target: any }) {
        if (ref.current && !ref.current.contains(event?.target)) {
          setShowUserProfileDropdown(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, type]);
  }

  useOutsideAlerter(dropdownRef, "profile");

  // display site branding
  const displaySiteBranding = () => {
    return <SiteBranding logoType="white" maxWidth="100px" margin="none" />;
  };

  const handleHeaderNavigation = (path: string) => {
    navigate(path);
  };

  // display header navigation
  const displayHeaderNavigation = () => {
    return (
      <div className="header-nav">
        <ul>
          {navigationMenuConstant?.map((item) => {
            return (
              <li
                className={`cursor ${
                  location?.pathname?.includes(item?.path) ? "active" : ""
                }`}
                key={item?.key}
                role="presentation"
                onClick={() => {
                  handleHeaderNavigation(item?.path);
                }}
              >
                {item?.label}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  // display first letter of user name
  const displayFirstLetterOfUserName = (
    firstName: string,
    lastName: string
  ) => {
    const firstLetter = firstName?.charAt(0);
    const lastLetter = lastName?.charAt(0);
    return `${firstLetter}${lastLetter}`;
  };

  // display user profile and logout option
  const displayUserProfile = () => {
    const firstName = userData?.first_name || "";
    const lastName = userData?.last_name || "";
    return (
      <div className="user-info">
        <ul>
          <li>
            <div className="user-initial-name">
              {displayFirstLetterOfUserName(firstName, lastName)}
            </div>
          </li>
          <li>
            <div ref={dropdownRef}>
              <div
                className="user-profile cursor"
                role="presentation"
                onClick={() => {
                  setShowUserProfileDropdown(!showUserProfileDropdown);
                }}
              >
                {firstName} {lastName}
                <span className="user-profile-dropdown-icon">
                  <i className="fa-solid fa-angle-down" />
                </span>
              </div>
              <div
                className={`user-profile-dropdown-panel ${
                  showUserProfileDropdown ? "show" : ""
                }`}
              >
                <Button
                  className="btn-primary"
                  onClick={() => dispatch(userLogout())}
                >
                  Logout
                </Button>
              </div>
            </div>
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
    margin-top: 10px;
    ul {
      li {
        display: inline-block;
        margin-right: 20px;

        &.active {
          font-weight: bold;
        }
      }
      li:hover {
        font-weight: bold;
      }
      li:last-child {
        margin-right: 0px;
      }
    }
  }
  .user-info {
    color: ${Theme.white};
    text-align: right;
    li {
      display: inline-block;
      position: relative;
      margin-right: 5px;
      .user-initial-name {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: ${Theme.white};
        color: ${Theme.baseColor};
        font-weight: bold;
        padding-top: 9px;
        text-align: center;
      }
      .user-profile {
        .user-profile-dropdown-icon {
          margin-left: 10px;
        }
      }
      .user-profile-dropdown-panel {
        display: none;
        position: absolute;
        padding: 10px;
        border-radius: 5px;
        background: ${Theme.white};
        width: 200px;
        right: 0;
        top: 30px;
        box-shadow: ${Theme.boxShadow};
      }
      .user-profile-dropdown-panel.show {
        display: block;
      }
    }

    li:last-child {
      margin-right: 0px;
    }
  }
`;
