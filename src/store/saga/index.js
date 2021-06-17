// export default allSaga;
import { all } from "redux-saga/effects";
import accountSaga from "./accountSaga";
import homeSaga from "./homeSaga";
import bookSaga from "./bookSaga";
import authorSaga from "./authorSaga";
import categorySaga from "./categorySaga";

function* allSaga() {
  yield all([
    accountSaga(),
    homeSaga(),
    bookSaga(),
    authorSaga(),
    categorySaga(),
  ]);
}

export default allSaga;