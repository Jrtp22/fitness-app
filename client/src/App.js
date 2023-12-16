// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import LogInPage from './LogInPage'; // Import your LogInPage or any other pages

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/logIn" component={LogInPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
