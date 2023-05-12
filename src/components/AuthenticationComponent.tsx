import React from "react";

import { Navigate } from "react-router-dom";

import { PATH_LOGIN } from "../constants";

function AuthenticationComponent() {
  const isAuthenticated = false;

  return (
    <div>
      {isAuthenticated ? (
        "user login..."
      ) : (
        // <Route path="*" element={<Navigate to={PATH_LOGIN} />} />
        <Navigate to={PATH_LOGIN} />
      )}
    </div>
  );
}

export default AuthenticationComponent;
