import accountReducer from "./accountReducer";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    accountReducer,
});

export default allReducers;