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

// getInfoProfile
export function* updateInfoProfile(payload) {
    try {
        const response = yield accountService.updateInfoProfile({ params: payload.params });
        if (response.success) {
            yield put({ type: accountAction.UPDATE_INFO_PROFILE_SUCCESS, response })
        }
        else {
            yield put({ type: accountAction.UPDATE_INFO_PROFILE_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: accountAction.UPDATE_INFO_PROFILE_FAILURE, err: { err } });
    }
}

export function* updateInfoProfileWatcher() {
    yield takeLatest(accountAction.UPDATE_INFO_PROFILE_REQUEST, updateInfoProfile);
}

// changePassword
export function* changePassword(payload) {
    try {
        const response = yield accountService.changePassword({ params: payload.params });
        if (response.success) {
            yield put({ type: accountAction.CHANGE_PASSWORD_SUCCESS, response })
        }
        else {
            yield put({ type: accountAction.CHANGE_PASSWORD_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: accountAction.CHANGE_PASSWORD_FAILURE, err: { err } });
    }
}

export function* changePasswordWatcher() {
    yield takeLatest(accountAction.CHANGE_PASSWORD_REQUEST, changePassword);
}

// list User
export function* getListUser(payload) {
    try {
        const response = yield accountService.getListUser({ params: payload.params });
        if (response.success) {
            yield put({ type: accountAction.GET_LIST_USER_SUCCESS, response })
        }
        else {
            yield put({ type: accountAction.GET_LIST_USER_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: accountAction.GET_LIST_USER_FAILURE, err: { err } });
    }
}

export function* getListUserWatcher() {
    yield takeLatest(accountAction.GET_LIST_USER_REQUEST, getListUser);
}

// delete user
export function* deleteUser(payload) {
    try {
        const response = yield accountService.deleteUser({ params: payload.params });
        if (response.success) {
            yield put({ type: accountAction.DELETE_USER_SUCCESS, response })
        }
        else {
            yield put({ type: accountAction.DELETE_USER_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: accountAction.DELETE_USER_SUCCESS, err: { err } });
    }
}

export function* deleteUserWatcher() {
    yield takeLatest(accountAction.DELETE_USER_REQUEST, deleteUser);
}

export default function* rootSaga() {
    yield all([
        fork(loginWatcher),
        fork(mostBorrowWatcher),
        fork(createOrUpdateAccountWatcher),
        fork(getInfoProfileWatcher),
        fork(updateInfoProfileWatcher),
        fork(changePasswordWatcher),
        fork(getListUserWatcher),
        fork(deleteUserWatcher),
    ]);
}