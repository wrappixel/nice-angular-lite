import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referal-earning',
  templateUrl: './referal-earning.component.html',
  styleUrls: ['./referal-earning.component.css']
})
export class ReferalEarningComponent implements OnInit {

      // bar chart
      public barChartData: Array<object> = [
        { data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3, 0.5, 1.2, 1.0, 0.4, 0.9], label: 'Cost' }
      ];
      public barChartLabels: Array<string> = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12'
      ];
      public barChartOptions = {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        },
        scales: {
          xAxes: [{
            display: false,
            barPercentage: 0.4,
            categoryPercentage: 0.5
          }],
          yAxes: [{
            display: false
          }]
        }
      };
      public barChartColors = [
        {
          backgroundColor: '#2962ff',
          hoverBackgroundColor: '#2962ff',
          hoverBorderWidth: 2,
          hoverBorderColor: '#2962ff'
        }
      ];
      public barChartLegend = false;
      public barChartType = 'bar';

  constructor() { }

  ngOnInit(): void {
  }

}
