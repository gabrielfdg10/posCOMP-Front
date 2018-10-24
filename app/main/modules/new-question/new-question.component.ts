import { HttpService } from './../../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { Question } from '../../../classes/question';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})
export class NewQuestionComponent implements OnInit {

  constructor(private httpService: HttpService) { }
  public question = {
    id: 0,
    statement: '',
    alt_a: '',
    alt_b: '',
    alt_c: '',
    alt_d: '',
    alt_e: '',
    answer: '',
    identifier: '',
    category: '',
    second_statement: ''
  }
  ngOnInit() {

  }
  insert(){
    this.httpService.postNewQuestion(this.question).subscribe( (response) => {
      console.log(response);
    });
  }
}
