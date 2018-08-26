import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import TeamPage from './components/TeamPage/TeamPage';
import QBPage from './components/QBPage/QBPage';
import RBPage from './components/RBPage/RBPage';
import WRPage from './components/WRPage/WRPage';
import TEPage from './components/TEPage/TEPage';
import KPage from './components/KPage/KPage';
import DEFPage from './components/DEFPage/DEFPage';
import CreatePage from './components/CreatePage/CreatePage';
import ConfirmPage from './components/ConfirmPage/ConfirmPage';
import PlayerPage from './components/PlayerPage/PlayerPage';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import './styles/main.css';
import { MuiThemeProvider } from '@material-ui/core';

const muiTheme = getMuiTheme(darkBaseTheme)

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Header title="LR" />
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route
            path="/home"
            component={LoginPage}
          />
          <Route
            path="/register"
            component={RegisterPage}
          />
          <Route
            path="/team"
            component={TeamPage}
          />
          <Route
            path="/qb"
            component={QBPage}
          />
          <Route
            path="/rb"
            component={RBPage}
          />
          <Route
            path="/wr"
            component={WRPage}
          />
          <Route
            path="/te"
            component={TEPage}
          />
          <Route
            path="/k"
            component={KPage}
          />
          <Route
            path="/def"
            component={DEFPage}
          />
          <Route
            path="/create"
            component={CreatePage}
          />
          <Route
            path="/confirm"
            component={ConfirmPage}
          />
          <Route
            path="/player"
            component={PlayerPage}
          />
          {/* OTHERWISE (no path!) */}
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Router>
    </div>
  </MuiThemeProvider>
);

export default App;
