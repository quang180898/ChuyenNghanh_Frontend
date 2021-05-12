import { put, takeLatest, all, fork } from "redux-saga/effects";
import { homeAction } from '../action';
import { homeService } from "../../services/index";

export function* loadList(payload) {
    try {
        const response = yield homeService.loadList({ params: payload.params });
        if (response.success) {
            yield put({ type: homeAction.LIST_BOOK_SUCCESS, response })
        }
        else {
            yield put({ type: homeAction.LIST_BOOK_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: homeAction.LIST_BOOK_FAILURE, err: { err } });
    }
}

export function* loadListWatcher() {
    yield takeLatest(homeAction.LIST_BOOK_REQUEST, loadList);
}

export function* loadCategory() {
    try {
        const response = yield homeService.loadCategory();
        if (response.success) {
            yield put({ type: homeAction.LIST_CATEGORY_SUCCESS, response })
        }
        else {
            yield put({ type: homeAction.LIST_CATEGORY_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: homeAction.LIST_CATEGORY_FAILURE, err: { err } });
    }
}

export function* loadCategoryWatcher() {
    yield takeLatest(homeAction.LIST_CATEGORY_REQUEST, loadCategory);
}

export default function* rootSaga() {
    yield all([
        fork(loadListWatcher),
        fork(loadCategoryWatcher),
    ]);
}