const name = 'CART_';
const actions = {

    ADD_TO_CART: name + 'ADD_TO_CART',
    DELETE_TO_CART: name + 'DELETE_TO_CART',

    addToCart: (params) => ({
        type: actions.ADD_TO_CART,
        params
    }),

    deleteToCart: (params) => ({
        type: actions.DELETE_TO_CART,
        params
    }),


};
export default actions;