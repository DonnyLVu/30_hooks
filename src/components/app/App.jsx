import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AllCharacter from '../../containers/AllCharacter';
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
