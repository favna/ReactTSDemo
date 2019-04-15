import { DemoActions } from './types';
import { action } from 'typesafe-actions';

export const increment = (amount?: number) => action(DemoActions.INCREMENT, amount ? amount : 1);
export const decrement = (amount?: number) => action(DemoActions.DECREMENT, amount ? amount : 1);
export const incrementAsync = (amount?: number) => action(DemoActions.INCREMENT_ASYNC, amount ? amount : 1);
export const decrementAsync = (amount?: number) => action(DemoActions.DECREMENT_ASYNC, amount ? amount : 1);