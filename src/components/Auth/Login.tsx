import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AuthContainer, Button, ErrorBox, InputFormField } from "../../common";
import { AppDispatch } from "../../store";
import { PATH_DASHBOARD, PATH_LOGIN } from "../../constants";
import SiteBranding from "../../common/SiteBranding";
import { userLogin } from "../../redux/services/UserServices";

function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [loginloader, setLoginLoader] = useState(false);

  console.log("================================");
  // useEffect for checking authentication
  // useEffect(() => {
  // const isLoggedIn = !!localStorage.getItem("token");
  //   if (isLoggedIn) {
  //     navigate(PATH_DASHBOARD);
  //   } else {
  //     navigate(PATH_LOGIN);
  //   }
  // }, [isLoggedIn, navigate]);

  // handle login events
  const handleLoginDetails = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const value = event?.target?.value;
    setLoginData({ ...loginData, [type]: value });
  };

  // handle use login events
  const handleUserLoginEvents = () => {
    setLoginLoader(true);

    // email validation
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = !(
      !loginData?.email || emailRegex.test(loginData?.email) === false
    );

    // password validation
    const isPasswordValid = loginData?.password?.length >= 8;

    if (isEmailValid && isPasswordValid) {
      dispatch(userLogin(loginData))
        .unwrap()
        .then(() => {
          navigate(PATH_DASHBOARD);
          setLoginLoader(false);
        })
        .catch((error) => {
          navigate(PATH_LOGIN);
          setLoginError(error?.data?.non_field_errors?.[0]);
          setLoginLoader(false);
        });
    } else {
      setLoginError("Oops!... Invalid Credentials.");
      setLoginLoader(false);
    }
  };

  // display authentication box
  const displayAuthbox = () => {
    return (
      <div className="authbox">
        <InputFormField className="">
          <label htmlFor="email">
            Email
            <br />
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              value={loginData?.email}
              placeholder="Enter your Email Address"
              onChange={(event) => handleLoginDetails(event, "email")}
            />
          </label>
        </InputFormField>
        <InputFormField className="mt-3">
          <label htmlFor="password">
            Password
            <br />
            <input
              id="password"
              className="form-control"
              type="password"
              name="password"
              value={loginData?.password}
              placeholder="Enter your Password"
              onChange={(event) => handleLoginDetails(event, "password")}
            />
          </label>
        </InputFormField>
        <Button
          type="button"
          className={`btn-primary w-100 mt-4 ${loginloader ? "disabled" : ""}`}
          onClick={() => {
            handleUserLoginEvents();
          }}
        >
          {loginloader ? "Loding....." : "Submit"}
        </Button>
        {loginError?.length > 0 ? (
          <div className="mt-3">
            <ErrorBox message={loginError} />
          </div>
        ) : null}
      </div>
    );
  };

  /* ********** Main return statement of this component ********** */
  return (
    <AuthContainer>
      <div className="row mx-0 h-100">
        <div className="col-12 col-lg-7 px-0">
          <div className="bg-image flex-content-center p-20">
            <SiteBranding logoType="white" maxWidth="120px" />
            <div className="d-lg-none w-100">{displayAuthbox()}</div>
          </div>
        </div>
        <div className="col-12 col-lg-5 flex-content-center d-none d-lg-flex">
          {displayAuthbox()}
        </div>
      </div>
    </AuthContainer>
  );
}

export default Login;
