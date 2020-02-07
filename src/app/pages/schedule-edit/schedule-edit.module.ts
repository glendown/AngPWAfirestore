import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleEditComponent } from './schedule-edit.component';
import { ScheduleEditRoutingModule } from './schedule-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ScheduleEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ScheduleEditComponent
  ]
})
export class ScheduleEditModule { }
