import { Layout, Menu } from "antd";

import { Switch, Route } from "react-router-dom";
import AllSports from "../views/LiveSports/allSports";


const { Header, Content, Footer } = Layout;

const Home = (props: any) => {
  return (
    <Layout className="layout" style={{ height: "100%" }}>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item
            style={{ fontSize: "30px", paddingRight: "100px" }}
            key="1"
          >
            GigaBetz
          </Menu.Item>
          <Menu.Item key="2" onClick={() => props.history.push("/sports")}>
            sports
          </Menu.Item>
          <Menu.Item key="3">live casino</Menu.Item>
          <Menu.Item key="4">esports</Menu.Item>
          <Menu.Item key="5">Promotions</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "50px 50px 0px 50px" }}>
        <Switch>
          <Route exact path="/" component={AllSports} />
          {/* <Route path="/sports" component={AllSports} /> */}
        </Switch>
      </Content>
      <Footer style={{ textAlign: "center" }}>GigaBetz ©2021</Footer>
    </Layout>
  );
};

export default Home;