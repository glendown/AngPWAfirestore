import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetListComponent } from './timesheet-list.component';
import { TimesheetListRoutingModule } from './timesheet-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TimesheetListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TimesheetListComponent
  ]
})
export class TimesheetListModule { }
