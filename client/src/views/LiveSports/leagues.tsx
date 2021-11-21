// @ts-nocheck
import axios from "axios";
import { Button, message, Row, Card, Collapse } from "antd";
import { useAuth } from "../../context/auth-context";

import { asyncWrap } from "../../utils/utils";
import { useEffect, useState } from "react";
import LeagueMatches from "./LeagueMatches";
import MatchScore from "./matchScore";
import BetModal from "./BetModal";
import { Redirect } from "react-router-dom";

const { Panel } = Collapse;

const Leagues = (props: any) => {
  const { sportsid } = props;
  const [matchId, setMatchId] = useState<any>();
  const [leagues, setLeagues] = useState<any>();
  const [leagueList, setLeagueList] = useState<any>([]);
  const [gamedata, setgamedata] = useState<any>();
  const [matches, setMatches] = useState<any>();
  const [tableData, setTableData] = useState<any>([]);
  const [currentMatchId, setCurrentMatchId] = useState<any>("");
  const [openBet, setOpenBet] = useState<boolean>(false);

  const [eventName, setEventName] = useState<string>();
  const [betId, setBetId] = useState<number>();
  const [fiId, setFiId] = useState<number>();
  const [odValue, setOdValue] = useState<string>();
  const [marketGroup, setMarketGroup] = useState<string>();

  const { user } = useAuth();

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
    const aTables = [];
    let table: any;
    for (let i = 0; i < rawData.length; i++) {
      const item = rawData[i];
      const { type, NA, OD, ID, SU, IT, FI } = item;
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
            table.rows.push({
              [NA || table.columns[table.rows.length]]: OD,
              ID,
              FI,
              SU,
            });
          } else if (NA) {
            table.rows.push({ [NA]: NA, FI, ID, SU });
          }
          break;
        default:
          break;
      }
    }
    if (table?.title !== aTables[aTables.length - 1]?.title) {
      aTables.push(table);
    }
    return aTables;
  };

  const leagueParser = (rawData: any) => {
    let LeagueData = [];
    let leagueList = [];
    console.log(rawData);
    for (let i = 0; i < rawData.length; i++) {
      if (i === 0) {
        setMatchId(rawData[i].league.id);
      }
      if (rawData[i].league && rawData[i].league.id) {
        if (LeagueData.indexOf(rawData[i].league.id) === -1) {
          LeagueData.push(rawData[i].league.id);
          leagueList.push(rawData[i].league);
        }
      }
    }
    console.log(leagueList);
    return leagueList;
  };

  const getMatchesData = async () => {
    console.log(currentMatchId);
    if (currentMatchId) {
      const [err, result] = await asyncWrap(
        axios.get(`/api/matches?match_id=${currentMatchId}`)
      );
      if (err) {
        return message.error({
          content: "something went wrong",
          style: { margintop: "5vh" },
        });
      }
      console.log(result.data.data.results);
      setTableData(tableParser(result.data.data.results[0]));
      setgamedata(result.data.data.results[0]);
    }
  };

  const getMatchesScore = async (Id) => {
    const [err, result] = await asyncWrap(
      axios.get(`/api/matches?match_id=` + Id)
    );
    if (err) {
      return message.error({
        content: "something went wrong",
        style: { margintop: "5vh" },
      });
    }
    return tableParser(result.data.data.results[0]);
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
    setLeagueList(leagueParser(result.data.data.results));
    setLeagues(result.data.data.results);
  };

  const ShowMatchList = () => {
    if (matchId && leagues) {
      console.log(leagues);
      return leagues.map((item, i) => {
        if (item.league.id === matchId) {
          return (
            <div onClick={() => setCurrentMatchId(item.id)}>
              {/* <span>{new Date(parseInt(item.time)).toString()}</span> */}
              <span>{item.home.name}</span>
              <span>{item.away.name}</span>
              {/* {getMatchesScore(item.id)} */}
              <MatchScore matchId={item.id}></MatchScore>
            </div>
          );
        }
      });
    } else {
      return "";
    }
  };

  const LeagueListTable = () => {
    return leagueList.map((item, i) => {
      if (i > 7) {
        return "";
      }
      return (
        <Button style={{ width: "250px" }} onClick={() => setMatchId(item.id)}>
          {item.name}
        </Button>
      );
    });
  };
  // need to add logic of rediect
  // const CheckUserLoggedIn = () => {
  //   if (!user) {
  //     props.history.push('/login')
  //   } else {
  //     setOpenBet(true);
  //   }
  // };

  const SetValues = (eventName, fiId, betId, odValue, marketGroup) => {
    setFiId(fiId);
    setBetId(betId);
    setEventName(eventName);
    setOdValue(odValue);
    setMarketGroup(marketGroup);
    setOpenBet(true);
  };

  const AddTable = () => {
    return tableData.map((item, i) => {
      return (
        <Collapse activeKey={i}>
          <Panel header={item.title} key={i}>
            {item.columns &&
              item.columns.map((col, keys) => {
                return <span>{col}</span>;
              })}

            {item.rows.map((row) => {
              return (
                <span>
                  {Object.keys(row).map(function (key, index) {
                    return (
                      <div>
                        {key !== "ID" && key !== "FI" && key !== "SU" ? (
                          <Button
                            onClick={() =>
                              SetValues(
                                item.title,
                                row.FI,
                                row.ID,
                                row[key],
                                item.title
                              )
                            }
                          >
                            <span>{key}</span>:<span>{row[key]}</span>{" "}
                          </Button>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                </span>
              );
            })}
          </Panel>
        </Collapse>
      );
    });
  };

  useEffect(() => {
    setLeagues(null);
    // getMatchesData();
    getData();
  }, [sportsid]);

  useEffect(() => {
    ShowMatchList();
  }, [leagues]);

  useEffect(() => {
    getMatchesData();
  }, [currentMatchId]);

  return (
    <Card title="Top Leagues">
      {openBet && (
        <BetModal
          visible={openBet}
          setVisible={setOpenBet}
          betId={betId}
          fiId={fiId}
          eventName={eventName}
          sportsId={sportsid}
          odValue={odValue}
        />
      )}
      {!currentMatchId ? (
        <>
          <Row style={{ display: "flex", justifyContent: "space-around" }}>
            {LeagueListTable()}
          </Row>
          <Card>{ShowMatchList()}</Card>
        </>
      ) : (
        <Card>{tableData && AddTable()}</Card>
      )}
    </Card>
  );
};

export default Leagues;
