import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DemoCounterComponent} from './components/demo-counter/demo-counter.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DemoCounterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
