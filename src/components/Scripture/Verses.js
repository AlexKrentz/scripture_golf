import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Container, Col } from "react-bootstrap";
import VictoryPage from "../Victory/VictoryPage";
const Verses = (props) => {
  let [correctVerseGuess, setCorrectVerseGuess] = useState(false);

  if (correctVerseGuess) {
    return <VictoryPage />;
  }

  const verses = [];

  for (let i = 0; i < props.scripture.numberOfVerses; i++) {
    verses.push(
      <Button
        onClick={() =>
          i + 1 === props.scripture.verse
            ? props.setAddPoints(true)
            : props.setTakePoints(2)
        }
      >
        {i + 1}
      </Button>
    );
  }

  return (
    <div className="insidecontainer">
      <h1>Verse:</h1>
      <Container fluid="sm">
        <Col>
          {<div class="add-points-fade">+500</div>}
          {verses}
        </Col>
      </Container>
    </div>
  );
};

export default Verses;
