import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.scss"]
})
export class BarChartComponent implements OnInit {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType: string = "bar";
  public barChartLegend: boolean = true;
  public loading: boolean = true;
  @Input()
  barChartLabels: string[] = ["Matemática", "Tecnologias", "Fundamentos"];
  @Input()
  barChartData: any;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
    if (this.barChartLabels === undefined || this.barChartLabels === []) {
      this.barChartLabels = ["Matemática", "Tecnologias", "Fundamentos"];
    }

  }
}
