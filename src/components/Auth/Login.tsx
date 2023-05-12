import React from "react";

import { Authbox, InputFormField } from "../../common";

function Login() {
  return (
    <div className="bg-image">
      <div className="row">
        <div className="col-12">
          <Authbox>
            <InputFormField className="mt-3">
              <label htmlFor="email">
                Email
                <br />
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your Email Address"
                  // onChange={() => handleChange()}

                  // ref={register({
                  //   required: {
                  //     value: true,
                  //     message: "This field is required.",
                  //   },
                  //   pattern: {
                  //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  //     message: "Invalid email address.",
                  //   },
                  // })}
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
                  placeholder="Enter your Password"
                  // onChange={() => handleChange()}

                  // ref={register({
                  //   required: {
                  //     value: true,
                  //     message: "This field is required.",
                  //   },
                  //   pattern: {
                  //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  //     message: "Invalid email address.",
                  //   },
                  // })}
                />
              </label>
            </InputFormField>
          </Authbox>
        </div>
      </div>
    </div>
  );
}

export default Login;
