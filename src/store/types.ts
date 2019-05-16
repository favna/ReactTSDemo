export enum DemoActions {
  INCREMENT = '@@demo/INCREMENT_COUNT',
  DECREMENT = '@@demo/DECREMENT_COUNT',
  INCREMENT_ASYNC = '@@demo/INCREMENT_ASYNC',
  DECREMENT_ASYNC = '@@demo/DECREMENT_ASYNC',
  WHILE_TRUE_INCREMENT = '@@demo/WHILE_TRUE_INCREMENT'
}

export type DemoState = {
  readonly count: number;
};