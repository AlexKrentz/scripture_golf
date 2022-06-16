import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col } from "react-bootstrap";
import "./Chapter.css";
import Button from "react-bootstrap/Button";

const Chapters = (props) => {

  const chapters = [];

  for (let i = 0; i < props.scripture.numberOfChapters; i++) {
    chapters.push(
      <Button
        onClick={() =>
          i + 1 === props.scripture.chapter
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
      <h2>{props.scripture.standardWork !== "dc" ? "Chapter:" : "Section:"}</h2>
      <Container fluid="sm">
        <Col>
          {<div class="add-points-fade">+500</div>}
          {chapters}
        </Col>
      </Container>
    </div>
  );
};

export default Chapters;
