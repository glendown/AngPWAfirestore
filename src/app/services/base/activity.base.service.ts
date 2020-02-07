/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e341abd0e3805651222dd39
*
* You will get 10% discount for each one of your friends
* 
*/
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
 *  FOR CUSTOMIZE activityBaseService PLEASE EDIT ../activity.service.ts
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
import { Activity } from '../../domain/ang-pwafirestore_db/activity';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Activity.service.ts
 */

/*
 * SCHEMA DB Activity
 *
	{
		Description: {
			type: 'String'
		},
		Order: {
			type: 'Number',
			required : true
		},
		Title: {
			type: 'String',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		Allocations: {
			type: Schema.ObjectId,
			ref : "Activity"
		},
		parent: {
			type: Schema.ObjectId,
			ref : "Activity"
		},
	}
 *
 */
@Injectable()
export class ActivityBaseService {

    private activityCollection: AngularFirestoreCollection<Activity>;
    constructor(
        private afs: AngularFirestore,
        private fns: AngularFireFunctions
    ) {
        this.activityCollection = afs.collection<Activity>('activity');
    }


    // CRUD METHODS

    /**
    * ActivityService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Activity): Promise<DocumentReference> {
        return this.activityCollection.add(item);
    }

    /**
    * ActivityService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string) {
        const itemDoc: AngularFirestoreDocument<any> = this.activityCollection.doc(id);
        itemDoc.delete();
    }

    /**
    * ActivityService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): AngularFirestoreDocument<Activity> {
        return this.afs.doc<Activity>('activity/' + id);
    }

    /**
    * ActivityService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Activity[]> {
        return this.afs.collection('activity').snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Activity;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    /**
    * ActivityService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(itemDoc: AngularFirestoreDocument<Activity>, item: Activity): Promise<void> {
        return itemDoc.update(item);
    }


    // Custom APIs

}
