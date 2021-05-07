import accountReducer from "./accountReducer";
import homeReducer from "./homeReducer";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    accountReducer,
    homeReducer
});

export default allReducers;