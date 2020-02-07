import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetEditComponent } from './timesheet-edit.component';
import { TimesheetEditRoutingModule } from './timesheet-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TimesheetEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TimesheetEditComponent
  ]
})
export class TimesheetEditModule { }
