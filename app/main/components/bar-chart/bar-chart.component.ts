import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Matemática', 'Tecnologias', 'Fundamentos'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [100, 84, 63], label: 'Total de questões'},
    {data: [51, 32, 42], label: 'Respostas corretas'},
    {data: [49, 51, 21], label: 'Respostas erradas'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
