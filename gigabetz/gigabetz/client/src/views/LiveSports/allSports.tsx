import axios from "axios";
import { asyncWrap } from "../../utils/utils";
import { Layout, Menu, message } from "antd";
import { useEffect, useState } from "react";
import Leagues from "./leagues";
import { Content } from "antd/lib/layout/layout";

const { Sider } = Layout;
const { SubMenu } = Menu;

const AllSports = () => {
  const [menu, setMenu] = useState<any>();
  const [sportsid, setsportsid] = useState<any>();

  const getSports = async () => {
    const [err, result] = await asyncWrap(axios.get("/sports"));
    if (err) {
      message.error({
        content: "Something went wrong",
        style: { marginTop: "5vh" },
      });
    }
    setMenu(result.data.data);
  };

  useEffect(() => {
    getSports();
  }, []);

  return (
    <div>
      <Layout>
        <Sider style={{ height: "100vh" }}>
          <div
            style={{
              paddingTop: "5px",
              height: "50px",
              color: "#fff",
              fontSize: "25px",
              backgroundColor: "#1890FF",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            All Sports
          </div>
          <Menu mode="inline" style={{ fontSize: "18px", paddingLeft: "20px" }}>
            {menu &&
              menu.map((item: any) => (
                <>
                  <Menu.Item
                    onClick={() => setsportsid(item.SportID)}
                    key={item.SportID}
                  >
                    {item.SportName}
                  </Menu.Item>
                </>
              ))}
          </Menu>
        </Sider>
        <Content style={{ height: "100vh" }}>
          {sportsid && <Leagues sportsid={sportsid} />}
        </Content>
      </Layout>
    </div>
  );
};

export default AllSports;
