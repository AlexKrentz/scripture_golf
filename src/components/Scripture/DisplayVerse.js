import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DisplayVerse.css";
import { Container } from "react-bootstrap";

const DisplayVerse = (props) => {
  const verse = props.verse.split(" ");

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => index + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Container fluid="sm">
      {Array.from(Array(index), (e, i) => {
        index > verse.length && setIndex(verse.length);
        return <nobr class="fade-in-text">{verse[i]}&nbsp;</nobr>;
      })}</Container>
    </div>
  );
};

export default DisplayVerse;
