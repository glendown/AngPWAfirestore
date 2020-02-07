import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimesheetEditComponent } from './timesheet-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TimesheetEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimesheetEditRoutingModule { }
