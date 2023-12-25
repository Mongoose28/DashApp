import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.scss']
})
export class SalesByCategoryComponent {

  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Category wise Sales'
    },
    xAxis: {
      categories: [
        'Electronics',
        'Cosmitics',
        'Cloths',
        'Footwear',
        'Medicine'     
      ]

    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }

    },
    credits: {
      enabled: false
    },
    series : [
    {
      type: 'pie',
      data: [
        {
          name: 'Electronics',
          y: 33.33,
          color:'#044342'
        },
        {
          name: 'Cosmitics',
          y: 8.45,
          color:'#ed9e20'
        },{
          name: 'Cloths',
          y: 5.33,
          color:'#6920fb'
        },{
          name: 'Footwear',
          y: 12.33,
          color:'#121212'
        },{
          name: 'Medicine',
          y: 25.33,
          color:'#ed4125'
        },
      ]

    }
    ]
  })
}
