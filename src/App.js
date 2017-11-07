import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { } from "./actions";
import './App.css';
const App = ({ commentary, selectedComment }) => {
return (
    <div>hola</div>
)
}

const mapToProps = ({ commentary, selectedComment }) => ({ commentary, selectedComment });

export default connect(mapToProps)(App);