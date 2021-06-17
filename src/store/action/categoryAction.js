const name = 'CATEGORY_';
const actions = {

    CREATE_CATEGORY_REQUEST: name + 'CREATE_CATEGORY_REQUEST',
    CREATE_CATEGORY_FAILURE: name + 'CREATE_CATEGORY_FAILURE',
    CREATE_CATEGORY_SUCCESS: name + 'CREATE_CATEGORY_SUCCESS',

    DELETE_CATEGORY_REQUEST: name + 'DELETE_CATEGORY_REQUEST',
    DELETE_CATEGORY_FAILURE: name + 'DELETE_CATEGORY_FAILURE',
    DELETE_CATEGORY_SUCCESS: name + 'DELETE_CATEGORY_SUCCESS',

    CATEGORY_CLEAR: name + 'CATEGORY_CLEAR',

    createCategory: (params) => ({
        type: actions.CREATE_CATEGORY_REQUEST,
        params: params
    }),

    deleteCategory: (params) => ({
        type: actions.DELETE_CATEGORY_REQUEST,
        params: params
    }),

    requestClearAction: (params) => ({
        type: actions.CATEGORY_CLEAR,
    }),
};
export default actions;