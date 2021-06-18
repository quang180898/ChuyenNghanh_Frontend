import accountReducer from "./accountReducer";
import homeReducer from "./homeReducer";
import bookReducer from "./bookReducer";
import commonReducer from "./commonReducer";
import authorReducer from "./authorReducer";
import categoryReducer from "./categoryReducer";
import publishingReducer from "./publishingReducer"

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    accountReducer,
    homeReducer,
    bookReducer,
    commonReducer,
    authorReducer,
    categoryReducer,
    publishingReducer,
});

export default allReducers;