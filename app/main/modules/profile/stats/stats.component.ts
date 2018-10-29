import { Component, OnInit } from "@angular/core";
import { HttpService } from '../../../../services/http.service';

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"]
})
export class StatsComponent implements OnInit {
  constructor(private httpService: HttpService) {}
  public userStats: any;
  public pieChartLabels = {
    0: ["Matemática", "Tecnologias", "Fundamentos"]
  };
  public pieChartData: any;

  public barChartData: any;

  public precision = {
    math: 0,
    fund: 0,
    tech: 0
  }
  ngOnInit() {
    this.httpService.getUserStats(1).subscribe( (response) => {
      this.userStats = response;
      this.precision.math = parseInt((this.userStats.math_cor/this.userStats.math_ans*100).toFixed(0));
      this.precision.tech = parseInt((this.userStats.tech_cor/this.userStats.tech_ans*100).toFixed(0));
      this.precision.fund = parseInt((this.userStats.fund_cor/this.userStats.fund_ans*100).toFixed(0));

      this.pieChartData = {
        0: [this.userStats.math_ans, this.userStats.tech_ans, this.userStats.fund_ans],
        1: [this.userStats.math_cor, this.userStats.tech_cor, this.userStats.fund_cor],
        2: [this.precision.math, this.precision.tech, this.precision.fund]
      };
      this.barChartData = [
        {data: [this.userStats.math_ans, this.userStats.tech_ans, this.userStats.fund_ans],
        label: 'Total de questões'},
        {data: [this.userStats.math_cor, this.userStats.tech_cor, this.userStats.fund_cor],
        label: 'Acertos'},
        {data: [this.precision.math, this.precision.tech, this.precision.fund],
         label: 'Precisão em %'}
      ];
    })
  }
}
