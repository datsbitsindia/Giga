import React from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { setAxiosDefault, setToken } from "./axiosdefaults";
import { useAuth } from "./context/auth-context";

const Loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

const Login = React.lazy(() => import("./pages/login"));
const Home = React.lazy(() => import("./pages/Home"));
const AdminPage = React.lazy(() => import("./pages/AdminHome"));
const home = React.lazy(() => import("./pages/home1"));
const App = () => {
  const { user } = useAuth();
  setAxiosDefault();
  if (user?.token) setToken(user.token);

  return (
    <React.Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/admin/login" component={Login} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/home" component={home} />
      </BrowserRouter>
    </React.Suspense>
  );
};

export default withRouter(App);
