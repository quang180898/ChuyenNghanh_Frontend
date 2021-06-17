import api from '../api';
import { getHeader, getUrl, handleRequest, postWithFormData } from '../../functions/Services';
import { CONTENT_TYPE } from 'contant';

export const categoryService = {

    createCategory({params}) {
        const url = getUrl(api.CREATE_CATEGORY);
        return postWithFormData(params, url)
    },

    deleteCategory({ params }) {
        const requestOptions = {
            method: 'POST',
            headers: getHeader(CONTENT_TYPE),
            body: params,
        };
        const url = getUrl(api.DELETE_CATEGORY);
        return handleRequest(url, requestOptions);
    },
}

