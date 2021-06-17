import { put, takeLatest, all, fork } from "redux-saga/effects";
import { authorAction } from '../action';
import { authorService } from "../../services/index";

export function* getListAuthor(payload) {
    try {
        const response = yield authorService.getListAuthor({ params: payload.params });
        if (response.success) {
            yield put({ type: authorAction.LIST_AUTHOR_SUCCESS, response })
        }
        else {
            yield put({ type: authorAction.LIST_AUTHOR_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: authorAction.LIST_AUTHOR_FAILURE, err: { err } });
    }
}

export function* getListAuthorWatcher() {
    yield takeLatest(authorAction.LIST_AUTHOR_REQUEST, getListAuthor);
}

export function* createAuthor(payload) {
    try {
        const response = yield authorService.createAuthor({ params: payload.params });
        if (response.success) {
            yield put({ type: authorAction.CREATE_AUTHOR_SUCCESS, response })
        }
        else {
            yield put({ type: authorAction.CREATE_AUTHOR_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: authorAction.CREATE_AUTHOR_FAILURE, err: { err } });
    }
}

export function* createAuthorWatcher() {
    yield takeLatest(authorAction.CREATE_AUTHOR_REQUEST, createAuthor);
}

export function* deleteAuthor(payload) {
    try {
        const response = yield authorService.deleteAuthor({ params: payload.params });
        if (response.success) {
            yield put({ type: authorAction.DELETE_AUTHOR_SUCCESS, response })
        }
        else {
            yield put({ type: authorAction.DELETE_AUTHOR_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: authorAction.DELETE_AUTHOR_FAILURE, err: { err } });
    }
}

export function* deleteAuthorWatcher() {
    yield takeLatest(authorAction.DELETE_AUTHOR_REQUEST, deleteAuthor);
}

export default function* rootSaga() {
    yield all([
        fork(getListAuthorWatcher),
        fork(createAuthorWatcher),
        fork(deleteAuthorWatcher),
    ]);
}