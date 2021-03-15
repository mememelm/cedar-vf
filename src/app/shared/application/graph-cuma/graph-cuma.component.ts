import { Component, Input, OnInit } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-graph-cuma',
  templateUrl: './graph-cuma.component.html',
  styleUrls: ['./graph-cuma.component.css']
})
export class GraphCumaComponent implements OnInit {

  @Input() dataCUMA: any = []

  constructor() { }

  ngOnInit(): void {

    console.log('dataCUMA', this.dataCUMA)

    var speedCanvas: any = document.getElementById("speedChart")

    // CUMA
    var dataFirst = {
      data: [5, 0, 75, 42],
      fill: false,
      borderColor: '#fbc658',
      backgroundColor: 'transparent',
      pointBorderColor: '#fbc658',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
    }

    // CUVI
    var dataSecond = {
      data: [0, 5, 10, 12],
      fill: false,
      borderColor: '#51CACF',
      backgroundColor: 'transparent',
      pointBorderColor: '#51CACF',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8
    };

    // Agri
    // var dataThird = {
    //   data: [this.dataCUMA],
    //   fill: false,
    //   borderColor: 'green',
    //   backgroundColor: 'transparent',
    //   pointBorderColor: 'green',
    //   pointRadius: 4,
    //   pointHoverRadius: 4,
    //   pointBorderWidth: 8
    // };

    var speedData = {
      labels: ["Jan", "Feb", "Mar", "Apr"],
      datasets: [dataFirst, dataSecond]
    }

    var lineChart: any = new Chart(speedCanvas, {
      type: 'line',
      data: speedData
    })

  }

}
