const name = 'LOGIN_';
const actions = {

    LOGIN_REQUEST: name + '_REQUEST',
    LOGIN_FAILURE: name + '_FAILURE',
    LOGIN_SUCCESS: name + '_SUCCESS',

    CREATE_UPDATE_ACCOUNT_REQUEST: name + 'CREATE_UPDATE_ACCOUNT_REQUEST',
    CREATE_UPDATE_ACCOUNT_FAILURE: name + 'CREATE_UPDATE_ACCOUNT_FAILURE',
    CREATE_UPDATE_ACCOUNT_SUCCESS: name + 'CREATE_UPDATE_ACCOUNT_SUCCESS',

    LOGIN_CLEAR: name + 'CLEAR',

    loadLogin: (params) => ({
        type: actions.LOGIN_REQUEST,
        params: params
    }),

    createOrUpdateAccount: (params) => ({
        type: actions.CREATE_UPDATE_ACCOUNT_REQUEST,
        params: params
    }),

    requestClearAction: (params) => ({
        type: actions.LOGIN_CLEAR,
    }),
};
export default actions;