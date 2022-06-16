import GenerateVerse from "../Scripture/GenerateVerse";
import DCData from "../../scripture-text/doctrine-covenants.json";


const BookofMormon = () => {
  console.log(DCData)
  return(<div><GenerateVerse data={DCData} /></div>)
}

export default BookofMormon;