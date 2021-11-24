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
            // <div >
            //   {/* <span>{new Date(parseInt(item.time)).toString()}</span> */}
            //   <span>{item.home.name}</span>
            //   <span>{item.away.name}</span>
            //   {/* {getMatchesScore(item.id)} */}
            //   <MatchScore matchId={item.id}></MatchScore>
            // </div>
            <div className="oneLineEventItem" onClick={() => setCurrentMatchId(item.id)}>
            <article className="eventListItem">
            <div className="eventHolder">
                <div className="eventDetails">
                <header>
                    <div className="headerEventDetails">
                    <div
                        className="eventSummaryContainer"
                        data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[soccer].TopGroupEventListWidget[soccer].EventTableListWidget[soccer_spain_la-liga, soccer_spain_la-liga].EventListWidget[soccer_spain_la-liga, 2021-11-20].EventSummaryWidgetContainer[8559838]"
                    >
                        <div
                        className="oneLineScoreboard soccer upcoming"
                        data-widget="EventSummaryWidget[soccer_spain_la-liga, 8559838]"
                        >
                        <div className="scoreAndTime">
                            <div
                            className="scoresContainer empty"
                            data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[soccer].TopGroupEventListWidget[soccer].EventTableListWidget[soccer_spain_la-liga, soccer_spain_la-liga].EventListWidget[soccer_spain_la-liga, 2021-11-20].EventSummaryWidget[soccer_spain_la-liga, 8559838].ScoreWidget[8559838]"
                            />
                            <div className="oneLineDateTime">
                            -
                            </div>
                        </div>
                        <div className="scoreboardInfoNamesWrapper">
                            <a
                            className="scoreboardInfoNames"
                            href="#/evt/8559838"
                            >
                            <div className="teamNameHome teamName">
                                <div className="teamNameTextWrapper">
                                <span className="serveIndicator homeServe">
                                    ●
                                </span>
                                <span className="teamNameEllipsisContainer">
                                    <span className="teamNameFirstPart teamNameHomeTextFirstPart">
                                    {item.home.name}
                                    </span>
                                    <span className="teamNameSecondPart teamNameHomeTextSecondPart" />
                                </span>
                                <span className="teamNameTextSeparator">
                                    -
                                </span>
                                </div>
                            </div>
                            <div className="teamNameAway teamName">
                                <div className="teamNameTextWrapper">
                                <span className="teamNameEllipsisContainer">
                                    <span className="teamNameFirstPart teamNameAwayTextFirstPart smallFont">
                                    {item.away.name}
                                    </span>
                                    <span className="teamNameSecondPart teamNameAwayTextSecondPart" />
                                </span>
                                <span className="serveIndicator awayServe">
                                    ●
                                </span>
                                </div>
                            </div>
                            <div className="eventNameWrapper">
                                <span className="eventName displayNone" />
                            </div>
                            </a>
                        </div>
                        <div className="infoTextContainer infoText">
                            <div className="periodComment displayNone" />
                            <div className="secondaryScoreContainer empty" />
                            <div className="periodSeparator displayNone">
                            ,
                            </div>
                            <div className="time displayNone" />
                        </div>
                        <div
                            className="quickBuildIndicatorContainer"
                            data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[soccer].TopGroupEventListWidget[soccer].EventTableListWidget[soccer_spain_la-liga, soccer_spain_la-liga].EventListWidget[soccer_spain_la-liga, 2021-11-20].EventSummaryWidget[soccer_spain_la-liga, 8559838].QuickBuildIndicator[8559838]"
                        >
                            <div
                            className="quickBuildIndicator quickBuildIndicatorContainer"
                            data-widget="QuickBuildIndicatorWidget"
                            >
                            <div className="quickBuildIcon icon-hash" />
                            </div>
                        </div>
                        <div
                            className="cashOutMarketIndicatorContainer"
                            data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[soccer].TopGroupEventListWidget[soccer].EventTableListWidget[soccer_spain_la-liga, soccer_spain_la-liga].EventListWidget[soccer_spain_la-liga, 2021-11-20].EventSummaryWidget[soccer_spain_la-liga, 8559838].CashOutMarketIndicator[8559838]"
                        >
                            <div
                            className="cashOutIndicator"
                            data-widget="CashOutMarketIndicatorWidget[214647319]"
                            >
                            <div className="cashOutIcon icon-cashout" />
                            </div>
                        </div>
                        <div
                            className="liveStatusIconsContainer"
                            data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[soccer].TopGroupEventListWidget[soccer].EventTableListWidget[soccer_spain_la-liga, soccer_spain_la-liga].EventListWidget[soccer_spain_la-liga, 2021-11-20].EventSummaryWidget[soccer_spain_la-liga, 8559838].EventStatus[8559838]"
                        >
                            <div
                            className="eventStatusContainer"
                            data-widget="EventStatusWidget[8559838]"
                            >
                            <div className="eventStatus">
                                <div className="eventStatusText" />
                                <div className="eventStatusIcon icon-channel-inplay upcomingEventStatus" />
                                <div className="liveStreamingIcon displayNone" />
                                <div className="statisticsIcon" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                </div>
                <div className="eventMarket">
                <div
                    className="switchableMarketContainer"
                    data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[soccer].TopGroupEventListWidget[soccer].EventTableListWidget[soccer_spain_la-liga, soccer_spain_la-liga].EventListWidget[soccer_spain_la-liga, 2021-11-20].SwitchableMarketWidgetContainer[8559838]"
                >
                    <div
                    className="switchableMarketLayout"
                    data-widget="SwitchableMarkeOnScheduletWidget[soccer_spain_la-liga_2021-11-20, 8559838]"
                    >
                    <div className="moreBetsButton moreBets displayNone">
                        <div
                        className="button"
                        data-tap-recogniser="true"
                        >
                        More
                        Bets
                        </div>
                    </div>
                    <div
                        className="container"
                        data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[soccer].TopGroupEventListWidget[soccer].EventTableListWidget[soccer_spain_la-liga, soccer_spain_la-liga].EventListWidget[soccer_spain_la-liga, 2021-11-20].MarketWidgetContainer[8559838]"
                    >
                        <div
                        className="simplifiedStandardMarket"
                        data-widget="StandardMarketWidget[214647319]"
                        >
                        <div className="suspended displayNone">
                            Suspended
                        </div>
                        <div
                            className="outcomeCollection outcomes3x"
                            data-tap-recogniser="true"
                        >
                            <div className="moreMarkets displayNone">
                            <div
                                className="button outcomeButton"
                                data-tap-recogniser="true"
                            >
                                <div className="content">
                                More
                                Bets
                                </div>
                            </div>
                            </div>
                            <MatchScore matchId={item.id}></MatchScore>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="quickbetContainer empty" />
            </article>
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
        <div  onClick={() => setMatchId(item.id)}
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
                    <div className="titleText">
                    {item.name}
                    </div>
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
                          <span>
                            {/* Home */}
                          </span>
                        </div>
                        <div className="1">
                          <span>
                            {/* Away */}
                          </span>
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
                  >
                  </div>
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

  const calculate = (odValue) => {
    let val;
    if (odValue !== "0/0") {
      val = eval(odValue);
      val = val + 1;
      return val.toFixed(2);
    }
    return 0;
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
                          <Button disabled = {parseInt(row.SU)}
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
                            <span>{key}</span>:
                            <span>{calculate(row[key])}</span>{" "}
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
    console.log('new');
    setLeagues(null);
    // getMatchesData();
    getData();
    setCurrentMatchId('')
  }, [sportsid]);

  useEffect(() => {
    console.log('in');
    setCurrentMatchId('');
    setTableData([]);
  }, [changeID])

  useEffect(() => {
    setCurrentMatchId('');
    ShowMatchList();
  }, [leagues]);

  useEffect(() => {
    getMatchesData();
    setCurrentMatchId('');
    setTableData([]);
  }, [currentMatchId]);

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
    <div
                                    className="9255 node"
                                    data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.9255"
                                  >
                                    <div
                                      className="topCategoriesFirstGroup homePageTheme bottomSeparator"
                                      data-widget="TopCategoriesFirstGroupWidget"
                                    >
                                      {tableData.length == 0 ? <>
                                    <div className="cricket">
                                        <article className="topCategoryFirstGroupWrapper">
                                          <div
                                            className="categoryTopGroupContainer"
                                            data-container="CATEGORY_TOP_GROUP_CONTAINER.cricket"
                                          >
                                            <div
                                              className="categoryTopGroupWithHeaderComponent"
                                              data-widget="CategoryTopGroupWithHeaderWidget[cricket]"
                                            >
                                              <header className="headerBar topCategoryHeader">
                                                <div
                                                  className="headerWidgetContainer"
                                                  data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[cricket].cricket.HEADER_WIDGET_CONTAINER"
                                                >
                                                  <div
                                                    className="headerBar topCategory"
                                                    data-widget="DynamicHeaderBarWidget[cricket]"
                                                  >
                                                    <div className="headerBarContent">
                                                      <div className="headerIcon">
                                                        <img
                                                          className="iconContainer ic_sports"
                                                          src="img/015-cricket.png"
                                                        />
                                                      </div>
                                                      <div className="headerTitle">
                                                        Top League
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                
                                              </header>
                                              {LeagueListTable()}
                                            </div>
                                          </div>
                                        </article>
                                      </div>
                                      <div className="soccer">
                                        <article className="topCategoryFirstGroupWrapper">
                                          <div
                                            className="categoryTopGroupContainer"
                                            data-container="CATEGORY_TOP_GROUP_CONTAINER.soccer"
                                          >
                                            <div
                                              className="categoryTopGroupWithHeaderComponent"
                                              data-widget="CategoryTopGroupWithHeaderWidget[soccer]"
                                            >
                                              <header className="headerBar topCategoryHeader">
                                                <div
                                                  className="headerWidgetContainer"
                                                  data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[soccer].soccer.HEADER_WIDGET_CONTAINER"
                                                >
                                                  <div
                                                    className="headerBar topCategory"
                                                    data-widget="DynamicHeaderBarWidget[soccer]"
                                                  >
                                                    <div className="headerBarContent">
                                                      <div className="headerIcon">
                                                        <img
                                                          className="iconContainer ic_sports"
                                                          src="img/045-soccer.png"
                                                        />
                                                      </div>
                                                      <div className="headerTitle">
                                                        Football
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="seeMoreButtonWidgetContainer"
                                                  data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[soccer].soccer.SEE_MORE_WIDGET_CONTAINER"
                                                >
                                                  <div
                                                    className="button icon-arrow-right simpleText"
                                                    data-tap-recogniser="true"
                                                    data-widget="SimpleTextWidget[b08697d4-195b-4f5e-9fda-82a546eb1558, See more Football]"
                                                  >
                                                    <span className="innerText">
                                                      {/* See more Football */}
                                                    </span>
                                                  </div>
                                                </div>
                                              </header>
                                              <div
                                                className="mainContent"
                                                data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[soccer].soccer.MAIN_WIDGET_CONTAINER"
                                              >
                                                <div
                                                  className="topGroupEventList"
                                                  data-widget="TopGroupEventListWidget[soccer]"
                                                >
                                               
                                                  <div
                                                    className="eventListContainer"
                                                    data-container="EVENT_TABLE_LIST[SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[soccer].TopGroupEventListWidget[soccer],soccer]"
                                                  >
                                                    <div
                                                      className="eventTableItemCollection"
                                                      data-widget="EventTableListWidget[soccer_spain_la-liga, soccer_spain_la-liga]"
                                                    >
                                                      <div className="collapsablePanel soccer_spain_la-liga_2021-11-20">
                                                        
                                                        <div
                                                          className="collapsableContent"
                                                          // collapsed="false"
                                                          data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[soccer].TopGroupEventListWidget[soccer].EventTableListWidget[soccer_spain_la-liga, soccer_spain_la-liga].EventListWidgetContainer[soccer_spain_la-liga_2021-11-20]"
                                                        >
                                                          <div
                                                            className="eventItemCollection"
                                                            data-tap-recogniser="true"
                                                            data-widget="EventListWidget[soccer_spain_la-liga, 2021-11-20]"
                                                          >
                                                            <div class="collapsableHeader" data-tap-recogniser="true"><div class="arrow iconHolder"><div class=""></div></div><div class="titleTextWrapper"><div class="titleText"></div><div class="subTitle"></div></div><div class="Message"></div><div class="marketFilteringHeaderContainer" data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[soccer].TopGroupEventListWidget[soccer].EventTableListWidget[soccer_spain_la-liga, soccer_spain_la-liga].MarketFilteringWidgetContainer[soccer_spain_la-liga_2021-11-22]"><div class="marketFilteringHeaderWrapper" data-widget="MarketFilteringHeaderWidget[soccer_spain_la-liga_2021-11-22, soccer_spain_la-liga]"><div class="headerLoaderWrapper displayNone"><div class="loading"></div></div><div class="headerContainer headers3x"><div><span>Home</span></div><div><span>Draw</span></div><div><span>Away</span></div></div></div></div></div>
                                                            {ShowMatchList()}
                                                            
                                                          </div>
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
                                            </div>
                                          </div>
                                        </article>
                                      </div> </> : ''}
                                      {tableData && AddTable()}
                                      </div> 
                                      </div>
    </>
  );
};

export default Leagues;
