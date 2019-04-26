import { fork } from '@redux-saga/core/effects';
import { testSaga } from 'redux-saga-test-plan';
import { decrement, increment } from 'store/actions';
import * as sagas from 'store/saga';
import { DemoActions } from 'store/types';

describe('React TS Demo Saga', () => {
  describe('Unit Test', () => {
    const singleIncrement = 1;
    const singleDecrement = -singleIncrement;

    test('handleIncrementAsync', () => {
      const action = {type: DemoActions.INCREMENT_ASYNC, payload: singleIncrement};

      testSaga(sagas.handleIncrementAsync, action)
        .next()
        .next()
        .put(increment(singleIncrement))
        .finish()
        .isDone();
    });

    test('handleDecrementAsync', () => {
      const action = {type: DemoActions.DECREMENT_ASYNC, payload: singleDecrement};

      testSaga(sagas.handleDecrementAsync, action)
        .next()
        .next()
        .put(decrement(singleDecrement))
        .finish()
        .isDone();
    });

    test('watchIncrementAsync', () => {
      const action = {type: DemoActions.INCREMENT_ASYNC};

      testSaga(sagas.watchIncrementAsync)
        .next()
        .takeEvery(action.type, sagas.handleIncrementAsync)
        .finish()
        .isDone();
    });

    test('watchDecrementAsync', () => {
      const action = {type: DemoActions.DECREMENT_ASYNC};

      testSaga(sagas.watchDecrementAsync)
        .next()
        .takeEvery(action.type, sagas.handleDecrementAsync)
        .finish()
        .isDone();
    });

    test('demoSaga', () => {
      testSaga(sagas.demoSaga)
        .next()
        .all([
          fork(sagas.watchIncrementAsync),
          fork(sagas.watchDecrementAsync)
        ]);
    });
  });
});