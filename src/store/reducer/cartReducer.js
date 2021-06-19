import { cartAction } from '../action';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {

        // sidebar
        case cartAction.ADD_TO_CART:
            return {
                ...state,
                addCart: action.params,
            };
        case cartAction.DELETE_TO_CART:
            return {
                ...state,
                deleteCart: action.params,
            };

        default:
            return state;
    }
}