import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddScore from "../LeaderBoards/AddScore";
import "./Victory.css";
import LeaderBoard from "../LeaderBoards/LeaderBoards";

const VictoryPage = (props) => {
  const [logScore, setLogScore] = useState(true);
  useEffect(() => {
    setLogScore(false);
  }, [logScore]);

  const [leaderboard, setLeaderboard] = useState(false);

  if (leaderboard) {
    return <LeaderBoard />;
  }

  return (
    <div>
	   <div className="finalresult">YOU WIN! FINAL SCORE: <span>{props.score + 1}</span></div>
      {logScore && <AddScore score={props.score} book={props.book} />}
      <Link to={"/" + props.book + "leaderboards"}>
        <button type="button">Leaderboards</button>
      </Link>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
      <Link to="/play">
        <button type="button">Play Again</button>
      </Link>
    </div>
  );
};

export default VictoryPage;
