import { actions } from '../actions/userActions';

const initialState = {
    name: 'kofi',
    type: 'customer',
    email: 'a@b.com',
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.GET_USER:
            return {...state, ...action.payload}
        default:
            return {...state}
    }
}

export default reducer;