import { makeRequest } from "../api"

export const actions = {
    GET_USER : 'GET USER',
}

export const getUser = (user) => {
    return {
        type: actions.GET_USER,
        payload: user,
    }
}


export const getUserAsync = (name) => {
    return dispatch => {
        return makeRequest(`some-endpoint/${name}`, 'post')
        .then(user=> {
            dispatch(getUser(user));
        })
        .catch(exception => {
            //dispatch an error instead
            dispatch(getUser({name: 'Ama', type: 'admin'}))
         })
        .then(() => {
            //optional action
        })
    }
}