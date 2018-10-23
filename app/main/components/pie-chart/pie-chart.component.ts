import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.scss"]
})
export class PieChartComponent implements OnInit {
  constructor() {}
  // Pie
  @Input() pieChartLabels: string[] = [];
  @Input() pieChartData: number[] = [];
  @Input() barChartData;
  @Input() pieChartType: string = "pie";


  ngOnInit() {}
}
