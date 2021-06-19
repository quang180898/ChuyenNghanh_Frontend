import { put, takeLatest, all, fork } from "redux-saga/effects";
import { bookAction } from '../action';
import { bookService } from "../../services/index";

export function* getDetailBook(payload) {
    try {
        const response = yield bookService.getDetailBook({ params: payload.params });
        if (response.success) {
            yield put({ type: bookAction.GET_DETAIL_BOOK_SUCCESS, response })
        }
        else {
            yield put({ type: bookAction.GET_DETAIL_BOOK_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: bookAction.GET_DETAIL_BOOK_FAILURE, err: { err } });
    }
}

export function* getDetailBookWatcher() {
    yield takeLatest(bookAction.GET_DETAIL_BOOK_REQUEST, getDetailBook);
}

export function* getSameCategory(payload) {
    try {
        const response = yield bookService.getSameCategory({ params: payload.params });
        if (response.success) {
            yield put({ type: bookAction.GET_SAME_CATEGORY_SUCCESS, response })
        }
        else {
            yield put({ type: bookAction.GET_SAME_CATEGORY_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: bookAction.GET_SAME_CATEGORY_FAILURE, err: { err } });
    }
}

export function* getSameCategoryWatcher() {
    yield takeLatest(bookAction.GET_SAME_CATEGORY_REQUEST, getSameCategory);
}

export function* createUpdateBook(payload) {
    try {
        const response = yield bookService.createUpdateBook({ params: payload.params });
        if (response.success) {
            yield put({ type: bookAction.CREATE_UPDATE_BOOK_SUCCESS, response })
        }
        else {
            yield put({ type: bookAction.CREATE_UPDATE_BOOK_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: bookAction.CREATE_UPDATE_BOOK_FAILURE, err: { err } });
    }
}

export function* createUpdateBookWatcher() {
    yield takeLatest(bookAction.CREATE_UPDATE_BOOK_REQUEST, createUpdateBook);
}

export function* deleteBook(payload) {
    try {
        const response = yield bookService.deleteBook({ params: payload.params });
        if (response.success) {
            yield put({ type: bookAction.DELETE_BOOK_SUCCESS, response })
        }
        else {
            yield put({ type: bookAction.DELETE_BOOK_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: bookAction.DELETE_BOOK_FAILURE, err: { err } });
    }
}

export function* deleteBookWatcher() {
    yield takeLatest(bookAction.DELETE_BOOK_REQUEST, deleteBook);
}

export function* listAccountBook(payload) {
    try {
        const response = yield bookService.listAccountBook({ params: payload.params });
        if (response.success) {
            yield put({ type: bookAction.LIST_ACCOUNT_BOOK_SUCCESS, response })
        }
        else {
            yield put({ type: bookAction.LIST_ACCOUNT_BOOK_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: bookAction.LIST_ACCOUNT_BOOK_FAILURE, err: { err } });
    }
}

export function* listAccountBookWatcher() {
    yield takeLatest(bookAction.LIST_ACCOUNT_BOOK_REQUEST, listAccountBook);
}

export function* updateAccountBook(payload) {
    try {
        const response = yield bookService.updateAccountBook({ params: payload.params });
        if (response.success) {
            yield put({ type: bookAction.UPDATE_ACCOUNT_BOOK_SUCCESS, response })
        }
        else {
            yield put({ type: bookAction.UPDATE_ACCOUNT_BOOK_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: bookAction.UPDATE_ACCOUNT_BOOK_FAILURE, err: { err } });
    }
}

export function* updateAccountBookWatcher() {
    yield takeLatest(bookAction.UPDATE_ACCOUNT_BOOK_REQUEST, updateAccountBook);
}

export function* createAccountBook(payload) {
    try {
        const response = yield bookService.createAccountBook({ params: payload.params });
        if (response.success) {
            yield put({ type: bookAction.CREATE_ACCOUNT_BOOK_SUCCESS, response })
        }
        else {
            yield put({ type: bookAction.CREATE_ACCOUNT_BOOK_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: bookAction.CREATE_ACCOUNT_BOOK_FAILURE, err: { err } });
    }
}

export function* createAccountBookWatcher() {
    yield takeLatest(bookAction.CREATE_ACCOUNT_BOOK_REQUEST, createAccountBook);
}

export function* deleteAccountBook(payload) {
    try {
        const response = yield bookService.deleteAccountBook({ params: payload.params });
        if (response.success) {
            yield put({ type: bookAction.DELETE_ACCOUNT_BOOK_SUCCESS, response })
        }
        else {
            yield put({ type: bookAction.DELETE_ACCOUNT_BOOK_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: bookAction.DELETE_ACCOUNT_BOOK_FAILURE, err: { err } });
    }
}

export function* deleteAccountBookWatcher() {
    yield takeLatest(bookAction.DELETE_ACCOUNT_BOOK_REQUEST, deleteAccountBook);
}

export default function* rootSaga() {
    yield all([
        fork(getDetailBookWatcher),
        fork(getSameCategoryWatcher),
        fork(createUpdateBookWatcher),
        fork(deleteBookWatcher),
        fork(listAccountBookWatcher),
        fork(updateAccountBookWatcher),
        fork(createAccountBookWatcher),
        fork(deleteAccountBookWatcher),
    ]);
}