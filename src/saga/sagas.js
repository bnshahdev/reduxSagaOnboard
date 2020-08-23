import { call, put, takeEvery } from "redux-saga/effects";

import * as actions from "../actions/actions";

function* fetchSummary() {
  try {
    console.log("saga -> fetch");
  } catch (e) {}
}

function* mySaga() {
  yield takeEvery(actions.FETCH_SUMMARY, fetchSummary);
}

export default mySaga;
