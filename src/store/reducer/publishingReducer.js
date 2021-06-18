import { publishingAction } from '../action';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        //list publishing
        case publishingAction.LIST_PUBLISHING_COMPANY_REQUEST:
            return { ...state, isLoading: true, listPublishing: null, success: false, error: false };
        case publishingAction.LIST_PUBLISHING_COMPANY_SUCCESS:
            return { ...state, isLoading: false, success: true, listPublishing: action.response, error: false };
        case publishingAction.LIST_PUBLISHING_COMPANY_FAILURE:
            return { ...state, isLoading: false, error: action.err, listPublishing: action.response };

        //create publishing
        case publishingAction.CREATE_PUBLISHING_COMPANY_REQUEST:
            return { ...state, isLoading: true, createPublishing: null, success: false, error: false };
        case publishingAction.CREATE_PUBLISHING_COMPANY_SUCCESS:
            return { ...state, isLoading: false, success: true, createPublishing: action.response, error: false };
        case publishingAction.CREATE_PUBLISHING_COMPANY_FAILURE:
            return { ...state, isLoading: false, error: action.err, createPublishing: action.response };
        
        //delete publishing
        case publishingAction.DELETE_PUBLISHING_COMPANY_REQUEST:
            return { ...state, isLoading: true, deletePublishing: null, success: false, error: false };
        case publishingAction.DELETE_PUBLISHING_COMPANY_SUCCESS:
            return { ...state, isLoading: false, success: true, deletePublishing: action.response, error: false };
        case publishingAction.DELETE_PUBLISHING_COMPANY_FAILURE:
            return { ...state, isLoading: false, error: action.err, deletePublishing: action.response };

        default:
            return state;    
    }
}