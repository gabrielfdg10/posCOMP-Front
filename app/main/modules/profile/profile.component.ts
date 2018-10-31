import { AuthService } from './../../../services/auth.service';
import { StatsComponent } from './stats/stats.component';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.logIn('gabrielfdg10', 'gfdg12081997');
  }

}
