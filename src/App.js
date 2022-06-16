import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";
import Play from "./components/Play/Play";
import LeaderBoards from "./components/LeaderBoards/LeaderBoards";
import GenerateVerse from "./components/Scripture/GenerateVerse";
import NewTest from "./components/Books/NewTest";
import Pearl from "./components/Books/PearlOfGreatPrice";
import Doctrine from "./components/Books/DoctrineAndCovenants";
import BookofMormon from "./components/Books/BookofMormon";
import LeaderBoardsNav from './components/LeaderBoards/LeaderBoardsNav'

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/play">
          <Play />
        </Route>
        <Route path="/bom">
          <BookofMormon/>
        </Route>
        <Route path="/nt">
          <NewTest/>
        </Route>
        <Route path="/dc">
          <Doctrine/>
        </Route>
        <Route path="/pogp">
          <Pearl/>
        </Route>
        <Route path="/leaderboards">
          <LeaderBoardsNav />
        </Route>
        <Route path="/bomleaderboards">
          <LeaderBoards />
        </Route>
        <Route path="/ntleaderboards">
          <LeaderBoards />
        </Route>
        <Route path="/dcleaderboards">
          <LeaderBoards />
        </Route>
        <Route path="/pogpleaderboards">
          <LeaderBoards />
        </Route>
        <Route path="/bomverse">
          <BookofMormon/>
        </Route>
        <Route path="/ntverse">
          <NewTest/>
        </Route>
        <Route path="/dcverse">
          <GenerateVerse/>
        </Route>
        <Route path="/pogpverse">
          <Pearl/>
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/profile">
          {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
