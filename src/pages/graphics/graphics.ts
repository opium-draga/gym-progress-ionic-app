import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
	selector: 'page-graphics',
	templateUrl: 'graphics.html'
})
export class GraphicsPage {

	single =  [
		{
			"name": "Germany",
			"value": 8940000
		},
		{
			"name": "USA",
			"value": 5000000
		},
		{
			"name": "France",
			"value": 7200000
		}
	];

	// options
	showXAxis = true;
	showYAxis = true;
	gradient = false;
	showLegend = true;
	showXAxisLabel = true;
	xAxisLabel = 'Country';
	showYAxisLabel = true;
	yAxisLabel = 'Population';

	colorScheme = {
		domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
	};

	// line, area
	autoScale = true;

	constructor(public navCtrl: NavController) {

	}

	onSelect(event) {
		console.log(event);
	}

}
