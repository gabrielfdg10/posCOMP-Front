import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTopBarComponent } from './menu-top-bar/menu-top-bar.component';
import { MenuLeftBarComponent } from './menu-left-bar/menu-left-bar.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { QuestionComponent } from './question/question.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule,
    MatRadioModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    MenuTopBarComponent,
    MenuLeftBarComponent,
    PieChartComponent,
    BarChartComponent,
    PaginatorComponent,
    QuestionComponent,
  ],
  exports: [
    MenuTopBarComponent,
    MenuLeftBarComponent,
    PieChartComponent,
    BarChartComponent,
    PaginatorComponent,
    QuestionComponent
  ],
  providers: [
  ]

})
export class ComponentsModule { }
