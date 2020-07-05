import { actions } from '../actions/loginActions';
import Constants from "../Utils/Constants"

const initialState = {
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.Login:
            return {...state, ...action.payload}
        default:
            return {...state}
    }
}

export default reducer;