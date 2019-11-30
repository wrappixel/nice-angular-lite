import { Component, AfterViewInit } from '@angular/core';


declare var require: any;

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }
  // lineChart
  public lineChartData: Array<any> = [
    { data: [24.5, 28.3, 42.7, 32, 34.9, 48.6, 40], label: 'Iphone'},
    { data: [8.9, 5.8, 21.9, 5.8, 16.5, 6.5, 14.5], label: 'Ipad' }
  ];
  public lineChartLabels: Array<any> = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
  ];
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Array<any> = [
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

  // bar chart
    public barChartData: Array<any> = [
        { data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3, 0.5, 1.2, 1.0, 0.4, 0.9], label: 'Cost' }
    ];
    public barChartLabels: Array<any> = [
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
    public barChartOptions: any = {
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
    public barChartColors: Array<any> = [
        {
            backgroundColor: '#2962ff',
            hoverBackgroundColor: '#2962ff',
            hoverBorderWidth: 2,
            hoverBorderColor: '#2962ff'
        }
    ];
    public barChartLegend = false;
    public barChartType = 'bar';
  ngAfterViewInit() {}
}
