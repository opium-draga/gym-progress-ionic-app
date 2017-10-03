import { AppState } from '../../../app/store/state/app-state';

import { Store } from '@ngrx/store';
import { Weight } from '../../../app/store/state/models/Weight';
import { ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import {Chart} from 'chart.js';
import { StoreDataState } from "../../../app/store/state/store-data-state";

@Component({
    selector: 'page-line-chart',
    templateUrl: 'line-chart.html'
})

export class LineChartPage {
    weightStatistic: Weight[];

    @ViewChild('lineCanvas') lineCanvas;
    lineChart: any;

    constructor(public navCtrl: NavController, 
                private store: Store<AppState>) { 
      store.select("storeDataReducer").subscribe((data: StoreDataState) => {
          this.weightStatistic = data.weightStatistic;
      });
    }

    prevPage() {
        this.navCtrl.pop();
    }

    ionViewDidLoad() {

        if(!this.weightStatistic.length) {
          return false;
        }
    
        const labels = [];
    
        const values = [];
    
        this.weightStatistic.forEach(item => {
          var date = new Date(item.date);
    
          labels.push(date.getMonth() + "." + date.getDate());
          values.push(item.weight);
        });        
    
        setTimeout(() => {
          this.lineChart = 
            new Chart(this.lineCanvas.nativeElement, {
                    type: 'line',
                    data: {
                      labels: labels,
                      datasets: [
                        {
                          label: "Weight progress",
                          data: values,
                          fill: true,
                          lineTension: 0.1,
                          backgroundColor: "rgba(75,192,192,0.4)",
                          borderColor: "rgba(75,192,192,1)",
                          borderCapStyle: 'butt',
                          borderDash: [],
                          borderDashOffset: 0.0,
                          borderJoinStyle: 'miter',
                          pointBorderColor: "rgba(75,192,192,1)",
                          pointBackgroundColor: "#fff",
                          pointBorderWidth: 1,
                          pointHoverRadius: 5,
                          pointHoverBackgroundColor: "rgba(75,192,192,1)",
                          pointHoverBorderColor: "rgba(220,220,220,1)",
                          pointHoverBorderWidth: 2,
                          pointRadius: 1,
                          pointHitRadius: 10,
                          
                          spanGaps: false,
                        }
                      ]
                    }
              
              });
        }, 200);
        

  }
}