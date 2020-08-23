// @flow
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers/reducer";
import createSagaMiddleware from "redux-saga";
import mySaga from "../saga/sagas";

var store;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = undefined) {
  const enhancer = compose(applyMiddleware(sagaMiddleware));
  store = createStore(reducer, initialState, enhancer);

  // then run the saga
  sagaMiddleware.run(mySaga);

  return store;
}
