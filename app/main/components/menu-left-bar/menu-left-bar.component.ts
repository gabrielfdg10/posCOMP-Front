import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-left-bar',
  templateUrl: './menu-left-bar.component.html',
  styleUrls: ['./menu-left-bar.component.scss']
})
export class MenuLeftBarComponent implements OnInit {

  constructor() { }

  public menuItens = [
    {
      'title': 'PERFIL',
      'icon': 'person',
      'route': 'profile'
    },
    {
      'title': 'SIMULADOS',
      'icon': 'notes',
      'route': 'test'
    },
    {
      'title': 'HISTÓRICO',
      'icon': 'timeline',
      'route': 'history'
    },
    {
      'title': 'CONFIGURAÇÕES',
      'icon': 'settings',
      'route': 'settings'
    },
    {
      'title': 'LINKS ÚTEIS',
      'icon': 'link',
      'route': 'useful'
    }
  ]

  ngOnInit() {
  }

}
