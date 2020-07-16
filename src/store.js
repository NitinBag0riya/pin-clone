const { createStore } = require("redux");
const { reducer } = require("./components/State/Reducers");

const initialState = {
    pins : [1,2,3,4]
}

export const store = createStore(reducer,initialState)