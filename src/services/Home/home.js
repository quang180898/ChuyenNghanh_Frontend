import api from '../api';
import { getHeader, getUrl, handleRequest, postWithFormData } from '../../functions/Services';
import { CONTENT_TYPE } from 'contant';

export const homeService = {
    loadList() {
        const requestOptions = {
            method: "GET",
            headers: getHeader(CONTENT_TYPE),
        };
        const url = getUrl(api.LIST_BOOK);
        return handleRequest(url, requestOptions);
    },
}

