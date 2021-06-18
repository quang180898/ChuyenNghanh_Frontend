import api from '../api';
import { getHeader, getUrl, handleRequest, postWithFormData } from '../../functions/Services';
import { CONTENT_TYPE } from 'contant';

export const bookService = {

    getDetailBook({params}) {
        const requestOptions = {
            method: "GET",
            headers: getHeader(CONTENT_TYPE),
        };
        const url = getUrl(api.DETAIL_BOOK, params);
        return handleRequest(url, requestOptions);
    },

    getSameCategory({params}) {
        const requestOptions = {
            method: "GET",
            headers: getHeader(CONTENT_TYPE),
        };
        const url = getUrl(api.SAME_CATEGORY, params);
        return handleRequest(url, requestOptions);
    },

    deleteBook({params}) {
        const requestOptions = {
            method: "POST",
            headers: getHeader(CONTENT_TYPE),
            body: params
        };
        const url = getUrl(api.DELETE_BOOK);
        return handleRequest(url, requestOptions);
    },

    createUpdateBook({params}) {
        const url = getUrl(api.CREATE_UPDATE_BOOK);
        return postWithFormData(params, url)
    }
}

