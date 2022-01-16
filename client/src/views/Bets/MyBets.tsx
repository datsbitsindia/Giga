import { useEffect, useState } from "react";
import { Tabs, message } from "antd";
import { asyncWrap } from "../../utils/utils";
import axios from "axios";

const { TabPane } = Tabs;

const Mybets = () => {
  const [bets, setBets] = useState<any>();

  const getBets = async () => {
    const [err, result] = await asyncWrap(axios.get("/bets"));
    if (err) {
      message.error({
        content: "Somthing went wrong!",
        style: { marginTop: "5vh" },
      });
    }
  };

  useEffect(() => {
    getBets();
  }, []);

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Active" key="1">
        Active Bets
      </TabPane>
      <TabPane tab="Settled" key="2">
        Settled Bets
      </TabPane>
    </Tabs>
  );
};

export default Mybets;
