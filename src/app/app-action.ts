import {AppActions} from './app-actions';

export class AppActionBase {
  constructor(public type: any) {
  }
}

export class Decrement extends AppActionBase {
  constructor() {
    super(AppActions.decrement);
  }
}

export class Increment extends AppActionBase {
  constructor() {
    super(AppActions.increment);
  }
}
