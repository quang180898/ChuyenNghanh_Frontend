import { commonAction } from '../action';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {

        // sidebar
        case commonAction.TOGGLE_SIDEBAR:
            return {
                ...state,
                isShowSidebar: action.params,
            };
        case commonAction.TOGGLE_SIDEBAR_MOBILE:
            return {
                ...state,
                isShowSidebarMobile: action.params,
            };

        case commonAction.SET_LABEL_HEADER:
            return {
                ...state,
                labelHeader: action.params,
            };


        default:
            return state;
    }
}