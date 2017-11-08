import store from './store';
export const selectBoard = (index) => {
    console.log("index", store.getState().myBoard)
    console.log("selected", store.getState().selected)
    store.setState({
        selected: index
    })
}
export const addCards = (selected, index) => {
    let newVal = (store.getState().myBoard[selected].list[index].newCard)? false : true;
    const cloneList = [...store.getState().myBoard];
    cloneList[selected].list[index].newCard = newVal;

    store.setState({
        myBoard: cloneList
    });
    console.log("addcards", cloneList[selected].list[index])
}

