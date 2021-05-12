import accountReducer from "./accountReducer";
import homeReducer from "./homeReducer";
// import bookReducer from "./bookReducer";

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    accountReducer,
    homeReducer,
    // bookReducer,
});

export default allReducers;