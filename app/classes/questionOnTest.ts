export class QuestionOnTest{
  public test_id: number;
  public question_id: number;
  public correct: number;
  constructor(test_id: number, question_id: number, correct: number){
    this.test_id = test_id;
    this.question_id = question_id;
    this.correct = correct;
  }
}
