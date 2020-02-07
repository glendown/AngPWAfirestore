import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleListComponent } from './schedule-list.component';
import { ScheduleListRoutingModule } from './schedule-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ScheduleListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ScheduleListComponent
  ]
})
export class ScheduleListModule { }
