import { put, takeLatest, all, fork } from "redux-saga/effects";
import { categoryAction } from '../action';
import { categoryService } from "../../services/index";

export function* createCategory(payload) {
    try {
        const response = yield categoryService.createCategory({ params: payload.params });
        if (response.success) {
            yield put({ type: categoryAction.CREATE_CATEGORY_SUCCESS, response })
        }
        else {
            yield put({ type: categoryAction.CREATE_CATEGORY_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: categoryAction.CREATE_CATEGORY_FAILURE, err: { err } });
    }
}

export function* createCategoryWatcher() {
    yield takeLatest(categoryAction.CREATE_CATEGORY_REQUEST, createCategory);
}

export function* deleteCategory(payload) {
    try {
        const response = yield categoryService.deleteCategory({ params: payload.params });
        if (response.success) {
            yield put({ type: categoryAction.DELETE_CATEGORY_SUCCESS, response })
        }
        else {
            yield put({ type: categoryAction.DELETE_CATEGORY_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: categoryAction.DELETE_CATEGORY_FAILURE, err: { err } });
    }
}

export function* deleteCategoryWatcher() {
    yield takeLatest(categoryAction.DELETE_CATEGORY_REQUEST, deleteCategory);
}

export default function* rootSaga() {
    yield all([
        fork(createCategoryWatcher),
        fork(deleteCategoryWatcher),
    ]);
}