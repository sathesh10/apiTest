import { combineReducers } from "redux";
import counterReducer from './reducers/index';

export const appReducer =  combineReducers({
      counter: counterReducer
})