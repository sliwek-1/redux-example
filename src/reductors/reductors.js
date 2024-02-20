import { ADD_USER, REMOVE_USER } from "../actions/actions";

let userCounter = 0;

const initialState = {
    user: []
}

export function userReductor(state = initialState, action) {
    switch(action.type) {
        case ADD_USER:
            let data = {id: ++userCounter, ...action.payload.user}
            return {
                user: [
                    ...state.user,
                    data
                ]
            }
        case REMOVE_USER:
            let indexOfElement = state.user.findIndex(element => element.id === action.payload.id)
            if(indexOfElement !== -1) {
                return {
                    ...state, 
                    user: [
                        ...state.user.slice(0, indexOfElement),
                        ...state.user.slice(indexOfElement + 1)
                    ]
                };
            } 
            return state;
        default: 
            return state
    }
} 