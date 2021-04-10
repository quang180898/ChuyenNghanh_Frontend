// export default allSaga;
import { all } from "redux-saga/effects";
import accountSaga from "./accountSaga";

function* allSaga() {
  yield all([
    accountSaga(),
  ]);
}

export default allSaga;