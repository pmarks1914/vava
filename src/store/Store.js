import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';

import userReducer from '../reducers/UserReducer';
import loginReducer from '../reducers/LoginReducer';

function saveToLocalStorage(state){
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem("stateOfArtReduxPersist", serializedState) 
     } catch(e) {
    }
}

function loadFromLocalStorage(){
    try{
        const serializedState = localStorage.getItem("state")
        if (serializedState === null) return undefined
        return JSON.parse(serializedState)
    } 
    catch(e){
        return undefined
    }
}

const reducers = combineReducers({
    user: userReducer,
    login: loginReducer
});



const middleware = applyMiddleware(thunk);

const persistedState = loadFromLocalStorage()

const store = createStore(reducers, middleware);

store.subscribe(()=> saveToLocalStorage(store.getState()))

export default (store);