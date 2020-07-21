const { createStore } = require("redux");
const { reducer } = require("./components/State/Reducers");

const initialState = {
    pins : [
        // {
        //     alt_description: "BharatMataKiJai",
        //     heading: "BharatMataKiJai",
        //     id: 406,
        //     urls:{
        //         full: "https://images.unsplash.com/photo-1595170296052-0ca2a380bed4",
        //         raw: "https://images.unsplash.com/photo-1595170296052-0ca2a380bed4",
        //         regular: "https://images.unsplash.com/photo-1595170296052-0ca2a380bed4",
        //         small: "https://images.unsplash.com/photo-1595170296052-0ca2a380bed4",
        //         thumb: "https://images.unsplash.com/photo-1595170296052-0ca2a380bed4"
        //     }
        // }
    ],
    savedPins : []
}

export const store = createStore(reducer,initialState)