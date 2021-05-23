import { put, takeLatest, all, fork } from "redux-saga/effects";
import { accountAction } from '../action';
import { accountService } from "../../services/index";

export function* login(payload) {
    try {
        const response = yield accountService.login({ params: payload.params });
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

export function* mostBorrow(payload) {
    try {
        const response = yield accountService.loadListBorrow({ params: payload.params });
        if (response.success) {
            yield put({ type: accountAction.BORROW_SUCCESS, response })
        }
        else {
            yield put({ type: accountAction.BORROW_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: accountAction.BORROW_FAILURE, err: { err } });
    }
}

export function* mostBorrowWatcher() {
    yield takeLatest(accountAction.BORROW_REQUEST, mostBorrow);
}

// createOrUpdateAccount
export function* createOrUpdateAccount(payload) {
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

// getInfoProfile
export function* getInfoProfile(payload) {
    try {
        const response = yield accountService.getInfoProfile({ params: payload.params });
        if (response.success) {
            yield put({ type: accountAction.GET_INFO_PROFILE_SUCCESS, response })
        }
        else {
            yield put({ type: accountAction.GET_INFO_PROFILE_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: accountAction.GET_INFO_PROFILE_FAILURE, err: { err } });
    }
}

export function* getInfoProfileWatcher() {
    yield takeLatest(accountAction.GET_INFO_PROFILE_REQUEST, getInfoProfile);
}

export default function* rootSaga() {
    yield all([
        fork(loginWatcher),
        fork(mostBorrowWatcher),
        fork(createOrUpdateAccountWatcher),
        fork(getInfoProfileWatcher),
    ]);
}