import { getLocalStore } from '../functions/Utils.js';

var pako = require('pako');

const CONTENT_TYPE = 'application/json; charset=utf-8';
const CONTENT_MULITPART = 'multipart/form-data';
const MNV_ENCODE = 0;
const MNV_LANGUAGE = getLocalStore('language');

function Encode(data) {
    var text = JSON.stringify(data);
    var buff = new TextEncoder("utf-8").encode(text);
    var compressed = pako.deflate(buff);
    return compressed;
}

function Decode(base64Data) {
    var decompressed = pako.inflate(base64Data);
    // var code = String.fromCharCode.apply(null, decompressed)
    var code = handleCodePoints(decompressed)
    var text = decodeURIComponent(escape(code))
    var data = JSON.parse(text);
    return data;
}

function handleCodePoints(array) {
    var CHUNK_SIZE = 0x8000; // arbitrary number here, not too small, not too big
    var index = 0;
    var length = array.length;
    var result = '';
    var slice;
    while (index < length) {
        slice = array.slice(index, Math.min(index + CHUNK_SIZE, length)); // `Math.min` is not really necessary here I think
        result += String.fromCharCode.apply(null, slice);
        index += CHUNK_SIZE;
    }
    return result;
}

function getUrl(url, data = {}) {

    // console.log('url:',url);

    var strUrl = url;
    var first = true;
    for (var key in data) {
        if (data[key] && data[key] !== '') {
            strUrl = strUrl + (first ? '?' : '&') + (key + '=' + data[key]);
            first = false;
        }
    }
    // console.log('strUrl', strUrl);
    return strUrl;
}


function getHeader(token, content_type = CONTENT_TYPE, auth_type = 'Bearer') {
    let headers;
    if (token) {
        headers = {
            'Authorization': auth_type + ' ' + token,
            'MNV-encode': MNV_ENCODE,
            'MNV-LANGUAGE': MNV_LANGUAGE,
        }
    } else {
        headers = {
            'MNV-encode': MNV_ENCODE,
            'MNV-LANGUAGE': MNV_LANGUAGE,
        }
    }

    // console.log('headers request: ',headers);
    headers['Content-Type'] = content_type;

    return headers;
}


function authHeader() {
    // return authorization header with basic auth credentials
    let user = getLocalStore('language');
    if (user && user.authdata) {
        return { 'Authorization': 'Basic ' + user.authdata };
    } else {
        return {};
    }
}

function handleRequest(url, options) {
    options['url'] = url;
    if (options.hasOwnProperty("body")) {
        if (MNV_ENCODE === 1) {
            options['body'] = Encode(options['body']);
        }
        else {
            options['body'] = JSON.stringify(options['body'])
        }
    }

    if (MNV_ENCODE === 1) {
        return fetch(url, options).then(handleResponseBuffer);
    }
    return fetch(url, options).then(handleResponseText);
}

function handleRequestBinary(url, options) {
    options['url'] = url;

    if (MNV_ENCODE === 1) {
        return fetch(url, options).then(handleResponseBuffer);
    }
    return fetch(url, options).then(handleResponseText);
}

function handleResponseBuffer(response) {
    if (!response.ok) {
        var content = response.status + ' ' + response.statusText;
        return Promise.reject(content);
    }
    return response.arrayBuffer().then(buffer => {
        // return handleData(response, Decode(buffer));
        return Decode(buffer)
    });
}

function handleResponseText(response) {
    if (!response.ok) {
        var content = response.status + ' ' + response.statusText;

        // response error and open new window
        var w = window.open('about:blank');
        w.document.open();
        w.document.write(content);
        w.document.close();

        return Promise.reject(content);
    }
    return response.json().then(data => {
        // nếu token INVALID_TOKEN thì yêu cầu login lại
        if(data && data.success === false && data.code==="INVALID_TOKEN"){
            window.localStorage.clear();
            window.location.replace('/login')
        }else{
            return data
        }
        
    });
}

// function handleData(response, data) {
//     if (data['success'] === false) {
//         const error = data['detail'];
//         return Promise.reject(error);
//     }
//     return data;
// }


//tham khao
function objectToFormData(obj, rootName, ignoreList) {
    var formData = new FormData();

    function appendFormData(data, root) {
        if (!ignore(root)) {
            root = root || '';
            if (data instanceof File) {
                formData.append(root, data);
            } else if (Array.isArray(data)) {
                for (var i = 0; i < data.length; i++) {
                    appendFormData(data[i], root + '[' + i + ']');
                }
            } else if (typeof data === 'object' && data) {
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        if (root === '') {
                            appendFormData(data[key], key);
                        } else {
                            appendFormData(data[key], root + '.' + key);
                        }
                    }
                }
            } else {
                if (data !== null && typeof data !== 'undefined') {
                    formData.append(root, data);
                }
            }
        }
    }

    function ignore(root){
        return Array.isArray(ignoreList)
            && ignoreList.some(function(x) { return x === root; });
    }

    appendFormData(obj, rootName);

    return formData;
}
function postWithFormDataTest(data, token, url, onProgress) {

    return new Promise(function (resolve, reject) {
        var formData= objectToFormData(data,'','')
        let request = new XMLHttpRequest();
        request.open("POST", url);
        onProgress && request.upload.addEventListener("progress", onProgress);
        request.setRequestHeader('MNV-ENCODE', MNV_ENCODE)
        request.setRequestHeader('Authorization', 'Bearer ' + token);
        request.send(formData);
        request.onreadystatechange = function () {
            if (request.readyState === XMLHttpRequest.DONE) {
                try {
                    let response = JSON.parse(request.responseText)
                    // if (response['success'] === false) {
                    //     const error = response['detail'];
                    //     return resolve(error);
                    // }
                    return resolve(response)
                }
                catch (e) {
                    return resolve(e.message);
                }
            }
        }
    });
}
// end test--------------------------------------------------------------------------------------------------


/**
 * update or create using form-data
 * @object {*} data: data from params
 * @string {*} token 
 */
function postWithFormData(data, url, onProgress) {

    return new Promise(function (resolve, reject) {
        const dataKeys = Object.keys(data);
        const formData = new FormData();
        for (let i in dataKeys) {
            let valueItem = data[dataKeys[i]]
            Array.isArray(valueItem)
            ? formData.append(dataKeys[i],JSON.stringify(valueItem))
            : formData.append(dataKeys[i], valueItem);
        }
        let request = new XMLHttpRequest();
        request.open("POST", url);
        onProgress && request.upload.addEventListener("progress", onProgress);
        request.setRequestHeader('MNV-ENCODE', MNV_ENCODE)
        request.send(formData);
        request.onreadystatechange = function () {
            if (request.readyState === XMLHttpRequest.DONE) {
                try {
                    let response = JSON.parse(request.responseText)
                    return resolve(response)
                }
                catch (e) {
                    return resolve(e.message);
                }
            }
        }
    });
}

export {
    getHeader,
    getUrl,
    authHeader,
    handleRequest,
    handleRequestBinary,
    postWithFormData,
    postWithFormDataTest,

    CONTENT_TYPE
}
