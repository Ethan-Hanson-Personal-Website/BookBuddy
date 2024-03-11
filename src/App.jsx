//TODO This is the main app function
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './components/Books';
import Singlebook from './components/Singlebook';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import Navigations from './components/Navigations';
import './App.css';

export default function App() {
    return (
        <Router>
            <Navigations />
            <Switch>
                <Route exact path='/'>
                    <Books />
                </Route>
                <Route path='/books/:id'>
                    <Singlebook />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/register'>
                    <Register />
                </Route>
                <Route path='/account'>
                    <Account />
                </Route>
            </Switch>
        </Router>
    );
}
