// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { ScheduleService } from '../../services/schedule.service';
import { ActivityService } from '../../services/activity.service';

import { Schedule } from '../../domain/ang-pwafirestore_db/schedule';
import { Activity } from '../../domain/ang-pwafirestore_db/activity';

// START - USED SERVICES

// END - USED SERVICES

/**
 * This component allows to edit a  Schedule
 */
@Component({
    selector: 'app-schedule-edit',
    templateUrl: 'schedule-edit.component.html',
    styleUrls: ['schedule-edit.component.css']
})
export class ScheduleEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<Schedule>;
    isNew: Boolean = true;
    formValid: Boolean;

    

    externalActivity: Activity[];

    constructor(
        private scheduleService: ScheduleService,
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
                this.itemDoc = this.scheduleService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

                this.activityService.findByAllocations(id).subscribe(list => this.externalActivity = list);
            }
            // Get relations
        });
    }



    /**
     * Save Schedule
     *
     * @param {boolean} formValid Form validity check
     * @param Schedule item Schedule to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.scheduleService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.scheduleService.update(this.itemDoc, this.item);
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
