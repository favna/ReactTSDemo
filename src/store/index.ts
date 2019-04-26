import * as counterActions from './actions';
import DemoReducer from './reducer';
import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import demoSaga from './saga';
import { DemoState } from './types';
import { ActionType } from 'typesafe-actions';

export type ApplicationState = Readonly<{
  app: DemoState;
}>;

export const rootReducer = combineReducers<ApplicationState>({
  app: DemoReducer,
});

export const rootActions = {
  counter: counterActions,
};

export type RootAction = ActionType<typeof rootActions>;

export function* rootSaga () {
  yield all([fork(demoSaga)]);
}