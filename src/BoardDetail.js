import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
// import {
//     Button,
//     Form,
//     FormControl,
//     FormGroup,
//     Col,
//     Checkbox
// } from 'react-bootstrap';

const ListHomework = ({myBoard, selected}) => {
    let list = myBoard[selected].list.map((item, index) => {
        return (
            <li className="boards" key={index}>
                <NavLink  to={"/detailsy"}>{item.titleList}</NavLink>
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
            <ListHomework myBoard={myBoard} selected={selected} />
        </div>
    )
}
