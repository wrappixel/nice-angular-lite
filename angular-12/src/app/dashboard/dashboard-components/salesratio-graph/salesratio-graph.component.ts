import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesratio-graph',
  templateUrl: './salesratio-graph.component.html',
  styleUrls: ['./salesratio-graph.component.css']
})
export class SalesratioGraphComponent implements OnInit {

    // lineChart
    public lineChartData: Array<object> = [
      { data: [24.5, 28.3, 42.7, 32, 34.9, 48.6, 40], label: 'Iphone' },
      { data: [8.9, 5.8, 21.9, 5.8, 16.5, 6.5, 14.5], label: 'Ipad' }
    ];
    public lineChartLabels: Array<string> = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
    ];
    public lineChartOptions = {
      responsive: true,
      maintainAspectRatio: false
    };
    public lineChartColors = [
      {
        // grey
        backgroundColor: 'transparent',
        borderColor: '#137eff',
        pointBackgroundColor: '#137eff',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#137eff'
      },
      {
        // dark grey
        backgroundColor: 'transparent',
        borderColor: '#ced4da',
        pointBackgroundColor: '#ced4da',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#ced4da'
      }
    ];
    public lineChartLegend = false;
    public lineChartType = 'line';
  


  constructor() { }

  ngOnInit(): void {
  }

}
