import { put, takeLatest, all, fork } from "redux-saga/effects";
import { publishingAction } from '../action';
import { publishingService } from "../../services/index";

export function* getListPublishing(payload) {
    try {
        const response = yield publishingService.getListPublishing({ params: payload.params });
        if (response.success) {
            yield put({ type: publishingAction.LIST_PUBLISHING_COMPANY_SUCCESS, response })
        }
        else {
            yield put({ type: publishingAction.LIST_PUBLISHING_COMPANY_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: publishingAction.LIST_PUBLISHING_COMPANY_FAILURE, err: { err } });
    }
}

export function* getListPublishingWatcher() {
    yield takeLatest(publishingAction.LIST_PUBLISHING_COMPANY_REQUEST, getListPublishing);
}

export function* createPublishing(payload) {
    try {
        const response = yield publishingService.createPublishing({ params: payload.params });
        if (response.success) {
            yield put({ type: publishingAction.CREATE_PUBLISHING_COMPANY_SUCCESS, response })
        }
        else {
            yield put({ type: publishingAction.CREATE_PUBLISHING_COMPANY_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: publishingAction.CREATE_PUBLISHING_COMPANY_FAILURE, err: { err } });
    }
}

export function* createPublishingWatcher() {
    yield takeLatest(publishingAction.CREATE_PUBLISHING_COMPANY_REQUEST, createPublishing);
}

export function* deletePublishing(payload) {
    try {
        const response = yield publishingService.deletePublishing({ params: payload.params });
        if (response.success) {
            yield put({ type: publishingAction.DELETE_PUBLISHING_COMPANY_SUCCESS, response })
        }
        else {
            yield put({ type: publishingAction.DELETE_PUBLISHING_COMPANY_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: publishingAction.DELETE_PUBLISHING_COMPANY_FAILURE, err: { err } });
    }
}

export function* deletePublishingWatcher() {
    yield takeLatest(publishingAction.DELETE_PUBLISHING_COMPANY_REQUEST, deletePublishing);
}

export default function* rootSaga() {
    yield all([
        fork(getListPublishingWatcher),
        fork(createPublishingWatcher),
        fork(deletePublishingWatcher),
    ]);
}