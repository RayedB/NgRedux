import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class CounterActions {
  static INCREMENT = 'INCREMENT';
  static DECREMENT = 'DECREMENT';
  static ADD_COUNTER = 'ADD_COUNTER';

  increment(): Action {
    return { type: CounterActions.INCREMENT };
  }

  decrement(): Action {
    return { type: CounterActions.DECREMENT };
  }
}
