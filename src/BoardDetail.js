import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {addCards} from './actions';

const ListCards = ({myCard, addCard}) => {
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
    return(
        <div>
        <textarea></textarea><br/>
        <button>Add</button> <button onClick={() => addCards(selected, index)} >Cancel</button>
        </div>
    )
}
const ListHomework = ({myList, selected, addCard}) => {
    let list = myList.list.map((item, index) => {
        return (
            <li className="boards" key={index}>
                <h3>{item.titleList}</h3>
                <ListCards myCard={item.cards} addCard={addCard}/>
                {!item.newCard?
                    <a onClick={() => addCards(selected, index)} >add a new Card +{addCard}</a>
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

export const Details = ({myBoard, selected, addCard}) => {
    return (
        <div>
            Hola Detalles {selected}
            <ListHomework myList={myBoard[selected]} selected={selected} addCard={addCard} />
        </div>
    )
}
