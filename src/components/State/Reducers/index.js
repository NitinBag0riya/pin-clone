import { ADD_PIN, REMOVE_SAVED_PIN, USER_SELECTION_PHOTOS, USER_UPLOAD_PIN, REMOVE_USER_SELECTION_PHOTOS } from "../types";
import { PrePopulatedData } from "../PrePopulatedData";

const savedPinKey = 'savedPins';

export function reducer(state, action){
    
    switch(action.type){
        
        case ADD_PIN : 
            return{
                ...state,
                pins : [...state.pins, ...action.payload]
            }
            break;
        
        case REMOVE_SAVED_PIN : 
            return{
                ...state,
                pins : state.pins.filter( pin => pin.id !== action.payload)
            }
            break;

        case REMOVE_USER_SELECTION_PHOTOS : 
        //update localstorage as well on change
            window.localStorage.setItem( savedPinKey, JSON.stringify(action.payload))
            return{
                ...state,
                savedPins : action.payload
            }
            break;

        case USER_SELECTION_PHOTOS :
            //getUpdatedLocalState savedPins 
            const fetchUpdatedSavedPinsFromLocalStorage = JSON.parse(window.localStorage.getItem(savedPinKey)) || PrePopulatedData 
            window.localStorage.setItem(savedPinKey, JSON.stringify([...fetchUpdatedSavedPinsFromLocalStorage, action.payload]))
            console.log([...fetchUpdatedSavedPinsFromLocalStorage, action.payload])
            return{
                ...state,
                savedPins : [...fetchUpdatedSavedPinsFromLocalStorage, action.payload]
            }
            break;
        
        case USER_UPLOAD_PIN : 
            return{
                ...state,
                pin : state.pins.unshift(action.payload)
            }

        default : return state;
    }

}