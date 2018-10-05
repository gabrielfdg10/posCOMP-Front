export class Question {
  public id: number;
  public statement: string;
  public alt_a: string;
  public alt_b: string;
  public alt_c: string;
  public alt_d: string;
  public alt_e: string;
  public answer: string;
  public identifier: string;
  public category: string;
  public second_statement: string;

  constructor(
    id: number,
    statement: string,
    alt_a: string,
    alt_b: string,
    alt_c: string,
    alt_d: string,
    alt_e: string,
    answer: string,
    identifier: string,
    category: string,
    second_statement: string
  ) {
    this.id = id;
    this.statement = statement;
    this.alt_a = alt_a;
    this.alt_b = alt_b;
    this.alt_c = alt_c;
    this.alt_d = alt_d;
    this.alt_e = alt_e;
    this.answer = answer;
    this.identifier = identifier;
    this.category = category;
    this.second_statement = second_statement;
  }
}
