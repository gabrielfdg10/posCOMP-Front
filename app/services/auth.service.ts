import { Injectable } from "@angular/core";
import { User } from "../classes/user";
import { HttpService } from 'src/app/services/http.service';
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _loggedUser: any;
  constructor(private httpService: HttpService,
              private router: Router){
    this._loggedUser = null;
  }

  logIn(username: string, password: string){
    return this.httpService.getLogInUser(username, password);
  }

  quit(){
    this._loggedUser = null;
    console.log(this._loggedUser);
    this.router.navigate(['login']);
  }

  setUser(user: any){
    this._loggedUser = user;
    console.log(this._loggedUser);
  }

  getUser(){
    return this._loggedUser;
  }

}
