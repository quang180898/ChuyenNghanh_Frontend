// export default allSaga;
import { all } from "redux-saga/effects";
import accountSaga from "./accountSaga";
import homeSaga from "./homeSaga";
// import bookSaga from "./bookSaga";

function* allSaga() {
  yield all([
    accountSaga(),
    homeSaga(),
    // bookSaga(),
  ]);
}

export default allSaga;