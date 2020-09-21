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
    RegisterNum : '0' ,
    RegisterTotalCost: '0' ,
    EducationNum: '0' ,
    EducationTotalCost: '0',
    SubServiceNum: '0' ,
    SubServiceTotalCost: '0'
  } ;

  date = moment().locale('fa').format(' dddd,D MMMM YYYY');
  getTodayDate = new Date();
  data: FilterData = {
    from: this.getTodayDate.getFullYear() + '/' + (this.getTodayDate.getMonth() + 1) + '/' + this.getTodayDate.getDate(),
    until: this.getTodayDate.getFullYear() + '/' + (this.getTodayDate.getMonth() + 1) + '/' + this.getTodayDate.getDate()
  };
  loading = false;
  name = localStorage.getItem('name')

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
    // console.log(filterData);
  }

  getData(data: FilterData){
    this.loading = true ;
    this.service.firstPage(data).subscribe(

        res => {
          this.response = res ;
          if (this.response.status){
            //  console.log(this.response.data);
            this.serverData.RegisterNum = this.response.data.RegisterNum;
            this.serverData.RegisterTotalCost = this.response.data.RegisterTotalCost;
            this.serverData.SubServiceNum = this.response.data.SubServiceNum;
            this.serverData.SubServiceTotalCost = this.response.data.SubServiceNum;
            this.loading =false
          }else {
            console.log(this.response.errorMessage);
            this.toast.presentToast('عدم ارتباط با سرور').then();
            this.loading =false

          }
        }, error => {
          this.toast.presentToast('عدم ارتباط با سرور').then();
          console.log(error);
          this.loading =false


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
