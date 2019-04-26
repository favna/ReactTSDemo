import { DemoActions, DemoState } from './types';
import { createReducer } from 'typesafe-actions';

const initialState: DemoState = {
  count: 0,
};

const reducer = createReducer(initialState)
  .handleAction(DemoActions.INCREMENT, (state, action) => ({ ...state, count: state.count + action.payload }))
  .handleAction(DemoActions.DECREMENT, (state, action) => ({ ...state, count: state.count - action.payload }));

export default reducer;