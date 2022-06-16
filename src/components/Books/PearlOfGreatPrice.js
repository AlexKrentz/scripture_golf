import GenerateVerse from "../Scripture/GenerateVerse";
import pearlData from "../../scripture-text/pearl-of-great-price.json";

const BookofMormon = () => {
  return(<div><GenerateVerse data={pearlData} /></div>)
}

export default BookofMormon;