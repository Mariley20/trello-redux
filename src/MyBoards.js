import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import {selectBoard} from './actions';
export const MyBoards = ({myBoard, selected}) => {
    return (
        <div>
            <ListBoard myBoard={myBoard} selected={selected} />
        </div>
    )
}

const ListBoard = ({myBoard, selected}) => {
    let list = myBoard.map((item, index)=>{
        return (
            <li className="boards" key={index} >
            <NavLink onClick={() => selectBoard(index)} to={"/details"} >{item.title}</NavLink></li>
        )
    });
    return (<ul>{list}</ul>)
}