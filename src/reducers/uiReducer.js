import { types } from "../types/types";

const intitialState = {
    loading: false,
    msgError: null
}

export const uiReducer = ( state = intitialState, action ) =>{

    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError:action.payload
            }
        case types.uiRemoveError:
            return {
                ...state,
                msgError:null
            } 
        case types.uiStartLoading:
            return {
                ...state,
                loading:true
            }
        case types.uiFinishLoading:
            return {
                ...state,
                loading:false
            }
        default:
            return state;
    }

}