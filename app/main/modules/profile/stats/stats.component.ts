import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"]
})
export class StatsComponent implements OnInit {
  constructor() {}
  public pieChartLabels = {
    0: ["Matemática", "Tecnologias", "Fundamentos"]
  };
  public pieChartData = {
    0: [100, 84, 63],
    1: [51, 32, 42],
    2: [51, 38, 66]
  };

  public barChartData:any[] = [
    {data: [51, 38, 66], label: 'Precisão em %'}

  ];

  ngOnInit() {}
}
