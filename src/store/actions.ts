import { DemoActions } from './types';
import { action } from 'typesafe-actions';

export const increment = (amount: number) => action(DemoActions.INCREMENT, amount);
export const decrement = (amount: number) => action(DemoActions.DECREMENT, amount);
export const incrementAsync = (amount: number) => action(DemoActions.INCREMENT_ASYNC, amount);
export const decrementAsync = (amount: number) => action(DemoActions.DECREMENT_ASYNC, amount);