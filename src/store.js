import createStore from "redux-zero";

let myBoard = [{
    title: "Portafolio",
    list: [{
        titleList: "create react app",
        cards:[{
            cardTitle:"Card 1",
            commentary: "una lista genial"
        }]
    },
    {
        titleList: "create react app 2",
        cards : [{
            cardTitle:"Cards 23",
            commentary: "una lista genial"}]
    },
    {
        titleList: "create react app 3",
        cards : [{
            cardTitle:"Cards 234",
            commentary: "una lista genial"}]
    }]
},
{
    title: "Portafolio2",
    list: [
        {
            titleList: "create react app",
            cards:[{
                cardTitle:"Cards 2312",
                commentary: "una lista genial"
        }]
        }
    ]
}
];
const initialState = {
    myBoard: myBoard,
    selected: 0
};

const store = createStore(initialState);
export default store;