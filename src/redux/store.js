import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({user, recipe, schedule});



const store = createStore(rootReducer, compose(applyMiddleware(thunk)));



export default store; 
