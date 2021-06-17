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
                    window.location.reload()
                }
                return data;
            })
            .catch(err => console.error('**catch**:', err)) 
    },

    createOrUpdateAccount(params) {
        const body = params;
        console.log('params', params);
        return postWithFormData(body, api.ACCOUNT_UPDATE)
    },

    loadListBorrow() {
        const requestOptions = {
            method: "GET",
            headers: getHeader(CONTENT_TYPE),
        };
        const url = getUrl(api.MOST_BORROW);
        return handleRequest(url, requestOptions);
    },

    getInfoProfile({params}) {
        const requestOptions = {
            method: "GET",
            headers: getHeader(CONTENT_TYPE),
        };
        const url = getUrl(api.INFO_PROFILE, params);
        return handleRequest(url, requestOptions);
    },

    updateInfoProfile({ params }) {
        const body = params;
        return postWithFormData(body, api.UPDATE_PROFILE)
    },

    changePassword({ params }) {
        const requestOptions = {
            method: 'POST',
            headers: getHeader(CONTENT_TYPE),
            body: params,
        };
        const url = getUrl(api.CHANGE_PASSWORD);
        return handleRequest(url, requestOptions);
    },

    getListUser() {
        const requestOptions = {
            method: "GET",
            headers: getHeader(CONTENT_TYPE),
        };
        const url = getUrl(api.LIST_USER);
        return handleRequest(url, requestOptions);
    },

    deleteUser({params}) {
        const requestOptions = {
            method: "POST",
            headers: getHeader(CONTENT_TYPE),
            body: params,
        };
        const url = getUrl(api.DELETE_USER);
        return handleRequest(url, requestOptions);
    },
    
    
}

