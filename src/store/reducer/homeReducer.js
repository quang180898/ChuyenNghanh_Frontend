import { homeAction } from '../action';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        //list book
        case homeAction.LIST_BOOK_REQUEST:
            return { ...state, isFetching: true, success: false, error: false };
        case homeAction.LIST_BOOK_SUCCESS:
            return { ...state, isFetching: false, success: true, listBook: action.response, error: false };
        case homeAction.LIST_BOOK_FAILURE:
            return { ...state, isFetching: false, error: action.err, listBook: action.response };

         //list book
         case homeAction.LIST_CATEGORY_REQUEST:
            return { ...state, isFetching: true, success: false, error: false };
        case homeAction.LIST_CATEGORY_SUCCESS:
            return { ...state, isFetching: false, success: true, listCategory: action.response, error: false };
        case homeAction.LIST_CATEGORY_FAILURE:
            return { ...state, isFetching: false, error: action.err, listCategory: action.response };

        case homeAction.HOME_CLEAR:
            return {
                ...state,
                listCategory: null,
                isFetching: false,
                success: false,
                error: false,
            };

        default:
            return state;    
    }
}