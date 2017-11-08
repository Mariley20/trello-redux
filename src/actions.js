import store from './store';
export const selectBoard = (index) => {
    console.log("index", index)
    console.log("selected", store.getState().selected)
    store.setState({
        selected: index
    })
}