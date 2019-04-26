import DemoReducer from './reducer';
import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import demoSaga from './saga';
import { DemoState } from './types';

export interface ApplicationState {
  app: DemoState;
}

export const rootReducer = combineReducers<ApplicationState>({
  app: DemoReducer,
});

export function* rootSaga () {
  yield all([fork(demoSaga)]);
}