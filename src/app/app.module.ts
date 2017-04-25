import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app.component';
import {DemoCounterComponent} from './components/demo-counter/demo-counter.component';
import {counterReducer} from './reducers/counter';
import {initialState} from './app-state';

@NgModule({
  declarations: [
    AppComponent,
    DemoCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({counter: counterReducer}, {counter: initialState}),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
