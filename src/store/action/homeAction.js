const name = 'HOME_';
const actions = {

    LIST_BOOK_REQUEST: name + 'REQUEST',
    LIST_BOOK_FAILURE: name + 'FAILURE',
    LIST_BOOK_SUCCESS: name + 'SUCCESS',

    LIST_CATEGORY_REQUEST: name + 'LIST_CATEGORY_REQUEST',
    LIST_CATEGORY_FAILURE: name + 'LIST_CATEGORY_FAILURE',
    LIST_CATEGORY_SUCCESS: name + 'LIST_CATEGORY_SUCCESS',

    HOME_CLEAR: name + 'HOME_CLEAR',

    loadListCategory: (params) => ({
        type: actions.LIST_CATEGORY_REQUEST,
        params: params
    }),

    loadListBook: (params) => ({
        type: actions.LIST_BOOK_REQUEST,
        params: params
    }),

    requestClearAction: (params) => ({
        type: actions.HOME_CLEAR,
    }),
};
export default actions;