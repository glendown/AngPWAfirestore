import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import Services
import { TimesheetService } from '../../services/timesheet.service';
// Import Models
import { Timesheet } from '../../domain/ang-pwafirestore_db/timesheet';

// START - USED SERVICES
/**
* TimesheetService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* TimesheetService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Timesheet
 * @class TimesheetListComponent
 */
@Component({
    selector: 'app-timesheet-list',
    templateUrl: './timesheet-list.component.html',
    styleUrls: ['./timesheet-list.component.css']
})
export class TimesheetListComponent implements OnInit {
    list: Observable<any[]>;
    search: any = {};
    idSelected: string;
    constructor(
        private timesheetService: TimesheetService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.list = this.timesheetService.list();
    }

    /**
     * Select Timesheet to remove
     *
     * @param {string} id Id of the Timesheet to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Timesheet
     */
    deleteItem() {
        this.timesheetService.remove(this.idSelected);
    }

}
