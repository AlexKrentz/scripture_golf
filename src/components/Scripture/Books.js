import React from "react";
import Button from "react-bootstrap/Button";
import bookOfMormonData from "../../scripture-text/book-of-mormon.json";
import newTestData from "../../scripture-text/new-testament.json";
import pearlData from "../../scripture-text/pearl-of-great-price.json";
import "./Books.css";

const Books = (props) => {
  let bookNames = [];

  switch (props.scriptures.standardWork) {
    case "bom":
      for (let i = 0; i < Object.keys(bookOfMormonData.books).length; i++) {
        bookNames.push(
          <Button
            onClick={() =>
              bookOfMormonData.books[i].book === props.scriptures.book
                ? props.setAddPoints(true)
                : props.setTakePoints(1)
            }
          >
            {" "}
            {bookOfMormonData.books[i].book}
          </Button>
        );
      }
      break;
    case "nt":
      for (let i = 0; i < Object.keys(newTestData.books).length; i++) {
        bookNames.push(
          <Button
            onClick={() =>
              newTestData.books[i].book === props.scriptures.book
                ? props.setAddPoints(true)
                : props.setTakePoints(1)
            }
          >
            {" "}
            {newTestData.books[i].book}
          </Button>
        );
      }
      break;
    case "pogp":
      for (let i = 0; i < Object.keys(pearlData.books).length; i++) {
        bookNames.push(
          <Button
            onClick={() =>
              pearlData.books[i].book === props.scriptures.book
                ? props.setAddPoints(true)
                : props.setTakePoints(1)
            }
          >
            {" "}
            {pearlData.books[i].book}
          </Button>
        );
      }
      break;

    default:
      bookNames.push("na");
  }

  return (
    <div>
      <h2>Book:</h2>
      {bookNames}
    </div>
  );
};

export default Books;
