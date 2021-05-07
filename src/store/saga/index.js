// export default allSaga;
import { all } from "redux-saga/effects";
import accountSaga from "./accountSaga";
import homeSaga from "./homeSaga";

function* allSaga() {
  yield all([
    accountSaga(),
    homeSaga(),
  ]);
}

export default allSaga;