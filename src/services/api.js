import {
    getHeader, getUrl, authHeader, handleRequest, handleRequestBinary, postWithFormData,
    postWithFormDataTest,
    CONTENT_TYPE
} from './lib.js';

let PREFIX = '/backend/v1/';

export default {
    // ACCOUNT
    LOGIN: PREFIX + "/LOGIN/",
    ACCOUNT_UPDATE : PREFIX + "/REGISTER/",
    
    getHeader, getUrl, authHeader, handleRequest, handleRequestBinary, postWithFormData,
    postWithFormDataTest,
    CONTENT_TYPE  
}