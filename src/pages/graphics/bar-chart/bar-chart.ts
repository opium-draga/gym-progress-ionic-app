import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'page-bar-chart',
    templateUrl: 'bar-chart.html'
})

export class BarChartPage {
    constructor(public navCtrl: NavController) { }

    prevPage() {
        this.navCtrl.pop();
    }
}