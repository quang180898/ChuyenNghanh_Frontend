import { categoryAction } from '../action';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {

        //create CATEGORY
        case categoryAction.CREATE_CATEGORY_REQUEST:
            return { ...state, isLoading: true, createCategory: null, success: false, error: false };
        case categoryAction.CREATE_CATEGORY_SUCCESS:
            return { ...state, isLoading: false, success: true, createCategory: action.response, error: false };
        case categoryAction.CREATE_CATEGORY_FAILURE:
            return { ...state, isLoading: false, error: action.err, createCategory: action.response };
        
        //delete CATEGORY
        case categoryAction.DELETE_CATEGORY_REQUEST:
            return { ...state, isLoading: true, deleteCategory: null, success: false, error: false };
        case categoryAction.DELETE_CATEGORY_SUCCESS:
            return { ...state, isLoading: false, success: true, deleteCategory: action.response, error: false };
        case categoryAction.DELETE_CATEGORY_FAILURE:
            return { ...state, isLoading: false, error: action.err, deleteCategory: action.response };

        //clear
        case categoryAction.CATEGORY_CLEAR:
            return {
                ...state,
                createCategory: null,
                deleteCategory: null,
                isLoading: false,
                success: false,
                error: false,
            };
        
        default:
            return state;    
    }
}