import { call, put, takeEvery } from "redux-saga/effects";
import { getSummary } from "../server/server";
import * as actions from "../actions/actions";

function* fetchSummary() {
  try {
    console.log("saga -> fetch");
    const summaryData = yield call(getSummary);
    yield put({ type: actions.UPDATE_SUMMARY, payload: summaryData.data });
  } catch (e) {
    console.log(e);
  }
}

function* mySaga() {
  yield takeEvery(actions.FETCH_SUMMARY, fetchSummary);
}

export default mySaga;
