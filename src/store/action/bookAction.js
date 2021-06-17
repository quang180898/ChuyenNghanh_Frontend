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

    requestClearAction: (params) => ({
        type: actions.BOOK_CLEAR,
    }),
};
export default actions;