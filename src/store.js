const { createStore } = require("redux");
const { reducer } = require("./components/State/Reducers");

const initialState = {
    pins : [],
    photos : []
}

export const store = createStore(reducer,initialState)