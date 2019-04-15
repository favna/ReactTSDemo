import { incrementAsync } from './actions';
import { all, fork, put, take } from 'redux-saga/effects';
import { DemoActions } from './types';

function* handleIncrementAsync () {
    while (true) {
        const action = yield take(DemoActions.INCREMENT_ASYNC);
        setTimeout(function* () {
            yield put(incrementAsync(action.payload));
        }, 500);
    }
}

export function* demoSaga () {
    yield all([fork(handleIncrementAsync)]);
}

export default demoSaga;