import api from '../api';

export const accountService = {
    login,
    createOrUpdateAccount,
}

function login(username, password, onNext) {
    const body = { username, password }
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token, api.CONTENT_TYPE, 'Basic'),
        body: body
    };

    const url = api.getUrl(api.LOGIN)
    return api.handleRequest(url, requestOptions)
        .then(data => {
            if (data && data.success === true) {
                // store user details and basic auth credentials in local storage
                localStorage.setItem('user', JSON.stringify(data['detail']));
                window.location.reload()
            }
            return data;
        })
        .catch(err => console.error('**catch**:', err)) // Error: Dừng lại nhanh;
}

function createOrUpdateAccount(params) {
    const { name, user_name, pass_word, password_repeat, mobile, mail } = params
    const body = params;
    return api.postWithFormData(body, api.ACCOUNT_UPDATE)
}