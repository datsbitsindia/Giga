import React from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { setAxiosDefault, setToken } from "./axiosdefaults";
import { useAuth } from "./context/auth-context";
import AddUser from "./views/AddUser/AddUser";
import UserLogin from "./pages/userLogin";
import UserSignup from "./pages/UserSignup";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <Route path="/home" component={home} />
        <Route path="/login" component={UserLogin} />
        <Route path="/signup" component={UserSignup} />
        <Route path="/admin/login" component={Login} />
        <Route path="/admin/user-list" component={AdminPage} />
        <Route path="/admin/add-user" component={AddUser} />
      </BrowserRouter>
    </React.Suspense>
  );
};

export default withRouter(App);
