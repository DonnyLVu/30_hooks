import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AllCharacter from '../../containers/AllCharacter';
import DetailPage from '../../containers/DetailPage';

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
          path="/characters/:_id"
          component={DetailPage}>
        </Route>
      </Switch>
    </Router>
  );
}
