import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import {selectBoard, addBoard, evaluateAddBoard} from './actions';

const ListBoard = ({myBoard, newBoard, selected}) => {
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
const AddBoardHMTL = ({newBoard, selected}) => {
    const onSubmit = (e) => {
		e.preventDefault();
		console.log ( 'this..', this);//con truco, es el connect el this.
    addBoard(this.List.value, selected);
     this.List.value = "";
  }
    return(
        <div>
            <form onSubmit={onSubmit}className="boards">
        <div className="form-group">
          <textarea className="form-control inputList" ref={(e) => this.List = e} ></textarea> 
        </div>
        <button type="submit" className="btn btn-default">Add</button>
        <button type="button" onClick={() => evaluateAddBoard(selected)}>Cancel</button>
      </form> 
        </div>
    )
}
export const MyBoards = ({myBoard, newBoard, selected}) => {
    return (
        <div>
            <ListBoard myBoard={myBoard} selected={selected} />
            {!newBoard?
                <button onClick={() => evaluateAddBoard(selected)}>add List{selected}</button>
            :
                <AddBoardHMTL newBoard={newBoard} selected={selected} />
            }
            
        </div>
    )
}

