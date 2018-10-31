export class Test {
  public user_id: number;
  public id: number;
  public timestart: string;
  public timeend: string;
  public math_number_questions: number;
  public fund_number_questions: number;
  public tech_number_questions: number;
  public math_correct_answers: number;
  public fund_correct_answers: number;
  public tech_correct_answers: number;
  public accuracy: number;

  constructor(
    user_id: number,
    id: number,
    timestart: string,
    timeend: string,
    math_number_questions: number,
    fund_number_questions: number,
    tech_number_questions: number,
    math_correct_answers: number,
    fund_correct_answers: number,
    tech_correct_answers: number,
    accuracy: number
  ) {
    this.user_id = user_id;
    this.id = id;
    this.timestart = timestart;
    this.timeend = timeend;
    this.math_number_questions = math_number_questions;
    this.fund_number_questions = fund_number_questions;
    this.tech_number_questions = tech_number_questions;
    this.math_correct_answers = math_correct_answers;
    this.fund_correct_answers = fund_correct_answers;
    this.tech_correct_answers = tech_correct_answers;
    this.accuracy = accuracy;
  }
}
