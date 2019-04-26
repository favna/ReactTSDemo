import { RootAction } from 'store';

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}