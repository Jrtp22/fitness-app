// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import LogInPage from './LogInPage';
import UserProfilePage from './Profilerofile'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/logIn" component={LogInPage} />
        <Route path="/profile" component={UserProfilePage} /> 
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
