// @ts-nocheck
import axios from "axios";
import { Button, message, Row, Col, Card, Table, Collapse } from "antd";

import { asyncWrap } from "../../utils/utils";
import { useEffect, useState } from "react";
import LeagueMatches from "./LeagueMatches";
import matchdata from "./matchData";

const { Panel } = Collapse;

const MatchScore = (props: any) => {
  const { matchId } = props;
  //   const [matchId, setMatchId] = useState<any>();
  const [leagues, setLeagues] = useState<any>();
  const [leagueList, setLeagueList] = useState<any>([]);
  const [gamedata, setgamedata] = useState<any>([]);
  const [matches, setMatches] = useState<any>();
  const [tableData, setTableData] = useState<any>([]);
  const [home, setHome] = useState<any>("-");
  const [draw, setDraw] = useState<any>("-");
  const [away, setAway] = useState<any>("-");

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
    return aTables;
  };

  const getMatchesScore = () => {
    // const [err, result] = await asyncWrap(
    //   axios.get(`/api/matches?match_id=${matchId}`)
    // );
    // if (err) {
    //   return message.error({
    //     content: "something went wrong",
    //     style: { margintop: "5vh" },
    //   });
    // }
    // console.log(tableParser(result.data.data.results[0]));
    setgamedata(tableParser(matchdata));
  };

  const showScore = () => {
    console.log(gamedata);
    gamedata.map((item, i) => {
      if (item.title === "Fulltime Result") {
        setHome(
          (eval(gamedata[0].rows[0][Object.keys(item.rows[0])[0]]) + 1).toFixed(
            2
          )
        );
        setDraw(
          (eval(item.rows[1][Object.keys(item.rows[1])[0]]) + 1).toFixed(2)
        );
        setAway(
          (eval(item.rows[2][Object.keys(item.rows[2])[0]]) + 1).toFixed(2)
        );
      }
    });
  };

  useEffect(() => {
    getMatchesScore();
  }, []);

  useEffect(() => {
    showScore();
  }, [gamedata]);

  return (
    <>
      <div className="col-lg-4">
        <div
          className="number d-flex"
          style={{
            borderBottom: "1px solid rgba(0,0,0,.125)",
          }}
        >
          {console.log(home, draw, away)}
          <p className="border">{home}</p>
          <p className="border">{draw}</p>
          <p>{away}</p>
        </div>
      </div>
      {/* <div className="baseOutcomeItem">
        <div className="outcomeButton">
          <div className="oddsChange" />
          <div className="cornerMarker" />
          <div className="lineContainer displayNone">
            <div className="lineAbove" />
            <div className="line" />
            <div className="lineBelow" />
          </div>
          <div className="oddsDisplay">
            <div className="odds">{home}</div>
          </div>
        </div>
      </div>
      <div className="baseOutcomeItem">
        <div className="outcomeButton">
          <div className="oddsChange" />
          <div className="cornerMarker" />
          <div className="lineContainer displayNone">
            <div className="lineAbove" />
            <div className="line" />
            <div className="lineBelow" />
          </div>
          <div className="oddsDisplay">
            <div className="odds">{draw}</div>
          </div>
        </div>
      </div>
      <div className="baseOutcomeItem">
        <div className="outcomeButton">
          <div className="oddsChange" />
          <div className="cornerMarker" />
          <div className="lineContainer displayNone">
            <div className="lineAbove" />
            <div className="line" />
            <div className="lineBelow" />
          </div>
          <div className="oddsDisplay">
            <div className="odds">{away}</div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default MatchScore;
