import {ActionReducer} from '@ngrx/store';
import {AppState} from '../app-state';
import {AppActionBase} from '../app-action';
import {AppActions} from '../app-actions';

export const counterReducer: ActionReducer<AppState> = (state: AppState, action: AppActionBase): AppState => {
  switch (action.type) {
    case AppActions.increment:
      return new AppState(state.counter + 1);
    case AppActions.decrement:
      return new AppState(state.counter - 1);
    default:
      return state;
  }
};
