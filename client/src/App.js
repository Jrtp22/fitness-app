import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './HomePage';
import Profile from './components/Profile';
import ProfileCard from './components/ProfileCard';
import Navi from './components/Navbar';
import NewFitnessForm from './components/NewFitnessForm';
import EditFitnessForm from './components/EditFitnessForm';
import SignUpForm from './Users/SignUpForm';
import LoginForm from './Users/LoginForm';
import AuthForm from './Users/AuthForm';
import CurrentUserProvider from './contexts/CurrentUser';

function App() {
    useEffect(() => {
        const port = process.env.REACT_APP_PORT || 3000; // Use the port from environment variables, or default to 3000
        
      }, []);
    return (
        <CurrentUserProvider>
            <BrowserRouter>
                <Navi />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/sign-up" component={SignUpForm} />
                    <Route exact path="/login" component={LoginForm} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/profile-card" component={ProfileCard} />
                    <Route exact path="/new-fitness" component={NewFitnessForm} />
                    <Route exact path="/edit-fitness" component={EditFitnessForm} />
                    <Route exact path="/auth-form" component={AuthForm} />
                </Switch>
            </BrowserRouter>
        </CurrentUserProvider>
    );
}

export default App;
