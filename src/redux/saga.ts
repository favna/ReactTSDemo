import { decrement, increment } from './actions';
import { AnyAction } from 'redux';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { DemoActions } from './types';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export function* handleIncrementAsync (action: AnyAction) {
  yield delay(1000);
  yield put(increment(action.payload));
}

export function* watchIncrementAsync () {
  yield takeEvery(DemoActions.INCREMENT_ASYNC, handleIncrementAsync);
}

export function* handleDecrementAsync (action: AnyAction) {
  yield delay(1000);
  yield put(decrement(action.payload));
}

export function* watchDecrementAsync () {
  yield takeEvery(DemoActions.DECREMENT_ASYNC, handleDecrementAsync);
}

export function* demoSaga () {
  yield all([fork(watchIncrementAsync), fork(watchDecrementAsync)]);
}

export default demoSaga;