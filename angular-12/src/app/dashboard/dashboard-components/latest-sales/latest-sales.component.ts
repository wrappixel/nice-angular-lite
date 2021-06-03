import { Component, OnInit } from '@angular/core';
import { Sale, latastSales } from './sales-data';

@Component({
  selector: 'app-latest-sales',
  templateUrl: './latest-sales.component.html',
  styleUrls: ['./latest-sales.component.css']
})
export class LatestSalesComponent implements OnInit {

  latestSalesData: Sale[];

  constructor() {

    this.latestSalesData = latastSales;
  }

  ngOnInit(): void {
  }

}
