import GenerateVerse from "../Scripture/GenerateVerse";
import newTestData from "../../scripture-text/new-testament.json";

const BookofMormon = () => {
  return(<div><GenerateVerse data={newTestData} /></div>)
}

export default BookofMormon;