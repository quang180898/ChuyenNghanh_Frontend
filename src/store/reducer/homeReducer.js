import { homeAction } from '../action';

const initialState = {
    list_book: [],
    success: false,
    error: false,
    isFetching: false,
};

export default (state = initialState, action) => {
    console.log("action", action)
    switch (action.type) {
        //list book
        case homeAction.LIST_BOOK_REQUEST:
            return { ...state, isFetching: true, success: false, error: false };
        case homeAction.LIST_BOOK_SUCCESS:
            return { ...state, isFetching: false, success: true, list_book: action.response, error: false };
        case homeAction.LIST_BOOK_FAILURE:
            return { ...state, isFetching: false, error: action.err, list_book: action.response };
        default:
            return state;    
    }
}