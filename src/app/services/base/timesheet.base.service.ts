/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE timesheetBaseService PLEASE EDIT ../timesheet.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Timesheet } from '../../domain/ang-pwafirestore_db/timesheet';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Timesheet.service.ts
 */

/*
 * SCHEMA DB Timesheet
 *
	{
		activityID: {
			type: 'Custom',
			required : true
		},
		date: {
			type: 'Date',
			required : true
		},
		quantity: {
			type: 'Number',
			required : true
		},
		skuID: {
			type: 'Custom',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
	}
 *
 */
@Injectable()
export class TimesheetBaseService {

    private timesheetCollection: AngularFirestoreCollection<Timesheet>;
    constructor(
        private afs: AngularFirestore,
        private fns: AngularFireFunctions
    ) {
        this.timesheetCollection = afs.collection<Timesheet>('timesheet');
    }


    // CRUD METHODS

    /**
    * TimesheetService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Timesheet): Promise<DocumentReference> {
        return this.timesheetCollection.add(item);
    }

    /**
    * TimesheetService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string) {
        const itemDoc: AngularFirestoreDocument<any> = this.timesheetCollection.doc(id);
        itemDoc.delete();
    }

    /**
    * TimesheetService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): AngularFirestoreDocument<Timesheet> {
        return this.afs.doc<Timesheet>('timesheet/' + id);
    }

    /**
    * TimesheetService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Timesheet[]> {
        return this.afs.collection('timesheet').snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Timesheet;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    /**
    * TimesheetService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(itemDoc: AngularFirestoreDocument<Timesheet>, item: Timesheet): Promise<void> {
        return itemDoc.update(item);
    }


    // Custom APIs

}