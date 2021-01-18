import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-graph-cuma',
  templateUrl: './graph-cuma.component.html',
  styleUrls: ['./graph-cuma.component.css']
})
export class GraphCumaComponent implements OnInit {

  public canvas: any
  public ctx: any
  public chartColor: any
  public chartEmail: any
  public chartHours: any

  constructor() { }

  ngOnInit(): void {

    var speedCanvas: any = document.getElementById("speedChart")

    var dataFirst = {
      data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
      fill: false,
      borderColor: '#fbc658',
      backgroundColor: 'transparent',
      pointBorderColor: '#fbc658',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
    }

    var dataSecond = {
      data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
      fill: false,
      borderColor: '#51CACF',
      backgroundColor: 'transparent',
      pointBorderColor: '#51CACF',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8
    };

    var dataThird = {
      data: [5, 0, 75, 42, 64, 45, 54, 68, 21, 35, 64, 46],
      fill: false,
      borderColor: 'green',
      backgroundColor: 'transparent',
      pointBorderColor: 'green',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8
    };

    var speedData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [dataFirst, dataSecond, dataThird]
    }

    var lineChart: any = new Chart(speedCanvas, {
      type: 'line',
      data: speedData
    })

  }

}
