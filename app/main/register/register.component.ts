import { REGISTER_FIELDS } from './register.const';
import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/animations/fade.animation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [fadeAnimation]
})
export class RegisterComponent implements OnInit {

  constructor() { }
  public register_fields = REGISTER_FIELDS;
  public regObject = {
    username: '',
    pw1: '',
    pw2: '',
    email: '',
    real_name: '',
    institution: ''
  }
  public imageLink: string = "../../../assets/img/bg.jpg";

  ngOnInit() {
  }

}
