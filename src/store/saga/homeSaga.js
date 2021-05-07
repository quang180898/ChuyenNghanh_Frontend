import { put, takeLatest, all, fork } from "redux-saga/effects";
import { homeAction } from '../action';
import { homeService } from "../../services/index";

export function* loadList() {
    try {
        const response = yield homeService.loadList();
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



export default function* rootSaga() {
    yield all([
        fork(loadListWatcher),
    ]);
}