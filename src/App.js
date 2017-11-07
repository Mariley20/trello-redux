import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import { } from "./actions";
import './App.css';
import {SignIn} from './SignIn';
import {SignUp} from './SignUp';
const App = ({ commentary, selectedComment }) => {
return (
    <div className="container">
        <Header />
        <HashRouter>
            <Switch>
                    <Route path="/" component={SignUp} />
                    <Route path="/sign_up" component={SignUp} />
                    <Route path="/sign_in" component={SignIn} />
            </Switch>
        </HashRouter>
    </div>
)
}
const Header = () => {
    return (
        <div>
            <img className="logo" src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d" />
        </div>
    )
}
const mapToProps = ({ commentary, selectedComment }) => ({ commentary, selectedComment });

export default connect(mapToProps)(App);