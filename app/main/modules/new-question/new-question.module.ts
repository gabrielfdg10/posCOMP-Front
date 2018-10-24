import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewQuestionComponent } from './new-question.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [NewQuestionComponent],
  exports: [
    NewQuestionComponent
  ]
})
export class NewQuestionModule { }
