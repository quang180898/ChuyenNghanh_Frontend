import { accountAction } from '../action';

const initialState = {
    login: null,
    listBorrow: [],
    newAccount: null,
    isLoading: false,
    error: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        //login
        case accountAction.LOGIN_REQUEST:
            return { ...state, isLoading: true, login: null, success: false, error: false };
        case accountAction.LOGIN_SUCCESS:
            return { ...state, isLoading: false, success: true, login: action.response, error: false };
        case accountAction.LOGIN_FAILURE:
            return { ...state, isLoading: false, error: action.err, login: action.response };

        //new account
        case accountAction.CREATE_UPDATE_ACCOUNT_REQUEST:
            return { ...state, isLoading: true, newAccount: null, success: false, error: false };
        case accountAction.CREATE_UPDATE_ACCOUNT_SUCCESS:
            return { ...state, isLoading: false, success: true, newAccount: action.response, error: false };
        case accountAction.CREATE_UPDATE_ACCOUNT_FAILURE:
            return { ...state, isLoading: false, error: action.err, success: false, newAccount: action.response };
        

        //most borrow
        case accountAction.BORROW_REQUEST:
            return { ...state, isLoading: true, listBorrow: null, success: false, error: false };
        case accountAction.BORROW_SUCCESS:
            return { ...state, isLoading: false, success: true, listBorrow: action.response, error: false };
        case accountAction.BORROW_FAILURE:
            return { ...state, isLoading: false, error: action.err, success: false, listBorrow: action.response };

        //info profile
        case accountAction.GET_INFO_PROFILE_REQUEST:
            return { ...state, isLoading: true, infoProfile: null, success: false, error: false };
        case accountAction.GET_INFO_PROFILE_SUCCESS:
            return { ...state, isLoading: false, success: true, infoProfile: action.response, error: false };
        case accountAction.GET_INFO_PROFILE_FAILURE:
            return { ...state, isLoading: false, error: action.err, success: false, infoProfile: action.response };

         //update profile
         case accountAction.UPDATE_INFO_PROFILE_REQUEST:
            return { ...state, isLoading: true, postUpdateResponse: null, success: false, error: false };
        case accountAction.UPDATE_INFO_PROFILE_SUCCESS:
            return { ...state, isLoading: false, success: true, postUpdateResponse: action.response, error: false };
        case accountAction.UPDATE_INFO_PROFILE_FAILURE:
            return { ...state, isLoading: false, error: action.err, success: false, postUpdateResponse: action.response };

         //change Password
         case accountAction.CHANGE_PASSWORD_REQUEST:
            return { ...state, isLoading: true, changePassword: null, success: false, error: false };
        case accountAction.CHANGE_PASSWORD_SUCCESS:
            return { ...state, isLoading: false, success: true, changePassword: action.response, error: false };
        case accountAction.CHANGE_PASSWORD_FAILURE:
            return { ...state, isLoading: false, error: action.err, success: false, changePassword: action.response };    
        
        //clear
        case accountAction.LOGIN_CLEAR:
            return {
                ...state,
                login: null,
                isLoading: false,
                success: false,
                error: false,
                newAccount: null,
            };

        default:
            return state;    
    }
}