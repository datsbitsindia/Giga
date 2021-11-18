// @ts-nocheck
import axios from "axios";
import { Button, message, Row, Col, Card, Table, Collapse } from "antd";

import { asyncWrap } from "../../utils/utils";
import { useEffect, useState } from "react";
import LeagueMatches from "./LeagueMatches";

const { Panel } = Collapse;

const Leagues = (props: any) => {
  const { sportsid } = props;
  const [matchId, setMatchId] = useState<any>();
  const [leagues, setLeagues] = useState<any>();
  const [gamedata, setgamedata] = useState<any>();
  const [matches, setMatches] = useState<any>();

  const columns = [
    {
      title: "Matches",
      render: (item: any) => (
        <p>
          {item.home.name} - {item.away.name}
        </p>
      ),
    },
    {
      title: "Home",
    },
    {
      title: "Draw",
    },
    {
      title: "Away",
    },
  ];

  const TABLE_CONSTANTS = {
    MG: "MG",
    MA: "MA",
    PA: "PA",
    NA: "NA",
  };

  const tableParser = (rawData: any) => {
    console.log(rawData);
    const aTables = [];
    let table: any;
    for (let i = 0; i < rawData[0].length; i++) {
      // console.log(rawData[i]);
      const item = rawData[0][i];
      console.log(item);
      const { type, NA, OD } = item;
      console.log(type);
      switch (type) {
        case TABLE_CONSTANTS.MG:
          if (table) {
            aTables.push(table);
          }
          table = new Object({
            title: NA,
            columns: [],
            rows: [],
          });
          break;
        case TABLE_CONSTANTS.MA:
          table.columns.push(NA);
          break;
        case TABLE_CONSTANTS.PA:
          if (OD) {
            table.rows.push({ [NA || table.columns[table.rows.length]]: OD });
          } else if (NA) {
            table.rows.push({ [NA]: NA });
          }
          break;
        default:
          break;
      }
    }
    console.log(aTables);
    return aTables;
  };

  const getMatchesData = async () => {
    const [err, result] = await asyncWrap(
      axios.get(`/api/matches?match_id=110903573`)
    );
    if (err) {
      return message.error({
        content: "something went wrong",
        style: { margintop: "5vh" },
      });
    }
    // console.log(result.data.data.results);
    setgamedata(result.data.data.results);
    console.log(tableParser(result.data.data.results));
  };

  const getData = async () => {
    const [err, result] = await asyncWrap(
      axios.get(`/api/sports?sports_id=${sportsid}`)
    );
    if (err) {
      return message.error({
        content: "something went wrong",
        style: { margintop: "5vh" },
      });
    }
    setLeagues(result.data.data.results);
    // setMatchId(leagues[0].id);
  };

  useEffect(() => {
    setLeagues(null);
    getMatchesData();
    getData();
  }, [sportsid]);

  return (
    <Card title="Top Leagues">
      {console.log(gamedata)}
      {leagues && (
        <div>
          <Row style={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              style={{ width: "250px" }}
              onClick={() => setMatchId(leagues[0]?.league.id)}
            >
              {leagues[0]?.league.name}
            </Button>
            <Button
              style={{ width: "250px" }}
              onClick={() => setMatchId(leagues[1]?.league.id)}
            >
              {leagues[1]?.league.name}
            </Button>
            <Button
              style={{ width: "250px" }}
              onClick={() => setMatchId(leagues[2]?.league.id)}
            >
              {leagues[2]?.league.name}
            </Button>
            <Button
              style={{ width: "250px" }}
              onClick={() => setMatchId(leagues[3]?.league.id)}
            >
              {leagues[3]?.league.name}
            </Button>
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "10px",
              marginBottom: "30px",
            }}
          >
            <Button
              style={{ width: "250px" }}
              onClick={() => setMatchId(leagues[4]?.league.id)}
            >
              {leagues[4]?.league.name}
            </Button>
            <Button
              style={{ width: "250px" }}
              onClick={() => setMatchId(leagues[5]?.league.id)}
            >
              {leagues[5]?.league.name}
            </Button>
            <Button
              style={{ width: "250px" }}
              onClick={() => setMatchId(leagues[6]?.league.id)}
            >
              {leagues[6]?.league.name}
            </Button>
            <Button
              style={{ width: "250px" }}
              onClick={() => setMatchId(leagues[7]?.league.id)}
            >
              {leagues[7]?.league.name}
            </Button>
          </Row>
          {/* <Card title={leagues[0].league.name}>
            <Table
              dataSource={matches}
              columns={columns}
              bordered
              pagination={false}
            />
          </Card> */}
          {/* <div>
            {gamedata.map((item, i) => (
              <Collapse>
                {item.type === "MG" ? <Panel key={i} header={item.NA} /> : null}
              </Collapse>
            ))}
          </div> */}
        </div>
      )}
    </Card>
  );
};

export default Leagues;
