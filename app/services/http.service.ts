import { Test } from "./../classes/test";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../classes/user";
import { Question } from "../classes/question";
import { QuestionOnTest } from "../classes/questionOnTest";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get("http://localhost:60996/api/users/getUsers");
  }

  getLogInUser(username: string, password: string) {
    return this.http.get(
      "http://localhost:60996/api/users/logInUser/" + username + "/" + password
    );
  }
  s;
  getQuestionsByClass(c: string) {
    return this.http.get(
      "http://localhost:60996/api/questions/getQuestionsByClass/" + c
    );
  }

  getTestByUser(user_id: number) {
    return this.http.get(
      "http://localhost:60996/api/tests/getTestByUser/" + user_id
    );
  }

  getRelationsByTestId(test_id: number){
    return this.http.get(
      "http://localhost:60996/api/qot/getRelationsByTestId/" + test_id
    );
  }

  getRelationsByQuestionId(question_id: number){
    return this.http.get(
      "http://localhost:60996/api/qot/getRelationsByQuestionId/" + question_id
    );
  }

  postNewUser(user: User) {
    return this.http.post("http://localhost:60996/api/users/newUser/", user, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  postNewUserInformation(user: User) {
    return this.http.post(
      "http://localhost:60996/api/users/changeUserInformation/",
      user,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }
    );
  }

  postNewQuestion(question: Question) {
    return this.http.post(
      "http://localhost:60996/api/questions/newQuestion/",
      question,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }
    );
  }

  postNewTest(test: Test) {
    return this.http.post(
      "http://localhost:60996/api/tests/newTest/",
      test,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }
    );
  }

  postNewRelation(test_id: number, question_id: number){
    return this.http.post(
      "http://localhost:60996/api/qot/newRelation/" + test_id + "/" + question_id, null
    );
  }

}
