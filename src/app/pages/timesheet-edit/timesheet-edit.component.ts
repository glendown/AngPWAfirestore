// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { TimesheetService } from '../../services/timesheet.service';
import { ActivityService } from '../../services/activity.service';

import { Timesheet } from '../../domain/ang-pwafirestore_db/timesheet';
import { Activity } from '../../domain/ang-pwafirestore_db/activity';

// START - USED SERVICES
/**
* TimesheetService.create
*	@description CRUD ACTION create
*
* TimesheetService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* TimesheetService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  Timesheet
 */
@Component({
    selector: 'app-timesheet-edit',
    templateUrl: 'timesheet-edit.component.html',
    styleUrls: ['timesheet-edit.component.css']
})
export class TimesheetEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<Timesheet>;
    isNew: Boolean = true;
    formValid: Boolean;

    

    externalActivity: Activity[];

    constructor(
        private timesheetService: TimesheetService,
        private activityService: ActivityService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init list
        this.externalActivity = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.isNew = false;
                this.itemDoc = this.timesheetService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

                this.activityService.findByTimesheets(id).subscribe(list => this.externalActivity = list);
            }
            // Get relations
        });
    }



    /**
     * Save Timesheet
     *
     * @param {boolean} formValid Form validity check
     * @param Timesheet item Timesheet to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.timesheetService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.timesheetService.update(this.itemDoc, this.item);
            }
            this.goBack();
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }

}
