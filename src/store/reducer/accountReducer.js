import { accountAction } from '../action';

const initialState = {
    login: null,
    listBorrow: [],
    newAccount: null,
    isFetching: false,
    error: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        //login
        case accountAction.LOGIN_REQUEST:
            return { ...state, isFetching: true, login: null, success: false, error: false };
        case accountAction.LOGIN_SUCCESS:
            return { ...state, isFetching: false, success: true, login: action.response, error: false };
        case accountAction.LOGIN_FAILURE:
            return { ...state, isFetching: false, error: action.err, login: action.response };

        //new account
        case accountAction.CREATE_UPDATE_ACCOUNT_REQUEST:
            return { ...state, isFetching: true, newAccount: null, success: false, error: false };
        case accountAction.CREATE_UPDATE_ACCOUNT_SUCCESS:
            return { ...state, isFetching: false, success: true, newAccount: action.response, error: false };
        case accountAction.CREATE_UPDATE_ACCOUNT_FAILURE:
            return { ...state, isFetching: false, error: action.err, success: false, newAccount: action.response };
        

        //most borrow
        case accountAction.BORROW_REQUEST:
            return { ...state, isFetching: true, listBorrow: null, success: false, error: false };
        case accountAction.BORROW_SUCCESS:
            return { ...state, isFetching: false, success: true, listBorrow: action.response, error: false };
        case accountAction.BORROW_FAILURE:
            return { ...state, isFetching: false, error: action.err, success: false, listBorrow: action.response };
        
            //clear
        case accountAction.LOGIN_CLEAR:
            return {
                ...state,
                login: null,
                isFetching: false,
                success: false,
                error: false,
                newAccount: null,
            };

        default:
            return state;    
    }
}