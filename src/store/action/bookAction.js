const name = 'BOOK_';
const actions = {

    GET_DETAIL_BOOK_REQUEST: name + 'REQUEST',
    GET_DETAIL_BOOK_FAILURE: name + 'FAILURE',
    GET_DETAIL_BOOK_SUCCESS: name + 'SUCCESS',

    GET_SAME_CATEGORY_REQUEST: name + 'GET_SAME_CATEGORY_REQUEST',
    GET_SAME_CATEGORY_FAILURE: name + 'GET_SAME_CATEGORY_FAILURE',
    GET_SAME_CATEGORY_SUCCESS: name + 'GET_SAME_CATEGORY_SUCCESS',

    DELETE_BOOK_REQUEST: name + 'DELETE_BOOK_REQUEST',
    DELETE_BOOK_FAILURE: name + 'DELETE_BOOK_FAILURE',
    DELETE_BOOK_SUCCESS: name + 'DELETE_BOOK_SUCCESS',

    CREATE_UPDATE_BOOK_REQUEST: name + 'CREATE_UPDATE_BOOK_REQUEST',
    CREATE_UPDATE_BOOK_FAILURE: name + 'CREATE_UPDATE_BOOK_FAILURE',
    CREATE_UPDATE_BOOK_SUCCESS: name + 'CREATE_UPDATE_BOOK_SUCCESS',

    LIST_ACCOUNT_BOOK_REQUEST: name + 'LIST_ACCOUNT_BOOK_REQUEST',
    LIST_ACCOUNT_BOOK_FAILURE: name + 'LIST_ACCOUNT_BOOK_FAILURE',
    LIST_ACCOUNT_BOOK_SUCCESS: name + 'LIST_ACCOUNT_BOOK_SUCCESS',

    CREATE_ACCOUNT_BOOK_REQUEST: name + 'CREATE_ACCOUNT_BOOK_REQUEST',
    CREATE_ACCOUNT_BOOK_FAILURE: name + 'CREATE_ACCOUNT_BOOK_FAILURE',
    CREATE_ACCOUNT_BOOK_SUCCESS: name + 'CREATE_ACCOUNT_BOOK_SUCCESS',

    UPDATE_ACCOUNT_BOOK_REQUEST: name + 'UPDATE_ACCOUNT_BOOK_REQUEST',
    UPDATE_ACCOUNT_BOOK_FAILURE: name + 'UPDATE_ACCOUNT_BOOK_FAILURE',
    UPDATE_ACCOUNT_BOOK_SUCCESS: name + 'UPDATE_ACCOUNT_BOOK_SUCCESS',

    DELETE_ACCOUNT_BOOK_REQUEST: name + 'DELETE_ACCOUNT_BOOK_REQUEST',
    DELETE_ACCOUNT_BOOK_FAILURE: name + 'DELETE_ACCOUNT_BOOK_FAILURE',
    DELETE_ACCOUNT_BOOK_SUCCESS: name + 'DELETE_ACCOUNT_BOOK_SUCCESS',

    BOOK_CLEAR: name + 'BOOK_CLEAR',

    getDetailBook: (params) => ({
        type: actions.GET_DETAIL_BOOK_REQUEST,
        params: params
    }),

    getSameCategory: (params) => ({
        type: actions.GET_SAME_CATEGORY_REQUEST,
        params: params
    }),

    deleteBook: (params) => ({
        type: actions.DELETE_BOOK_REQUEST,
        params: params
    }),

    createUpdateBook: (params) => ({
        type: actions.CREATE_UPDATE_BOOK_REQUEST,
        params: params
    }),

    listAccountBook: (params) => ({
        type: actions.LIST_ACCOUNT_BOOK_REQUEST,
        params: params
    }),

    createAccountBook: (params) => ({
        type: actions.CREATE_ACCOUNT_BOOK_REQUEST,
        params: params
    }),

    updateAccountBook: (params) => ({
        type: actions.UPDATE_ACCOUNT_BOOK_REQUEST,
        params: params
    }),

    deleteAccountBook: (params) => ({
        type: actions.DELETE_ACCOUNT_BOOK_REQUEST,
        params: params
    }),

    requestClearAction: (params) => ({
        type: actions.BOOK_CLEAR,
    }),
};
export default actions;