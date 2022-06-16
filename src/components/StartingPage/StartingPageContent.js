import { useContext, useState } from "react";
import classes from "./StartingPageContent.module.css";
import { Switch, Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import gif from "./../sgGif.gif";

const StartingPageContent = () => {
  const authCtx = useContext(AuthContext);
  const [displayGif, setDisplayGif] = useState(false);

  const loggedOutDisplay = () => {
    return (
      <span>
        <Link to="/auth">
          <button type="button">Login</button>
        </Link>
        <Link to="/play">
          <button type="button">Play As Guest</button>
        </Link>
      </span>
    );
  };

  const loggedInDisplay = () => {
    return (
      <Link to="/play">
        <button type="button">Play</button>
      </Link>
    );
  };

  if (displayGif) {
    return (
      <div class="container">
        <img src={gif} alt="Loading..." className={classes.gif} />
        <button className={classes.pp} onClick={() => setDisplayGif(false)}>
          Back
        </button>
      </div>
    );
  }

  return (
    <Switch class="iv">
      <section className={classes.starting}>
        <h1>Scripture Golf</h1>
        {authCtx.isLoggedIn ? loggedInDisplay() : loggedOutDisplay()}
        <Link to="/leaderboards">
          <button type="button">leaderboards</button>
        </Link>
        <div class="container">
          <br></br>
          <img src={gif} alt="Loading..." className={classes.gif} />
          {/* <button className={classes.pp} onClick={() => setDisplayGif(false)}>Back</button> */}
        </div>
        {/* <button type="button" onClick={() => setDisplayGif(true)}>
          How to play
        </button> */}
      </section>
    </Switch>
  );
};

export default StartingPageContent;
