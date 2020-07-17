import { ADD_PIN, REMOVE_PIN, USER_SELECTION_PHOTOS } from "../types";

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

        case USER_SELECTION_PHOTOS : 
            return{
                ...state,
                photos : action.payload
            }
            break;

        default : return state;
    }

}