import React, { useEffect } from "react";

import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useAppDispatch } from "../store";
import {
  PATH_DASHBOARD,
  PATH_GALLERY,
  PATH_LATEST_NEWS,
  PATH_LOGIN,
  PATH_RANKING,
  PATH_ROOT,
  PATH_SCHEDULE,
  PATH_STATISTICS,
} from "../constants";
import DashboardContainer from "./Dashboard/DashboardContainer";
import { DocumentPageTitle, Footer, Header, PageNotFound } from "../common";
import { userMe } from "../redux/services/UserServices";
import StatisticsContainer from "./Statistics/StatisticsContainer";
import ScheduleContainer from "./Schedule/ScheduleContainer";
import RankingContainer from "./Ranking/RankingContainer";
import LatestNewsContaner from "./LatestNews/LatestNewsContaner";
import GalleryContainer from "./Gallery/GalleryContainer";

function AuthenticationComponent() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = localStorage.getItem("token");

  // useEffect for checking authentication
  useEffect(() => {
    DocumentPageTitle(location);
  }, [dispatch, isLoggedIn, location, navigate]);

  // useEffect for rendering page title
  useEffect(() => {
    console.log("isLoggedIn - auth", isLoggedIn);
    if (isLoggedIn) {
      if (location?.pathname?.includes(PATH_ROOT)) {
        navigate(PATH_DASHBOARD);
        console.log("navigate(PATH_DASHBOARD) inside authentication component");
      }

      dispatch(userMe("CMORug2"));
    } else {
      navigate(PATH_LOGIN);
      console.log("navigate(PATH_LOGIN) inside authentication component");
    }
  }, [dispatch, isLoggedIn, location, navigate]);

  // render those components whose route needs authentication
  const renderAuthenticatedComponents = () => {
    return (
      <>
        <Route path={PATH_DASHBOARD} element={<DashboardContainer />} />
        <Route path={PATH_SCHEDULE} element={<ScheduleContainer />} />
        <Route path={PATH_LATEST_NEWS} element={<LatestNewsContaner />} />
        <Route path={PATH_STATISTICS} element={<StatisticsContainer />} />
        <Route path={PATH_RANKING} element={<RankingContainer />} />
        <Route path={PATH_GALLERY} element={<GalleryContainer />} />
        <Route path={PATH_ROOT} element={<PageNotFound />} />
      </>
    );
  };

  // render default component
  const renderDefaultComponent = () => {
    return <Navigate to={PATH_LOGIN} replace />;
  };

  // display header
  const displayHeader = () => {
    return <Header />;
  };

  // display footer
  const displayFooter = () => {
    return <Footer />;
  };

  /* ********** Main return statement of this component ********** */
  return isLoggedIn ? (
    <>
      {displayHeader()}
      <Routes>
        <>{renderAuthenticatedComponents()}</>
      </Routes>
      {displayFooter()}
    </>
  ) : (
    renderDefaultComponent()
  );
}

export default AuthenticationComponent;
