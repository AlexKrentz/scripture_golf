import { Link } from "react-router-dom";

const LeaderBoardsNav = () => {
  return (
    <div>
      <Link to="/bomleaderboards">
        <button type="button">Book of Mormon leaderboards</button>
      </Link>
      <Link to="/ntleaderboards">
        <button type="button">New Testament leaderboards</button>
      </Link>
      <Link to="/dcleaderboards">
        <button type="button"> Doctring and Covenants leaderboards</button>
      </Link>
      <Link to="/pogpleaderboards">
        <button type="button"> Pearl of Great Price leaderboards</button>
      </Link>
    </div>
  );
};

export default LeaderBoardsNav;
