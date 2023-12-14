import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage';
import AuthenticationPage from './pages/AuthenticationPage';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={AuthenticationPage} />
        
      </Switch>
    </Router>
  );
}

export default App;
