import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PATH_LOGIN, PATH_ROOT } from "./constants";
import Login from "./components/Auth";
import AuthenticationComponent from "./components/AuthenticationComponent";
import BodyGlobalStyle from "./style/css/Globalstyle";

function App() {
  /* ********** Main return statement of this component ********** */
  return (
    <BrowserRouter>
      <BodyGlobalStyle />
      <Routes>
        {/*  Login component */}
        <Route path={PATH_LOGIN} element={<Login />} />
        {/*  Default component */}
        <Route path={PATH_ROOT} element={<AuthenticationComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
