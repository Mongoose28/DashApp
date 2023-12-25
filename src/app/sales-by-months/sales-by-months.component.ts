import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-months',
  templateUrl: './sales-by-months.component.html',
  styleUrls: ['./sales-by-months.component.scss']
})
export class SalesByMonthsComponent {

  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'Month wise Sales'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'       
      ]

    },
    yAxis: {
      title: {
        text: 'Revenue in $'
      }

    },
    credits: {
      enabled: false
    },
    series : [
      {
        name: "Dhaka",
        type: "line",
        data: [10, 80, 90, 200, 250, 88, 95, 280, 250, 300, 320, 420]
      },
      {
        name: "Chittagong",
        type: "line",
        data: [100, 80, 50, 20, 25, 88, 95, 200, 200, 300, 320, 420]
      },
      {
        name: "Mymenshing",
        type: "line",
        data: [55, 45, 500, 200, 250, 10, 88, 300, 350, 340, 100, 800]
      },
      {
        name: "Barisal",
        type: "line",
        data: [150, 800, 500, 200, 250, 880, 950, 200, 200, 300, 320, 420]
      },
    ]
  })

  constructor () {} 

  ngOnInit(): void {

  }

}
