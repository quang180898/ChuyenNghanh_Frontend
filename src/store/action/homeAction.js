const name = 'LOGIN_';
const actions = {

    LIST_BOOK_REQUEST: name + '_REQUEST',
    LIST_BOOK_FAILURE: name + '_FAILURE',
    LIST_BOOK_SUCCESS: name + '_SUCCESS',

    loadListBook: (params) => ({
        type: actions.LIST_BOOK_REQUEST,
        params: params
    }),
};
export default actions;