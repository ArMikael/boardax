import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  routes = [
    {
      title: 'Home',
      path: 'home'
    },
    {
      title: 'Dashboard',
      path: ''
    },
    {
      title: 'Top 100',
      path: ''
    }
  ];

  ngOnInit() {
  }

}
