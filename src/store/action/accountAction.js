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

    requestClearAction: (params) => ({
        type: actions.LOGIN_CLEAR,
    }),
};
export default actions;