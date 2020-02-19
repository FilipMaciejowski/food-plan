import { createStore, combineReducers, applyMiddlewre, compose } from 'redux';
import thunk from 'redux-thunk';

const roortReducer = combineReducers({user, recipe, schedule});



const store = createStore(rootReducer, compose(applyMiddelware(thunk)));



export default store; 
