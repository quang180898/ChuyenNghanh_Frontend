const name = "COMMON"
const actions = {

    TOGGLE_SIDEBAR: name + 'TOGGLE_SIDEBAR',
    TOGGLE_SIDEBAR_MOBILE: name + 'TOGGLE_SIDEBAR_MOBILE',
    SET_LABEL_HEADER: name + "SET_LABEL_HEADER",
    FILTER_HEADER: name + "FILTER_HEADER",

    //-------------------
    /*toggle sidebar */
    toggleSidebar: (params) => ({
        type: actions.TOGGLE_SIDEBAR,
        params
    }),
    toggleSidebarMobile: (params) => ({
        type: actions.TOGGLE_SIDEBAR_MOBILE,
        params
    }),

    setTitleHeader: (params) => ({
        type: actions.SET_LABEL_HEADER,
        params: params
    }),

    filterHeader: (params) => ({
        type: actions.FILTER_HEADER,
        params: params
    }),

    clearData: (params) => ({
        type: actions.CLEAR_DATA_COMMON,
        params: params
    }),
};

export default actions;