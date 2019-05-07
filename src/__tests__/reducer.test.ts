import { decrement, increment } from 'store/actions';
import demoReducer from 'store/reducer';
import { DemoState } from 'store/types';

let initialState: DemoState;
const getInitialState = (initial?: Partial<DemoState>) => demoReducer(initial as DemoState, {} as any);

beforeEach(() => initialState = getInitialState());

test('should match snapshot', () => {
  expect(initialState).toMatchSnapshot();
});

test('Increment Action', () => {
  const action = increment(1);
  const state = demoReducer(initialState, action);

  expect(initialState.count).toBe(0);
  expect(state).toMatchObject<DemoState>({count: 1});
});

test('Decrement Action', () => {
  const action = decrement(1);
  const state = demoReducer(initialState, action);

  expect(initialState.count).toBe(0);
  expect(state).toMatchObject<DemoState>({count: -1});
});