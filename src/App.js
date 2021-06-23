import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/fonts/Inter/font.css";
import "./assets/css/App.scss";

import Login from "./routes/Login";
import Home from "./routes/Home";
import Registration from "./routes/Registration";
import Profile from "./routes/Profile";
import Startpage from "./routes/Startpage";
import Page404 from "./routes/Page404";
import Post from "./routes/Post";
import Imprint from './routes/Imprint';
import Privacy from './routes/Privacy';

import { SecuredRoute } from "./components/SecuredRoute"
import { StartpageRoute } from "./components/StartpageRoute"

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <SecuredRoute path="/profile" component={ Profile } />
          <Route path="/login" component={ Login } />
          <Route path="/registration" component={ Registration } />
          <Route path="/post" component={ Post } />
          <Route path="/impressum" component={ Imprint } />
          <Route path="/datenschutz" component={ Privacy } />
          <StartpageRoute path="/" component={ Home } exact />
          <Page404 />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
