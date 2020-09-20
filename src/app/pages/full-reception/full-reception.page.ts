import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FilterData} from '../../models/filter-data';
import {AppService} from '../../services/app.service';
import {ToastService} from '../../services/toast.service';
import {DetailsData} from '../../models/details-data';
import {ResponseModel} from '../../models/response-model';

@Component({
  selector: 'app-full-reception',
  templateUrl: './full-reception.page.html',
  styleUrls: ['./full-reception.page.scss'],
})
export class FullReceptionPage implements OnInit {
  filter = false;


  constructor(private router: Router, private service: AppService, private toast: ToastService) { }

  ngOnInit() {

  }



  getDataFromFilter(data: FilterData) {

  }

  filterButton() {
    this.filter = !this.filter ;
  }
}
