import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  filter = false;

  constructor() { }

  ngOnInit() {
  }

  filterButton() {
    this.filter = !this.filter ;
  }


  filtering($event: any) {
    console.log($event)
  }
}
