import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  constructor(private httpService: HttpService) { }
  public color: string;
  public username: string;
  public password: string;

  ngOnInit() {
    this.color = 'primary';

  }
  logIn(){
    this.httpService.getLogInUser(this.username, this.password).subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
