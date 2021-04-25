import { MNV_ENCODE } from '../contant.js';

/**
 * update or create using (FROM-DATA)
 * @param {*} data: data FORM from params dispatch
 * @param {*} token : token when login
 * @param {*} url : response from getUrl()
 * @param {*} onProgress : identification processing progress
 * @return {*} response data 
 **/
function postWithFormData(data, url, onProgress) {
    console.log({data, url})
    return new Promise(function (resolve, reject) {
        const dataKeys = Object.keys(data);
        const formData = new FormData();
        for (let i in dataKeys) {
            let valueItem = data[dataKeys[i]]
            Array.isArray(valueItem)
                ? formData.append(dataKeys[i], JSON.stringify(valueItem))
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
    postWithFormData //for resquest form-data
}
