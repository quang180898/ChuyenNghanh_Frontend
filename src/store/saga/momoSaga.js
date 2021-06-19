import { put, takeLatest, all, fork } from "redux-saga/effects";
import { momoAction } from '../action';
import { momoService } from "../../services/index";

export function* payToMomo(payload) {
    try {
        const response = yield momoService.payToMomo({ params: payload.params });
        if (response.success) {
            yield put({ type: momoAction.PAY_MOMO_SUCCESS, response })
        }
        else {
            yield put({ type: momoAction.PAY_MOMO_FAILURE, response });
        }
    } catch (err) {
        yield put({ type: momoAction.PAY_MOMO_FAILURE, err: { err } });
    }
}

export function* payToMomoWatcher() {
    yield takeLatest(momoAction.PAY_MOMO_REQUEST, payToMomo);
}

export default function* rootSaga() {
    yield all([
        fork(payToMomoWatcher),
    ]);
}