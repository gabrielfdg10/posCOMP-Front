export class QuestionOnTest{
  public test_id: number;
  public question_id: number;
  public correct: number;
  public question_type: string;
  constructor(test_id: number, question_id: number, correct: number, question_type: string){
    this.test_id = test_id;
    this.question_id = question_id;
    this.correct = correct;
    this.question_type = question_type;
  }
}
