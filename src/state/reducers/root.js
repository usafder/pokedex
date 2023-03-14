import { combineReducers } from 'redux';
import pokemon from './pokemon';
import popup from './popup';

const rootReducer = combineReducers({ pokemon, popup });

export default rootReducer;
