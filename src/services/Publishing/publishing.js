import api from '../api';
import { getHeader, getUrl, handleRequest, postWithFormData } from '../../functions/Services';
import { CONTENT_TYPE } from 'contant';

export const publishingService = {
    getListPublishing() {
        const requestOptions = {
            method: "GET",
            headers: getHeader(CONTENT_TYPE),
        };
        const url = getUrl(api.LIST_PUBLISHING_COMPANY);
        return handleRequest(url, requestOptions);
    },

    createPublishing({params}) {
        const url = getUrl(api.CREATE_PUBLISHING_COMPANY);
        return postWithFormData(params, url)
    },

    deletePublishing({ params }) {
        const requestOptions = {
            method: 'POST',
            headers: getHeader(CONTENT_TYPE),
            body: params,
        };
        const url = getUrl(api.DELETE_PUBLISHING_COMPANY);
        return handleRequest(url, requestOptions);
    },
    
}

