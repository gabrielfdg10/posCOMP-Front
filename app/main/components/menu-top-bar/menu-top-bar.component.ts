import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-menu-top-bar',
  templateUrl: './menu-top-bar.component.html',
  styleUrls: ['./menu-top-bar.component.scss']
})
export class MenuTopBarComponent implements OnInit {

  constructor(private authService: AuthService) { }
  public user: any;
  public userLoaded: boolean = false;
  ngOnInit() {
    setTimeout(() => {
      this.user = this.authService.getUser();
      console.log(this.user);
      if(this.user){
        this.user.name = this.user.real_name.split(' ')[0];
        this.userLoaded = true;
      }
    }, 100);

  }

}
