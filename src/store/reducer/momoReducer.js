import { momoAction } from '../action';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case momoAction.PAY_MOMO_REQUEST:
            return { ...state, isLoading: true, linkMomo: null, success: false, error: false };
        case momoAction.PAY_MOMO_SUCCESS:
            return { ...state, isLoading: false, success: true, linkMomo: action.response, error: false };
        case momoAction.PAY_MOMO_FAILURE:
            return { ...state, isLoading: false, error: action.err, linkMomo: action.response };

        //clear
        default:
            return state;    
    }
}