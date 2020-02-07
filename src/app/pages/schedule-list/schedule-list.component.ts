import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import Services
import { ScheduleService } from '../../services/schedule.service';
// Import Models
import { Schedule } from '../../domain/ang-pwafirestore_db/schedule';

// START - USED SERVICES
/**
* ScheduleService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* ScheduleService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Schedule
 * @class ScheduleListComponent
 */
@Component({
    selector: 'app-schedule-list',
    templateUrl: './schedule-list.component.html',
    styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
    list: Observable<any[]>;
    search: any = {};
    idSelected: string;
    constructor(
        private scheduleService: ScheduleService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.list = this.scheduleService.list();
    }

    /**
     * Select Schedule to remove
     *
     * @param {string} id Id of the Schedule to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Schedule
     */
    deleteItem() {
        this.scheduleService.remove(this.idSelected);
    }

}
