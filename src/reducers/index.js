import { combineReducers } from 'redux';
import vehicles from './vehicles';
import starships from './starships';

export const reducers = combineReducers({ vehicles, starships });