import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  constructor(private httpService: HttpService,
              private router: Router) { }
  public color: string;
  public username: string;
  public password: string;
  public class: string;

  ngOnInit() {
    this.class = 'fade-in';
  }
  logIn(){
  //   this.httpService.getLogInUser(this.username, this.password).subscribe(
  //     data => {
  //       console.log(data);
  //     }
  //   )
  }


}
