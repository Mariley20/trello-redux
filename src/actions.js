import store from './store';
export const selectBoard = (index) => {
    console.log("index", index)
    console.log("board",)
    console.log("selected", store.getState().myBoard.list)
    store.setState({
        selected: index
    })
}