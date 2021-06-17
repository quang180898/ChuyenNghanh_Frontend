import api from '../api';
import { getHeader, getUrl, handleRequest, postWithFormData } from '../../functions/Services';
import { CONTENT_TYPE } from 'contant';

export const authorService = {

    createAuthor({params}) {
        const url = getUrl(api.CREATE_AUTHOR);
        return postWithFormData(params, url)
    },

    getListAuthor() {
        const requestOptions = {
            method: "GET",
            headers: getHeader(CONTENT_TYPE),
        };
        const url = getUrl(api.LIST_AUTHOR);
        return handleRequest(url, requestOptions);
    },

    deleteAuthor({ params }) {
        const requestOptions = {
            method: 'POST',
            headers: getHeader(CONTENT_TYPE),
            body: params,
        };
        const url = getUrl(api.DELETE_AUTHOR);
        return handleRequest(url, requestOptions);
    },
}

