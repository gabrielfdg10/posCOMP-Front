import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnChanges{

  @Input() question: any;
  @Output() changedAlternative = new EventEmitter();
  public currentAlternative: string = '';
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    if( changes.question){
      this.currentAlternative = null
    }
  }

  valueChanged(e: any){
    this.changedAlternative.emit(e.value);
  }

}
