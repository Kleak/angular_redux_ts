import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app-state';
import {Decrement, Increment} from '../../app-action';

@Component({
  selector: 'app-demo-counter',
  templateUrl: './demo-counter.component.html',
  styleUrls: ['./demo-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCounterComponent {
  counter: number;

  constructor(private _cd: ChangeDetectorRef, private _store: Store<AppState>) {
    _store.select('counter').subscribe(this.counterStateChanged.bind(this));
  }

  counterStateChanged(state: AppState) {
    this.counter = state.counter;
    this._cd.markForCheck();
  }

  increment() {
    this._store.dispatch(new Increment());
  }

  decrement() {
    this._store.dispatch(new Decrement());
  }
}
