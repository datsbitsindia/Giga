import { Layout, Menu } from "antd";
import UserDetails from "../views/userDetails/UserDetails";
import AddUser from "../views/AddUser/AddUser";
import { PrivateRoute } from "./PrivateRoute";
import { Switch } from "react-router-dom";
import { BrowserRouter, Route, withRouter } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const AdminHome = () => {
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
          <Menu.Item key="2">User List</Menu.Item>
          <Menu.Item key="3">Market Analysis</Menu.Item>
          <Menu.Item key="4">Live Market</Menu.Item>
          <Menu.Item key="5">Reports</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "50px 50px 0px 50px" }}>
      {/* <BrowserRouter> */}
        <Switch>
          <Route
            // allowedRoles={["SuperAdmin"]}
            path="/admin/user-list"
            component={UserDetails}
          />
          <Route
            // allowedRoles={["SuperAdmin"]}
            path="/add-user"
            component={AddUser}
          />
        </Switch>
      {/* </BrowserRouter> */}
      </Content>
      <Footer style={{ textAlign: "center" }}>GigaBetz ©2021</Footer>
    </Layout>
  );
};

export default AdminHome;
