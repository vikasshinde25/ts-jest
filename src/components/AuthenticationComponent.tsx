// import React from "react";
import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
// import { useSelector } from "react-redux";

// import { RootState } from "../store";
// import { RootState, useAppDispatch } from "../store";
import { PATH_DASHBOARD, PATH_LOGIN } from "../constants";
import DashboardContainer from "./Dashboard/DashboardContainer";
// import Login from "./Auth/Login";
import { PageNotFound } from "../common";
// import { userMe } from "../redux/services/UserServices";

function AuthenticationComponent() {
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  // const isLoggedIn = useSelector(
  //   (state: RootState) => state?.userState?.isLoggedIn
  // );
  const isLoggedIn = !!localStorage.getItem("token");
  console.log("isLoggedIn", isLoggedIn);

  // useEffect for checking authentication
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate(PATH_DASHBOARD);
  //     dispatch(userMe("CMORug2"));
  //   } else {
  //     navigate(PATH_LOGIN);
  // }
  // }, [isLoggedIn, navigate]);
  // }, [dispatch, isLoggedIn, navigate]);

  // render those components whose route needs authentication
  const renderAuthenticatedComponents = () => {
    console.log("renderAuthenticatedComponents");
    return (
      <>
        <Route path={PATH_DASHBOARD} element={<DashboardContainer />} />
        <Route element={<PageNotFound />} />
      </>
    );
  };

  // render default component
  const renderDefaultComponent = () => {
    console.log("renderDefaultComponent");
    // return <Route path={PATH_LOGIN} element={<Login />} />;
    return <Navigate to={PATH_LOGIN} replace />;
  };

  /* ********** Main return statement of this component ********** */
  return isLoggedIn ? (
    <Routes>
      <>{renderAuthenticatedComponents()}</>
    </Routes>
  ) : (
    renderDefaultComponent()
  );
}

export default AuthenticationComponent;
