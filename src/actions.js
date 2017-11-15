import store from './store';
export const selectBoard = (index) => {
        console.log("index", store.getState().myBoard)
        console.log("selected", store.getState().selected)
        store.setState({
            selected: index
        })
    }
    // export const addBoard = () => {

// }
export const evaluateAddCard = (selected, index) => {
    let newVal = (store.getState().myBoard[selected].list[index].newCard) ? false : true;
    const cloneList = [...store.getState().myBoard];
    cloneList[selected].list[index].newCard = newVal;

    store.setState({
        myBoard: cloneList
    });
    console.log("addcards", cloneList[selected].list[index])
}
export const addCard = (card, selected, index) => {
    console.log("cARD", card);
    if (card != "") {
        const cloneList = [...store.getState().myBoard];
        let newCard = {
            cardTitle: card,
            commentary: []
        }
        cloneList[selected].list[index].cards.push(newCard);
        store.setState({
            myBoard: cloneList
        });
        console.log("clonelist", cloneList);
        evaluateAddCard(selected, index);
    }
}
export const addBoard = (title, selected) => {

        console.log("slected1", title, "index");
        if (title != "") {
            const cloneList = [...store.getState().myBoard];
            let newBoard = {
                title: title,
                list: []
            }
            cloneList.push(newBoard);
            store.setState({
                myBoard: cloneList
            });
        }
        evaluateAddBoard(selected);
    }
    // firebase.database().ref('users/oacsa').once('value').then(res => {res.val})
export const evaluateAddBoard = (selected) => {
    console.log("selected2", store.getState().newBoard);
    let newVal = (store.getState().newBoard) ? false : true;

    store.setState({
        newBoard: newVal
    });
    console.log("addcards", newVal)
}
export const addList = (title, selected) => {
    console.log('title', title, 'selected', selected);
    let newVal = {
        titleList: title,
        newCard: false,
        cards: []
    }
    const cloneList = [...store.getState().myBoard];
    cloneList[selected].list.push(newVal);

    store.setState({
        myBoard: cloneList
    });
}
export const evaluateAddList = (selected) => {
    console.log('selected', selected)
    let newVal = (store.getState().myBoard[selected].newList) ? false : true;
    const cloneList = [...store.getState().myBoard];
    cloneList[selected].newList = newVal;

    store.setState({
        myBoard: cloneList
    });
}