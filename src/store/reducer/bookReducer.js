import { bookAction } from '../action';

const initialState = {
    success: false,
    error: false,
    isFetching: false,
};

export default (state = initialState, action) => {
    switch (action.type) {

    //detail book
    case bookAction.GET_DETAIL_BOOK_REQUEST:
        return { ...state, isFetching: true, success: false, error: false };
    case bookAction.GET_DETAIL_BOOK_SUCCESS:
        return { ...state, isFetching: false, success: true, detailBook: action.response, error: false };
    case bookAction.GET_DETAIL_BOOK_FAILURE:
        return { ...state, isFetching: false, error: action.err, detailBook: action.response };
    
    //get same category
    case bookAction.GET_SAME_CATEGORY_REQUEST:
        return { ...state, isFetching: true, sameCategory: null ,success: false, error: false };
    case bookAction.GET_SAME_CATEGORY_SUCCESS:
        return { ...state, isFetching: false, success: true, sameCategory: action.response, error: false };
    case bookAction.GET_SAME_CATEGORY_FAILURE:
        return { ...state, isFetching: false, error: action.err, sameCategory: action.response };

    //Create Update Book
    case bookAction.CREATE_UPDATE_BOOK_REQUEST:
        return { ...state, isFetching: true, createUpdateBook: null,success: false, error: false };
    case bookAction.CREATE_UPDATE_BOOK_SUCCESS:
        return { ...state, isFetching: false, success: true, createUpdateBook: action.response, error: false };
    case bookAction.CREATE_UPDATE_BOOK_FAILURE:
        return { ...state, isFetching: false, error: action.err, createUpdateBook: action.response };

    //Delete Book
    case bookAction.DELETE_BOOK_REQUEST:
        return { ...state, isFetching: true, deleteBook: null,success: false, error: false };
    case bookAction.DELETE_BOOK_SUCCESS:
        return { ...state, isFetching: false, success: true, deleteBook: action.response, error: false };
    case bookAction.DELETE_BOOK_FAILURE:
        return { ...state, isFetching: false, error: action.err, deleteBook: action.response };

     //clear
     case bookAction.BOOK_CLEAR:
        return {
            ...state,
            createUpdateBook: null,
            detailBook: null,
            isLoading: false,
            success: false,
            error: false,
        };
        
    default:
        return state;    
    }
}

