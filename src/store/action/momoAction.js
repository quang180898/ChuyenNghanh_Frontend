const name = 'MOMO_';
const actions = {

    PAY_MOMO_REQUEST: name + 'PAY_MOMO_REQUEST',
    PAY_MOMO_FAILURE: name + 'PAY_MOMO_FAILURE',
    PAY_MOMO_SUCCESS: name + 'PAY_MOMO_SUCCESS',

    payToMomo: (params) => ({
        type: actions.PAY_MOMO_REQUEST,
        params: params
    }),
};
export default actions;