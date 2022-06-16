import { Link } from "react-router-dom";

const Guest = () => {
  return (
    <div  className="text-center">
      <Link to="/bom">
        <button type="button">Book of Mormon</button>
      </Link>
      <Link to="/nt">
        <button type="button">New Testament</button>
      </Link>
      <Link to="/dc">
        <button type="button">Doctrine and Covenants</button>
      </Link>
      <Link to="/pogp">
        <button type="button">Pearl of Great Price</button>
      </Link>
    </div>
  );
};

export default Guest;
