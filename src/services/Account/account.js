import api from '../api';
import { postWithFormData } from '../../functions/Services';

export const accountService = {
    createOrUpdateAccount(params) {
        const { name, user_name, pass_word, password_repeat, mobile, mail } = params
        const body = params;
        console.log('params', params);
        return postWithFormData(body, api.ACCOUNT_UPDATE)
    }
}

