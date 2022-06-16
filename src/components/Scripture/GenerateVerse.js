import React from "react";
import Scripture from "./Scripture";

const GenerateVerse = (props) => {
  let numberOfBooks = Object.keys(props.data.books).length
  let book =  Math.floor(Math.random() * numberOfBooks);
  let chaptersInBook = Object.keys(props.data.books[book].chapters).length;

  let chapter = Math.floor(Math.random() * chaptersInBook);
  let versesInChapter = Object.keys(
    props.data.books[book].chapters[chapter].verses
  ).length;

  let verse = Math.floor(Math.random() * versesInChapter);
  let bookSize;
  switch (Object.keys(props.data.books).length) {
    case 15:
      bookSize = "bom";
      break;
    case 27:
      bookSize = "nt";
      break;
    case 1:
      bookSize = "dc";
      break;
    case 5:
      bookSize = "pogp";
      break;
    default:
      bookSize = "na";
  }
  let scripture = {
    book: bookSize !== "dc" ? props.data.books[book].book : "na",
    chapter: props.data.books[book].chapters[chapter].chapter,
    verse: props.data.books[book].chapters[chapter].verses[verse].verse,
    numberOfChapters: chaptersInBook,
    numberOfVerses: versesInChapter,
    text: props.data.books[book].chapters[chapter].verses[verse].text,
    standardWork: bookSize,
  };

  return (
    <div>
      <Scripture scripture={scripture} />
    </div>
  );
};

export default GenerateVerse;
