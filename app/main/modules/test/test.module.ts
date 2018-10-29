import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestComponent } from "./test.component";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { ComponentsModule } from '../../components/components.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from "@angular/router";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ComponentsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  declarations: [TestComponent]
})
export class TestModule {}
