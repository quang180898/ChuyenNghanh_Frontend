let DOMAIN = {
    api: 'http://localhost:8000'
};
let PREFIX = '/api/backend/';

export default {
    // ACCOUNT
    LOGIN: DOMAIN.api + PREFIX + "v1/login/",
    ACCOUNT_UPDATE: DOMAIN.api + PREFIX + "v1/account/register/",
}