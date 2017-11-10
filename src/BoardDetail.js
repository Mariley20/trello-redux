import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {evaluateAddCard, addCard} from './actions';

const ListCards = ({myCard}) => {
    let list = myCard.map((item, index) => {
            return (
                <li className="cards" key={index}>
                    {item.cardTitle}
                </li>
            )
        });
        return (
            <div><ul>{list}</ul></div>
        )
}
const AddCardsHTML = ({selected, index}) =>{
    const onSubmit = (e) => {
		e.preventDefault();
		console.log ( 'this..', this);//con truco, es el connect el this.
    addCard(this.card.value, selected, index );
     this.card.value = "";
  }
    return(
        <div>
            <form onSubmit = {onSubmit}>
        <div className="form-group">
          <textarea className="form-control inputcard" ref={(e) => this.card = e} ></textarea> 
        </div>
        <button type="submit" className="btn btn-default">Add</button>
        <button type="button" onClick={() => evaluateAddCard(selected, index)} >Cancel</button>
      </form> 
        </div>
    )
}
const ListHomework = ({myList, selected}) => {
    let list = myList.list.map((item, index) => {
        return (
            <li className="boards" key={index}>
                <h3>{item.titleList}</h3>
                <ListCards myCard={item.cards}/>
                {!item.newCard?
                    <a onClick={() => evaluateAddCard(selected, index)} >add a new Card </a>
                    :
                    <AddCardsHTML selected={selected} index={index} />
                }            
            </li>
        )
    });
    return (
        <ul>{list}</ul>
    )
}

export const Details = ({myBoard, selected}) => {
    return (
        <div>
            Hola Detalles {selected}
            <ListHomework myList={myBoard[selected]} selected={selected} />
        </div>
    )
}