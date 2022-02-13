// @ts-nocheck
import axios from "axios";
import { Descriptions, message, Collapse, Row, Col } from "antd";
import { useAuth } from "../../context/auth-context";

import { asyncWrap } from "../../utils/utils";
import { useEffect, useState } from "react";
import LeagueMatches from "./LeagueMatches";
import MatchScore from "./matchScore";
import BetModal from "./BetModal";
import "../../css/style1.css";
import { withRouter } from "react-router-dom";

const { Panel } = Collapse;

const Leagues = (props: any) => {
  const { sportsid, changeID } = props;
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
    let row = -1;
    let column = -1;

    rawData.forEach(({ type, NA, OD }) => {
      switch (type) {
        case TABLE_CONSTANTS.MG:
          if (table) {
            row = -1;
            column = -1;
            aTables.push(table);
          }
          table = {
            title: NA,
            columns: [],
            rows: [],
          };
          break;

        case TABLE_CONSTANTS.MA:
          column++;
          row = -1;
          table.columns.push(NA);
          break;

        case TABLE_CONSTANTS.PA:
          {
            row++;
            const key = table.columns[column] || NA;
            const cellValue = OD || NA;
            const rowItem = table.rows[row];
            table.rows[row] = rowItem?.length
              ? [...rowItem, { [key]: cellValue }]
              : [{ [key]: cellValue }];
          }
          break;

        default:
          break;
      }
    });

    if (table && table?.title !== aTables[aTables.length - 1]?.title) {
      aTables.push(table);
    }
    console.log("atables", aTables);
    return aTables;
  };

  const leagueParser = (rawData: any) => {
    let LeagueData = [];
    let leagueList = [];
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
      return leagues.map((item, i) => {
        if (item.league.id === matchId) {
          return (
            <>
              <div
                className="col-lg-8 "
                onClick={() => setCurrentMatchId(item.id)}
              >
                <div
                  className="data"
                  style={{
                    borderBottom: "1px solid rgba(0,0,0,.125)",
                  }}
                >
                  {/* <span>01:30</span> */}
                  <p>
                    {item.home.name} - {item.away.name}
                  </p>
                  <div className=" icon-red icon-cashout" />
                  <div className=" icon-red icon-channel-inplay " />
                </div>
              </div>
              <MatchScore matchId={item.id} />
            </>
          );
        }
      });
    } else {
      return "";
    }
  };

  const LeagueListTable = () => {
    return leagueList.map((item, i) => {
      return (
        <div
          onClick={() => setMatchId(item.id)}
          className="mainContent"
          data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[cricket].cricket.MAIN_WIDGET_CONTAINER"
        >
          <div
            className="topGroupEventList"
            data-widget="TopGroupEventListWidget[cricket]"
          >
            <div
              className="eventListContainer"
              data-container="EVENT_TABLE_LIST[SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[cricket].TopGroupEventListWidget[cricket],cricket]"
            >
              <div
                className="eventTableItemCollection"
                data-widget="EventTableListWidget[cricket_international_twenty20-internationals, cricket_international_twenty20-internationals]"
              >
                <div className="collapsablePanel cricket_international_twenty20-internationals_2021-11-19">
                  <div
                    className="collapsableHeader"
                    // collapsed="false"
                    data-tap-recogniser="true"
                  >
                    <div className="arrow iconHolder">
                      <div className="arrowIcon icon-arrow-down" />
                    </div>
                    <div className="titleTextWrapper">
                      <div className="titleText">{item.name}</div>
                      <div className="subTitle" />
                    </div>
                    <div className="Message" />
                    <div
                      className="marketFilteringHeaderContainer"
                      data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[cricket].TopGroupEventListWidget[cricket].EventTableListWidget[cricket_international_twenty20-internationals, cricket_international_twenty20-internationals].MarketFilteringWidgetContainer[cricket_international_twenty20-internationals_2021-11-19]"
                    >
                      <div
                        className="marketFilteringHeaderWrapper"
                        data-widget="MarketFilteringHeaderWidget[cricket_international_twenty20-internationals_2021-11-19, cricket_international_twenty20-internationals]"
                      >
                        <div className="headerLoaderWrapper displayNone">
                          <div className="loading" />
                        </div>
                        <div className="headerContainer headers2x">
                          <div className="0">
                            <span>{/* Home */}</span>
                          </div>
                          <div className="1">
                            <span>{/* Away */}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="collapsableContent"
                    // collapsed="false"
                    data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[cricket].TopGroupEventListWidget[cricket].EventTableListWidget[cricket_international_twenty20-internationals, cricket_international_twenty20-internationals].EventListWidgetContainer[cricket_international_twenty20-internationals_2021-11-19]"
                  >
                    <div
                      className="eventItemCollection"
                      data-tap-recogniser="true"
                      data-widget="EventListWidget[cricket_international_twenty20-internationals, 2021-11-19]"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="spinner displayNone">
              <div className="emptyTextWrapper">
                <div className="empty displayNone">
                  <div className="emptyText" />
                </div>
                <div className="loading" />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  // need to add logic of rediect
  const CheckUserLoggedIn = () => {
    if (!user) {
      props.history.push("/login");
    } else {
      setOpenBet(true);
    }
  };

  const SetValues = (eventName, fiId, betId, odValue, marketGroup) => {
    setFiId(fiId);
    setBetId(betId);
    setEventName(eventName);
    setOdValue(odValue);
    setMarketGroup(marketGroup);
    setOpenBet(true);
  };

  const calculate = (odValue) => {
    let some = odValue.split(",");
    let result = 1;
    for (let i = 0; i < some.length; i++) {
      let val = some[i].split("/");
      result = result + val[0] / val[1];
    }
    let formattedResult = result.toFixed(2);
    if (isNaN(formattedResult)) {
      console.log("formatted result =>>>>>", odValue);
      return odValue;
    } else {
      return formattedResult;
    }
  };

  const AddTable = () => {
    return tableData.map((item, i) => {
      return (
        <Collapse>
          <Panel header={item.title} key={i}>
            {item.columns &&
              item.columns.map((col, keys) => {
                // console.log(col);
                return (
                  <>
                    <div class="card-header custom-card-header">
                      <div class="row align-items-center">
                        <div class="col-lg-6">
                          <span>{col}</span>
                          {/* <a
                          class="card-link d-flex align-items-center"
                          data-toggle="collapse"
                          href="#collapsefortin"
                        >
                          <p class=" icon-arrow-down"></p>
                        </a> */}
                          <div class="data-text"></div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}

            {item.rows.map((row) => {
              return (
                <span>
                  {row.map((od) => {
                    return (
                      <span>
                        {Object.keys(od).map((key) => {
                          return (
                            <div
                              id="accordion "
                              class="football-data highlight "
                            >
                              <div data-parent="#accordion">
                                <div class="card-body">
                                  <div class="data-wrapper ">
                                    <div class="border-bottom">
                                      <div class="row">
                                        <div class="col-lg-6">
                                          <div class="number d-flex">
                                            <Descriptions
                                              // bordered
                                              column={{
                                                xxl: 4,
                                                xl: 3,
                                                lg: 3,
                                                md: 3,
                                                sm: 2,
                                                xs: 1,
                                              }}
                                            >
                                              <Descriptions.Item label={key}>
                                                {calculate(od[key])}
                                              </Descriptions.Item>
                                            </Descriptions>
                                            {/* <p class="border">
                                              {calculate(od[key])}
                                            </p> */}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </span>
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
    getData();
    setCurrentMatchId("");
  }, [sportsid]);

  useEffect(() => {
    setCurrentMatchId("");
    setTableData([]);
  }, [changeID]);

  useEffect(() => {
    setCurrentMatchId("");
    ShowMatchList();
  }, [leagues]);

  useEffect(() => {
    getMatchesData();
    setCurrentMatchId("");
    setTableData([]);
  }, [currentMatchId]);

  const extra = () => {
    return (
      <div style={{ width: "200px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p>Home</p>
          <p>Draw</p>
          <p>Away</p>
        </div>
      </div>
    );
  };

  return (
    <>
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
      <div className="highlight">
        {leagueList.map((item, i) => (
          <Collapse onChange={() => setMatchId(item.id)} destroyInactivePanel>
            <Panel header={item.name} key={i} extra={extra()}>
              <div className="card-body">
                <div className="data-wrapper">
                  <div className="row">{matchId && ShowMatchList()}</div>
                </div>
              </div>
            </Panel>
          </Collapse>
        ))}
      </div>
      {tableData && AddTable()}
    </>
  );
};

export default withRouter(Leagues);
