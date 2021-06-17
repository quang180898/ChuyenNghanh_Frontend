const name = 'ACCOUNT_';
const actions = {

    LOGIN_REQUEST: name + 'REQUEST',
    LOGIN_FAILURE: name + 'FAILURE',
    LOGIN_SUCCESS: name + 'SUCCESS',

    CREATE_UPDATE_ACCOUNT_REQUEST: name + 'CREATE_UPDATE_ACCOUNT_REQUEST',
    CREATE_UPDATE_ACCOUNT_FAILURE: name + 'CREATE_UPDATE_ACCOUNT_FAILURE',
    CREATE_UPDATE_ACCOUNT_SUCCESS: name + 'CREATE_UPDATE_ACCOUNT_SUCCESS',

    BORROW_REQUEST: name + 'BORROW_REQUEST',
    BORROW_FAILURE: name + 'BORROW_FAILURE',
    BORROW_SUCCESS: name + 'BORROW_SUCCESS',

    GET_INFO_PROFILE_REQUEST: name + 'GET_INFO_PROFILE_REQUEST',
    GET_INFO_PROFILE_FAILURE: name + 'GET_INFO_PROFILE_FAILURE',
    GET_INFO_PROFILE_SUCCESS: name + 'GET_INFO_PROFILE_SUCCESS',

    UPDATE_INFO_PROFILE_REQUEST: name + 'UPDATE_INFO_PROFILE_REQUEST',
    UPDATE_INFO_PROFILE_FAILURE: name + 'UPDATE_INFO_PROFILE_FAILURE',
    UPDATE_INFO_PROFILE_SUCCESS: name + 'UPDATE_INFO_PROFILE_SUCCESS',

    CHANGE_PASSWORD_REQUEST: name + 'CHANGE_PASSWORD_REQUEST',
    CHANGE_PASSWORD_FAILURE: name + 'CHANGE_PASSWORD_FAILURE',
    CHANGE_PASSWORD_SUCCESS: name + 'CHANGE_PASSWORD_SUCCESS',

    GET_LIST_USER_REQUEST: name + 'GET_LIST_USER_REQUEST',
    GET_LIST_USER_FAILURE: name + 'GET_LIST_USER_FAILURE',
    GET_LIST_USER_SUCCESS: name + 'GET_LIST_USER_SUCCESS',

    DELETE_USER_REQUEST: name + 'DELETE_USER_REQUEST',
    DELETE_USER_FAILURE: name + 'DELETE_USER_FAILURE',
    DELETE_USER_SUCCESS: name + 'DELETE_USER_SUCCESS',

    LOGIN_CLEAR: name + 'LOGIN_CLEAR',

    loadLogin: (params) => ({
        type: actions.LOGIN_REQUEST,
        params: params
    }),

    loadMostBorrow: (params) => ({
        type: actions.BORROW_REQUEST,
        params: params
    }),

    createOrUpdateAccount: (params) => ({
        type: actions.CREATE_UPDATE_ACCOUNT_REQUEST,
        params: params
    }),

    getInfoProfile: (params) => ({
        type: actions.GET_INFO_PROFILE_REQUEST,
        params: params
    }),

    updateInfoProfile: (params) => ({
        type: actions.UPDATE_INFO_PROFILE_REQUEST,
        params: params
    }),

    changePassword: (params) => ({
        type: actions.CHANGE_PASSWORD_REQUEST,
        params: params
    }),

    getListUser: (params) => ({
        type: actions.GET_LIST_USER_REQUEST,
        params: params
    }),

    deleteUser: (params) => ({
        type: actions.DELETE_USER_REQUEST,
        params: params
    }),

    requestClearAction: (params) => ({
        type: actions.LOGIN_CLEAR,
    }),
};
export default actions;