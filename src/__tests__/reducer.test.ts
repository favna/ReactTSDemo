import { decrement, increment } from 'store/actions';
import demoReducer from 'store/reducer';
import { DemoState } from 'store/types';

const initialState: DemoState = {
  count: 0,
};

test('Initializes with basic state', () => {
  const state = demoReducer(initialState, {type: '@@INIT'});
  expect(state).not.toBeNull();
});

test('Increment Action', () => {
  const action = increment(1);
  const expectedState: DemoState = {...initialState, count: initialState.count + 1};
  const state = demoReducer(initialState, action);

  expect(state).toMatchObject(expectedState);
});

test('Decrement Action', () => {
  const action = decrement(1);
  const expectedState: DemoState = {...initialState, count: initialState.count - 1};
  const state = demoReducer(initialState, action);

  expect(state).toMatchObject(expectedState);
});

test('Default Condition', () => {
  const action = {type: 'NON_EXISTANT'};
  const expectedState: DemoState = initialState;
  const state = demoReducer(initialState, action);

  expect(state).toMatchObject(expectedState);
});