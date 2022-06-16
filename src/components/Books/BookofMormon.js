import GenerateVerse from "../Scripture/GenerateVerse";
import BookOfMonmonData from "../../scripture-text/book-of-mormon.json";

const BookofMormon = () => {
  return(<div><GenerateVerse data={BookOfMonmonData} /></div>)
}

export default BookofMormon;