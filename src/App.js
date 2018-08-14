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

import './styles/main.css';

const App = () => (
  <div>
    <Header title="Welcome to Locker Room" />
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
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </Router>
  </div>
);

export default App;
