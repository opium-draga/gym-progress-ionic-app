import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Store} from "@ngrx/store";
import {AppState} from "../../app/store/state/app-state";
import {INCREMENT} from "../../app/store/actions/actions-creator";

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	counter: number;

	constructor(public navCtrl: NavController, private store: Store<AppState>) {
		store.select("appState")
			.subscribe((data: AppState) => {
				this.counter = data.counter;
			});
	}

	dispatchAction() {
		this.store.dispatch({
			type: INCREMENT,
			payload: {
				innerObj: {text: "hello world!"}
			}
		});
	}

}
