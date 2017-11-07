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
import {MyBoards} from './MyBoards';
const App = ({ myBoard, selected }) => {
return (
    <div className="container">
        <Header />
        <HashRouter>
            <Switch>
                    <Route path="/"  render={() => <SignUp myBoard={myBoard} selected={selected} />}/>
                    <Route path="/sign_up" render={() => <SignUp myBoard={myBoard} selected={selected} />}/>
                    <Route path="/sign_in"  render={() => <SignIn myBoard={myBoard} selected={selected} />}/>
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
const mapToProps = ({ myBoard, selected }) => ({ myBoard, selected });

export default connect(mapToProps)(App);