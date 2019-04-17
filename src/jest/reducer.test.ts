import { decrement, increment } from 'src/redux/actions';
import demoReducer from 'src/redux/reducer';
import { DemoState } from 'src/redux/types';

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