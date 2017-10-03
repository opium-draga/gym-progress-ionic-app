import { LineChartPage } from './line-chart/line-chart';
import { BarChartPage } from './bar-chart/bar-chart';
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
	selector: 'page-graphics',
	templateUrl: 'graphics.html'
})
export class GraphicsPage {

	constructor(public navCtrl: NavController) {

	}

	showWeeklyProgress() {
		this.navCtrl.push(LineChartPage);
	}

	showMonthlyProgress() {
		this.navCtrl.push(BarChartPage);
	}
}
