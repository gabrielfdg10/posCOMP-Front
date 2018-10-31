export class QuestionOnTest{
  public test_id: number;
  public question_id: number;

  constructor(test_id: number, question_id: number){
    this.test_id = test_id;
    this.question_id = question_id;
  }
}
