import store from './store';
export const selectBoard = (index) => {
    console.log("index", store.getState().myBoard)
    console.log("selected", store.getState().selected)
    store.setState({
        selected: index
    })
}
export const evaluateAddCard = (selected, index) => {
    let newVal = (store.getState().myBoard[selected].list[index].newCard)? false : true;
    const cloneList = [...store.getState().myBoard];
    cloneList[selected].list[index].newCard = newVal;

    store.setState({
        myBoard: cloneList
    });
    console.log("addcards", cloneList[selected].list[index])
}
export const addCard = (card, selected, index) =>{
    console.log("cARD", card);
    if(card != "") {
        const cloneList = [...store.getState().myBoard];
        let newCard = {
            cardTitle : card,
            commentary : []
        }
        cloneList[selected].list[index].cards.push(newCard);
        store.setState({
            myBoard: cloneList
        });
        console.log("clonelist", cloneList);
        evaluateAddCard(selected, index);
    }
}
export const addList = ({index}) => {
    console.log(selected);
}

