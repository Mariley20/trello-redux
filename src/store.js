import createStore from "redux-zero";

let myBoard = [{
    title: "Portafolio",
    lista: [{
        titleList: "create react app",
        commentary: "una lista genial"
    }]
}];
const initialState = {
    myBoard: myBoard,
    selected: 0
};

const store = createStore(initialState);
export default store;