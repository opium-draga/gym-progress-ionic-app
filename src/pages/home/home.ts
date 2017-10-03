import { StoreDataState } from '../../app/store/state/store-data-state';
import {Component} from '@angular/core';
import {AlertController, NavController, ToastController} from 'ionic-angular';
import {Store} from "@ngrx/store";
import {AppState} from "../../app/store/state/app-state";
import {Weight} from "../../app/store/state/models/Weight";
import { AddWeightAction } from "../../app/store/actions/store-data-actions";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  trackedWeeks: number;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              private store: Store<AppState>) {

    this.store.select("storeDataReducer").subscribe((store: StoreDataState) => {
      this.trackedWeeks = store.weightStatistic.length;
    });
  }

  addWeightModal() {
    let prompt = this.alertCtrl.create({
      message: "Enter the weight do you have",
      inputs: [
        {
          name: 'weightValue',
          placeholder: 'Weight'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Add',
          handler: data => {
            this.addWeight(data.weightValue);
          }
        }
      ]
    });
    prompt.present();
  }

  private addWeight(weightValue) {
    let toastParams = <any>{
      position: 'top',
      message: 'Weight was added successfully!',
      cssClass: 'toast-success',
      duration: 2000
    };

    if(!weightValue) {
      toastParams.cssClass = 'toast-error';
      toastParams.message = 'Weight value cannot be empty!';
    } else {
      const newWeight: Weight = {
        weight: weightValue,
        date: Date.now()
      };
      this.store.dispatch(new AddWeightAction(newWeight));
    }

    this.toastCtrl.create(toastParams).present();
  }
}
