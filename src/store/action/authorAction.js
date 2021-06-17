const name = 'AUTHOR_';
const actions = {

    LIST_AUTHOR_REQUEST: name + 'LIST_AUTHOR_REQUEST',
    LIST_AUTHOR_FAILURE: name + 'LIST_AUTHOR_FAILURE',
    LIST_AUTHOR_SUCCESS: name + 'LIST_AUTHOR_SUCCESS',

    CREATE_AUTHOR_REQUEST: name + 'CREATE_AUTHOR_REQUEST',
    CREATE_AUTHOR_FAILURE: name + 'CREATE_AUTHOR_FAILURE',
    CREATE_AUTHOR_SUCCESS: name + 'CREATE_AUTHOR_SUCCESS',

    DELETE_AUTHOR_REQUEST: name + 'DELETE_AUTHOR_REQUEST',
    DELETE_AUTHOR_FAILURE: name + 'DELETE_AUTHOR_FAILURE',
    DELETE_AUTHOR_SUCCESS: name + 'DELETE_AUTHOR_SUCCESS',

    AUTHOR_CLEAR: name + 'AUTHOR_CLEAR',

    getListAuthor: (params) => ({
        type: actions.LIST_AUTHOR_REQUEST,
        params: params
    }),

    createAuthor: (params) => ({
        type: actions.CREATE_AUTHOR_REQUEST,
        params: params
    }),

    deleteAuthor: (params) => ({
        type: actions.DELETE_AUTHOR_REQUEST,
        params: params
    }),

    requestClearAction: (params) => ({
        type: actions.AUTHOR_CLEAR,
    }),
};
export default actions;