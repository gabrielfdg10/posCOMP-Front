import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http: HttpClient ) { }

  getUsers() {
    return this.http.get('http://localhost:60996/api/users/getUsers');
  }

  getLogInUser(username: string, password: string){
    return this.http.get('http://localhost:60996/api/users/logInUser/' + username + '/' + password);
  }
s
  getQuestionsByClass(c: string){
    return this.http.get('http://localhost:60996/api/questions/getQuestionsByClass/' + c);
  }

  newUser(user: User) {
    return this.http.post('http://localhost:60996/api/users/newUser/', user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

}
