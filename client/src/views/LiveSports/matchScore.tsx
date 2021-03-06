// @ts-nocheck
import axios from "axios";
import { Button, message, Row, Col, Card, Table, Collapse } from "antd";

import { asyncWrap } from "../../utils/utils";
import { useEffect, useState } from "react";
import LeagueMatches from "./LeagueMatches";
import { MSearch } from "@overnightjs/core";

const { Panel } = Collapse;

const MatchScore = (props: any) => {
  const { matchId } = props;
//   const [matchId, setMatchId] = useState<any>();
  const [leagues, setLeagues] = useState<any>();
  const [leagueList, setLeagueList] = useState<any>([]);
  const [gamedata, setgamedata] = useState<any>([]);
  const [matches, setMatches] = useState<any>();
  const [tableData, setTableData] = useState<any>([]);
  const [home, setHome] = useState<any>('-');
  const [draw, setDraw] = useState<any>('-');
  const [away, setAway] = useState<any>('-');

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
      const { type, NA, OD } = item;
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
    if (table?.title !== aTables[aTables.length - 1]?.title) {
      aTables.push(table);
    }
    return aTables;
  };

  const getMatchesScore = async () => {
    const [err, result] = await asyncWrap(
      axios.get(`/api/matches?match_id=${matchId}`)
    );
    if (err) {
      return message.error({
        content: "something went wrong",
        style: { margintop: "5vh" },
      });
    }
    // console.log(tableParser(result.data.data.results[0]));
    setgamedata(tableParser(result.data.data.results[0]));
  };

  const showScore = () => {
    gamedata.map((item, i) => {
        if(item.title === "Fulltime Result") {
            setHome((eval(item.rows[0][Object.keys(item.rows[0])[0]]) + 1).toFixed(2));
            setDraw((eval(item.rows[1][Object.keys(item.rows[1])[0]]) + 1).toFixed(2));
            setAway((eval(item.rows[2][Object.keys(item.rows[2])[0]]) + 1).toFixed(2));
            // console.log((item.rows[0][Object.keys(item.rows[0])[0]]));
            // console.log((item.rows[1][Object.keys(item.rows[1])[0]]));
            // console.log((item.rows[2][Object.keys(item.rows[2])[0]]));
        }   
    })
  }

  useEffect(() => {
    getMatchesScore();
  }, []);
  useEffect(() => {
    showScore();
  }, [gamedata]);


  return (
    <>
    {/* {gamedata && gamedata[0] && gamedata[0].title && (<span>{gamedata[0].title}</span>)} */}
    {/* {showScore()} */}
    <span>== {home} == </span> 
    <span>{draw} == </span>
    <span>{away} == </span>
    {/* <span>Hello</span> */}
    </>
  );
};

export default MatchScore;
