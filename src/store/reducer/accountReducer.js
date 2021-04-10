import { accountAction } from '../action';

const initialState = {
    login: null,
    new_account: null,
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
            return { ...state, isFetching: true, new_account: null, success: false, error: false };
        case accountAction.CREATE_UPDATE_ACCOUNT_SUCCESS:
            return { ...state, isFetching: false, success: true, new_account: action.response, error: false };
        case accountAction.CREATE_UPDATE_ACCOUNT_FAILURE:
            return { ...state, isFetching: false, error: action.err, success: false, new_account: action.response };

        default:
            return state;    
    }
}