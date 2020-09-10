import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DetailsData} from '../../models/details-data';

@Component({
  selector: 'app-full-reception',
  templateUrl: './full-reception.page.html',
  styleUrls: ['./full-reception.page.scss'],
})
export class FullReceptionPage implements OnInit {
  filter = false;


  constructor(private router: Router) { }

  ngOnInit() {
  }





    back() {
        this.router.navigate(['/home']).then();
    }


  filterButton() {
    this.filter = !this.filter ;
  }
}
