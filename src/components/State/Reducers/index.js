import { ADD_PIN, REMOVE_PIN } from "../types";

export function reducer(state, action){
    
    switch(action.type){
        
        case ADD_PIN : 
            return{
                ...state,
                pins : [...state.pins, action.payload]
            }
            break;
        
        case REMOVE_PIN : 
            return{
                ...state,
                pins : state.pins.filter( pin => pin.id !== action.payload.id)
            }
            break;

        default : return state;
    }

}