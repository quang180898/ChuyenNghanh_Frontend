import api from '../api';
import { getHeader, getUrl, handleRequest, postWithFormData } from '../../functions/Services';
import { CONTENT_TYPE } from 'contant';

export const accountService = {

    login({ params }) {
        const requestOptions = {
            method: 'POST',
            headers: getHeader(CONTENT_TYPE),
            body: params
        };

        const url = getUrl(api.LOGIN)
        return handleRequest(url, requestOptions)
            .then(data => {
                if (data && data.success === true) {
                    localStorage.setItem('user', JSON.stringify(data['detail']));
                    window.location.replace('/')
                }
                return data;
            })
            .catch(err => console.error('**catch**:', err)) 
    },

    createOrUpdateAccount(params) {
        const { name, user_name, pass_word, password_repeat, mobile, mail } = params
        const body = params;
        console.log('params', params);
        return postWithFormData(body, api.ACCOUNT_UPDATE)
    }
}

