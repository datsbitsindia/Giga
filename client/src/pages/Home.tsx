
import { Layout, Menu } from "antd";
import cricket from '../img/015-cricket.png';

import { Switch, Route } from "react-router-dom";
import AllSports from "../views/LiveSports/allSports";
import { useAuth } from "../context/auth-context";

import "../css/spinsporticons.woff2";
import "../css/style.css";
import "../css/Interface_Normal.woff2";
import "../css/Interface_Bold.woff2";
import "../css/demo.css";
import "../css/demo2.css";
import "../css/EventListsDesktop.min.css";
import "../css/EventListsDesktop.min.css";

// import "../css/PromotionsCoreDesktop.min.css";
import "../css/PromotionsSportsDesktop.min.css";
import "../css/dynamicfilteringdesktop.min.css";
import "../css/eventsdesktop.min.css";
import "../css/quicksearchdesktop.min.css";
import "../css/SportsCoreDesktop.min.css";

// import "../js/AceBootstrap.min.js";
// import "../js/custom2.js";

const { Header, Content, Footer } = Layout;

const Home = (props: any) => {
  const { user } = useAuth();

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <h1> Hello</h1>
      <Route exact path="/sports" component={AllSports} />
    </div>
  );
};

export default Home;
