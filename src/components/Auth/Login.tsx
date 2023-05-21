import React, { useState } from "react";

import { AuthContainer, Button, ErrorBox, InputFormField } from "../../common";
import { checkUserValidation } from "../../api";
import { userList } from "../../constants";

function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [loginloader, setLoginLoader] = useState(false);

  // handle user validation
  const handleUserValidation = (userData: {
    email: string;
    password: string;
  }) => {
    // user validation
    const isEmailValid = userList?.some(
      (item) => item?.email === userData?.email
    );
    const isPasswordValid = userList?.some(
      (item) => item?.password === userData?.password
    );

    checkUserValidation(userData).then(() => {
      if (isEmailValid) {
        if (isPasswordValid) {
          localStorage.setItem("token", "USER_TOKEN");
        } else {
          setLoginError("Oops!... Invalid Credentials.");
        }
      } else {
        setLoginError(
          "Email do not exist. Please contact system administration"
        );
      }
      setLoginLoader(false);
    });
  };
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
      handleUserValidation(loginData);
      setLoginError("");
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
        <div className="col-12 col-lg-7 pl-0 pr-0">
          <div className="bg-image flex-content-center p-20">
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
