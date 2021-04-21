import { put, takeLatest, all, fork } from "redux-saga/effects";
import { accountAction } from '../action';
import { accountService } from "../../services/index";

export function* login(payload) {
    let { username, password, onNext } = payload.params
    try {
        const response = yield accountService.login(username, password, onNext);
        if (response.success) {
            yield put({ type: accountAction.LOGIN_SUCCESS, response })
        }
        else {
            yield put({ type: accountAction.LOGIN_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: accountAction.LOGIN_FAILURE, err: { err } });
    }
}

export function* loginWatcher() {
    yield takeLatest(accountAction.LOGIN_REQUEST, login);
}

// createOrUpdateAccount
export function* createOrUpdateAccount(payload) {
    console.log({payload})
    try {
        const response = yield accountService.createOrUpdateAccount(payload.params);
        if (response.success) {
            yield put({ type: accountAction.CREATE_UPDATE_ACCOUNT_SUCCESS, response })
        }
        else {
            yield put({ type: accountAction.CREATE_UPDATE_ACCOUNT_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: accountAction.CREATE_UPDATE_ACCOUNT_FAILURE, err: { err } });
    }
}

export function* createOrUpdateAccountWatcher() {
    yield takeLatest(accountAction.CREATE_UPDATE_ACCOUNT_REQUEST, createOrUpdateAccount);
}

export default function* rootSaga() {
    yield all([
        fork(loginWatcher),
        fork(createOrUpdateAccountWatcher),
    ]);
}