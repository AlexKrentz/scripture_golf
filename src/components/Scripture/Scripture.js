import React, { useState, useEffect } from "react";
import VictoryPage from "../Victory/VictoryPage";
import "./Scripture.css";
import Books from "./Books";
import Chapters from "./Chapters";
import DisplayVerse from "./DisplayVerse";
import Verses from "./Verses";

const Scripture = (props) => {
  const [addPoints, setAddPoints] = useState(0);
  const [takePoints, setTakePoints] = useState(0);
  const [score, setScore] = useState(3000);
  const [amount, setAmount] = useState();
  const [nextStage, setNextStage] = useState(
    props.scripture.standardWork !== "dc" ? 0 : 1
  );
  const [penalty, setPenalty] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPenalty((prevState) => {
        var arr = [...prevState];
        arr.splice(0, 1);
        return arr;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [penalty]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (takePoints !== 0) {
        setAmount(takePoints === 1 ? 300 : 50);
        let take = takePoints === 1 ? 300 : 50;
        setScore((prevScore) => prevScore - take);
        setTakePoints(0);
        setPenalty((prevState) => {
          return [true, ...prevState];
        });
      }
      if (addPoints) {
        setScore((prevScore) => prevScore + 500);
        setAddPoints(false);
        setNextStage((prevStage) => prevStage + 1);
      }
      if (nextStage !== 3) {
        setScore((prevScore) => prevScore - 1);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [addPoints, takePoints, nextStage]);

  return (
    <div>
      {console.log(takePoints)}
      {Array.from(Array(penalty.length), (e, i) => {
        return <div className="take-points-fade">-{amount}</div>;
      })}
      <div className="score-header">Score: {score}</div>
      <div class="noselect">
        <DisplayVerse verse={props.scripture.text} />
      </div>
      {nextStage === 0 && (
        <div className="topdiv">
          <Books
            scriptures={props.scripture}
            setAddPoints={setAddPoints}
            setTakePoints={setTakePoints}
          />
        </div>
      )}
      {nextStage === 1 && (
        <div className="topdiv">
          <Chapters
            scripture={props.scripture}
            setAddPoints={setAddPoints}
            setTakePoints={setTakePoints}
          />
        </div>
      )}
      {nextStage === 2 && (
        <div className="topdiv">
          <Verses
            scripture={props.scripture}
            setAddPoints={setAddPoints}
            setTakePoints={setTakePoints}
          />
        </div>
      )}
      {nextStage === 3 && (
        <div className="topdiv">
          <VictoryPage
            score={score}
            setNextStage={setNextStage}
            book={props.scripture.standardWork}
          />
        </div>
      )}
    </div>
  );
};

export default Scripture;
