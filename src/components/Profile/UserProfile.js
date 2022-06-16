import classes from "./UserProfile.module.css";
import React, { useState, useEffect, useCallback } from "react";

const UserProfile = () => {
  const stats = [];
  const [finalStats, setFinalStats] = useState([]);
  const [bom, setBom] = useState([0]);
  const [nt, setNt] = useState([0]);
  const [dc, setdc] = useState([0]);
  const [pogp, setpogp] = useState([0]);
  const name = localStorage.email;

  const fetchScoresHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://scripture-golf-default-rtdb.firebaseio.com/" + name + ".json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      let i = 0;
      for (const key in data) {
        switch (data[key].book) {
          case "bom":
            setBom(data[key].score);
            break;
          case "nt":
            setNt(data[key].score);
            break;
          case "dc":
            setdc(data[key].score);
            break;
          case "pogp":
            setpogp(data[key].score);
            break;
          default:
            break;
        }
        stats.push(
          <li>
            {data[key].date}- {data[key].score}
          </li>
        );
        i++;
      }
      setFinalStats(stats);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchScoresHandler();
  }, [fetchScoresHandler]);

  return (
    <section className={classes.profile}>
      <h1 className="leadHeader">{name}</h1>
      <div className="outer">
        <table className="scores">
          <tr className={classes.head}>
            <td>Book</td>
            <td>Score</td>
          </tr>
          <tr>
            <td>Book of Mormon </td>
            <td>{bom}</td>
          </tr>
          <tr>
            <td>New Testament </td>
            <td>{nt}</td>
          </tr>
          <tr>
            <td>Pearl of Great Price </td>
            <td>{pogp}</td>
          </tr>
          <tr>
            <td>Doctrine and Covenants </td>
            <td>{dc}</td>
          </tr>
        </table>
      </div>
      {/* <h2>All time high scores:</h2>
      <h3>Book of Mormon: {bom}</h3>
      <h3>New Test: {nt}</h3>
      <h3>Pearl of Great Price: {pogp}</h3>
      <h3>Doctrine and Covenants: {dc}</h3> */}
    </section>
  );
};

export default UserProfile;
