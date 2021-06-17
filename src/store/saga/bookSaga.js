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

export default function* rootSaga() {
    yield all([
        fork(getDetailBookWatcher),
        fork(getSameCategoryWatcher),
        fork(createUpdateBookWatcher),
        fork(deleteBookWatcher),
    ]);
}