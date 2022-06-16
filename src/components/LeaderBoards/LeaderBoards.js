import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./LeaderBoard.css";
const LeaderBoards = () => {
  const [scores, setScores] = useState([]);

  const book = window.location.href.slice(
    window.location.href.lastIndexOf("/"),
    window.location.href.lastIndexOf("l")
  );
  let database =
    "https://scripture-golf-default-rtdb.firebaseio.com/" +
    book +
    "-scores.json";

  const fetchScoresHandler = useCallback(async () => {
    try {
      const response = await fetch(database);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const loadedScores = [];
      const otherScores = [];
      const data = await response.json();
      for (let key in data) {
        loadedScores.push({ name: data[key].name, score: data[key].score });
      }
      loadedScores.sort((a, b) => {
        return b.score - a.score;
      });
      let i = 0;
      for (const key in loadedScores) {
        if (i > 24) break;
        otherScores.push(
          <tr>
            <td>{i + 1}</td>
            <td>{loadedScores[key].name}</td>
            <td>{loadedScores[key].score}</td>
          </tr>
        );
        i++;
      }
      setScores(otherScores);
    } catch (error) {}
  }, [scores]);

  useEffect(() => {
    fetchScoresHandler();
  }, [fetchScoresHandler]);

  return (
    <div className="grad">
      <div className="backbutton">
        <Link to="/">
          <button type="button">Home</button>
        </Link>
      </div>
      <h1 className="leadHeader">LEADERBOARDS</h1>
      <div className="outer">
        <table className="scores">
          <tr>
            <td>Rank</td>
            <td>Name</td>
            <td>Score</td>
          </tr>
          {scores}
        </table>
      </div>
    </div>
  );
};
export default LeaderBoards;
