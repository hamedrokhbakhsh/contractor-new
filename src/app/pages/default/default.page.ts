import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.page.html',
  styleUrls: ['./default.page.scss'],
})
export class DefaultPage implements OnInit {

  constructor() { }

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'پنل روزانه',
      url: '/home',
      icon: 'home'
    }
  ];

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  logout() {
    console.log('logout')
  }
}
