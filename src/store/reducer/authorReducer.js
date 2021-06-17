import { authorAction } from '../action';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        //list author
        case authorAction.LIST_AUTHOR_REQUEST:
            return { ...state, isLoading: true, listAuthor: null, success: false, error: false };
        case authorAction.LIST_AUTHOR_SUCCESS:
            return { ...state, isLoading: false, success: true, listAuthor: action.response, error: false };
        case authorAction.LIST_AUTHOR_FAILURE:
            return { ...state, isLoading: false, error: action.err, listAuthor: action.response };

        //create author
        case authorAction.CREATE_AUTHOR_REQUEST:
            return { ...state, isLoading: true, createAuthor: null, success: false, error: false };
        case authorAction.CREATE_AUTHOR_SUCCESS:
            return { ...state, isLoading: false, success: true, createAuthor: action.response, error: false };
        case authorAction.CREATE_AUTHOR_FAILURE:
            return { ...state, isLoading: false, error: action.err, createAuthor: action.response };
        
        //delete author
        case authorAction.DELETE_AUTHOR_REQUEST:
            return { ...state, isLoading: true, deleteAuthor: null, success: false, error: false };
        case authorAction.DELETE_AUTHOR_SUCCESS:
            return { ...state, isLoading: false, success: true, deleteAuthor: action.response, error: false };
        case authorAction.DELETE_AUTHOR_FAILURE:
            return { ...state, isLoading: false, error: action.err, deleteAuthor: action.response };

        //clear
        case authorAction.AUTHOR_CLEAR:
            return {
                ...state,
                createAuthor: null,
                deleteAuthor: null,
                isLoading: false,
                success: false,
                error: false,
            };

        //clear
        default:
            return state;    
    }
}