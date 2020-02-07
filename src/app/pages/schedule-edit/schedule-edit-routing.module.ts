import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleEditComponent } from './schedule-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleEditRoutingModule { }
