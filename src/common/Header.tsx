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

  // handle react routing
  const handleHeaderNavigation = (path: string) => {
    navigate(path);
  };

  // display header social icons
  const displayHeaderSocialIconList = () => {
    return (
      <div id="header-social-icon" className="mt-1">
        <ul>
          <li className="cursor">
            <i className="fa-brands fa-facebook-f" />
          </li>
          <li className="cursor">
            <i className="fa-brands fa-twitter" />
          </li>
          <li className="cursor">
            <i className="fa-brands fa-instagram" />
          </li>
          <li className="cursor">
            <i className="fa-brands fa-skype" />
          </li>
          <li className="cursor">
            <i className="fa-brands fa-pinterest-p" />
          </li>
          <li className="cursor">
            <i className="fa-brands fa-vimeo-v" />
          </li>
        </ul>
      </div>
    );
  };

  // display site branding
  const displaySiteBranding = () => {
    return <SiteBranding logoType="white" maxWidth="120px" margin="0 auto" />;
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

  // display first and last letter of user name
  const displayFirstAndLastLetter = (firstName: string, lastName: string) => {
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
          <li className="cursor">
            <div className="user-initial-name">
              {displayFirstAndLastLetter(firstName, lastName)}
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
      <div id="header-top">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 col-xl-3">
              {displayHeaderSocialIconList()}
            </div>
            <div className="col-6 col-md-4 col-xl-6">
              {displaySiteBranding()}
            </div>
            <div className="col-6 col-md-3 col-xl-3">
              {displayUserProfile()}
            </div>
          </div>
        </div>
      </div>
      <div id="header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">{displayHeaderNavigation()}</div>
          </div>
        </div>
      </div>
    </GlobalHeader>
  );
}

export default Header;
const GlobalHeader = styled.div`
  #header-top {
    background: ${Theme.baseColor};
    padding: 10px 0;
    color: ${Theme.white};

    #header-social-icon {
      ul {
        li {
          display: inline-block;
          margin-right: 15px;
          box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px 0px;
          border-radius: 50%;
          padding-top: 6px;
          width: 28px;
          height: 28px;
          text-align: center;

          :hover {
            color: ${Theme.baseColor};
            background: ${Theme.white};
          }
        }
        li:last-child {
          margin-right: 0px;
        }
      }
    }
    .user-info {
      margin-top: 6px;
      color: ${Theme.white};
      text-align: right;
      li {
        display: inline-block;
        position: relative;
        margin-right: 5px;
        .user-initial-name {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: ${Theme.white};
          color: ${Theme.baseColor};
          font-weight: bold;
          padding-top: 7px;
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
          z-index: 9;
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
  }
  #header-bottom {
    // box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
    z-index: 999;
    position: relative;

    .header-nav {
      ul {
        li {
          display: inline-block;
          padding: 10px 20px;
          &.active {
            font-weight: bold;
            color: ${Theme.white};
            background: ${Theme.baseColor};
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
  }
`;
