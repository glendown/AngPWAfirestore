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
// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { SkuService } from '../../services/sku.service';

import { Sku } from '../../domain/ang-pwafirestore_db/sku';

// START - USED SERVICES
/**
* SkuService.create
*	@description CRUD ACTION create
*
* SkuService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* SkuService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  Sku
 */
@Component({
    selector: 'app-sku-edit',
    templateUrl: 'sku-edit.component.html',
    styleUrls: ['sku-edit.component.css']
})
export class SkuEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<Sku>;
    isNew: Boolean = true;
    formValid: Boolean;

    


    constructor(
        private skuService: SkuService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init list
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.isNew = false;
                this.itemDoc = this.skuService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

            }
            // Get relations
        });
    }



    /**
     * Save Sku
     *
     * @param {boolean} formValid Form validity check
     * @param Sku item Sku to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.skuService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.skuService.update(this.itemDoc, this.item);
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
