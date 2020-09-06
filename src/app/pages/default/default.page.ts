import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.page.html',
  styleUrls: ['./default.page.scss'],
})
export class DefaultPage implements OnInit {

  constructor(private router: Router , private  service : AppService) { }

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'پنل روزانه',
      url: '',
      icon: 'home'
    },
    {
      title: 'ثبت نامی',
      url: '/home/full',
      icon: 'receipt'
    },
    {
      title: 'تک جلسه ای',
      url: '/home/detail',
      icon: 'receipt'
    }
  ];

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  logout() {
    this.service.logout();
    this.router.navigate(['/login']).then();
  }
}
