import { Component, OnInit } from '@angular/core';
import * as moment from 'jalali-moment';
import {FilterData} from '../../models/filter-data';
import {AppService} from '../../services/app.service';
import {ResponseModel} from '../../models/response-model';
import {ToastService} from '../../services/toast.service';
import {FirstPage} from '../../models/first-page';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  filter = false;
  response: ResponseModel;
  serverData: FirstPage = {
    registerNumber : '0' ,
    registerCount: '0' ,
    singleCount: '0' ,
    singleNumber: '0'
  } ;

  date = moment().locale('fa').format(' dddd,D MMMM YYYY     ');
  getTodayDate = new Date();
  data: FilterData = {
    from: this.getTodayDate.getFullYear() + '/' + (this.getTodayDate.getMonth() + 1) + '/' + this.getTodayDate.getDate(),
    until: this.getTodayDate.getFullYear() + '/' + (this.getTodayDate.getMonth() + 1) + '/' + this.getTodayDate.getDate()
  };
  constructor(private toast: ToastService , private service: AppService , private router: Router) { }

  ngOnInit() {
    this.getData(this.data);
  }

  filterButton() {
    this.filter = !this.filter ;
  }

  dataFromFilter(filterData: FilterData) {
    this.getData(filterData);
    this.filter = !this.filter ;
  }

  getData(data: FilterData){
    this.service.firstPage(data).subscribe(

        res => {
          this.response = res ;
          if (this.response.status){
            console.log(this.response.data);
            this.serverData.registerNumber = this.response.data[0].registerNumber;
            this.serverData.registerCount = this.response.data[0].registerCount ;
            this.serverData.singleNumber =  this.response.data[0].singleNumber ;
            this.serverData.singleCount = this.response.data[0].singleCount ;
          }else {
            console.log(this.response.errorMessage);
            this.toast.presentToast('عدم ارتباط با سرور').then();
          }
        }
    );
  }

  single() {
    this.router.navigate(['/home/detail']).then();
  }

  register() {
    this.router.navigate(['/home/full']).then();
  }
}
