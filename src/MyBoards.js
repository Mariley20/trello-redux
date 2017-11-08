import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import {selectBoard, addList} from './actions';

const ListBoard = ({myBoard, selected}) => {
    let list = myBoard.map((item, index) => {
        return (
            <li className="boards" key={index}>
                <NavLink onClick={() => selectBoard(index)} to={"/details"}>{item.title}</NavLink>
            </li>
        )
    });
    return (
        <ul>{list}</ul>
    )
}
const AddListHMTL = ({selected}) => {
    const onSubmit = (e) => {
		e.preventDefault();
		console.log ( 'this..', this);//con truco, es el connect el this.
    addList(this.List.value, selected );
     this.List.value = "";
  }
    return(
        <div>
            <form onSubmit = {onSubmit}>
        <div className="form-group">
          <textarea className="form-control inputList" ref={(e) => this.List = e} ></textarea> 
        </div>
        <button type="submit" className="btn btn-default">Add</button>
        <button type="button" onClick={() => evaluateAddCard(selected)} >Cancel</button>
      </form> 
        </div>
    )
}
export const MyBoards = ({myBoard, selected}) => {
    return (
        <div>
            <ListBoard myBoard={myBoard} selected={selected} />
        </div>
    )
}

