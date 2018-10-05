export class User {
  public id: number;
  public member_since: string;
  public email: string;
  public real_name: string;
  public institution: string;
  public username: string;
  public password: string;

  constructor(
    id: number,
    member_since: string,
    email: string,
    real_name: string,
    institution: string,
    username: string,
    password: string
  ) {
    this.id = id;
    this.member_since = member_since;
    this.email = email;
    this.real_name = real_name;
    this.institution = institution;
    this.username = username;
    this.password = password;
  }
}
