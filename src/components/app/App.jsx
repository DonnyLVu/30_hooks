import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AllCharacter from '../character/AllCharacter';
import Detail from '../detail/Detail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={AllCharacter}>
        </Route>
        <Route
          exact
          path="/:id"
          component={Detail}>
        </Route>
      </Switch>
    </Router>
  );
}
