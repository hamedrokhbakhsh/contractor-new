import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FilterData} from '../../models/filter-data';
import {AppService} from '../../services/app.service';
import {ToastService} from '../../services/toast.service';
import {ResponseModel} from '../../models/response-model';
import {Register} from '../../models/register';

@Component({
  selector: 'app-full-reception',
  templateUrl: './full-reception.page.html',
  styleUrls: ['./full-reception.page.scss'],
})
export class FullReceptionPage implements OnInit {
  filter = false;
  loading = false ;
    getTodayDate = new Date();
    data: FilterData = {
        from: this.getTodayDate.getFullYear() + '/' + (this.getTodayDate.getMonth() + 1) + '/' + this.getTodayDate.getDate(),
        until: this.getTodayDate.getFullYear() + '/' + (this.getTodayDate.getMonth() + 1) + '/' + this.getTodayDate.getDate()
    };
  response: ResponseModel;

  constructor(private router: Router, private service: AppService, private toast: ToastService) { }
    serverData: Register[] = [];

  ngOnInit() {
      this.getData(this.data);
  }

  getData(data: FilterData){
    this.loading = true ;
    this.service.register(data).subscribe(

        res => {
          this.response = res ;
          if (this.response.status){
              this.serverData = this.response.data ;
              if (this.serverData.length === 0){
                  this.toast.presentToast('اطلاعاتی وجود ندارد').then();
              }
              this.loading = false;
          }else {
            console.log(this.response.errorMessage);
            this.toast.presentToast('عدم ارتباط با سرور').then();
            this.loading = false;

          }
        }, error => {
          this.toast.presentToast('عدم ارتباط با سرور').then();
          console.log(error);
          this.loading = false;


        }
    );
  }

  getDataFromFilter(data: FilterData) {
    this.getData(data);
    this.filter = !this.filter;
  }

  filterButton() {
    this.filter = !this.filter ;
  }
    back() {
        this.router.navigate(['/home']).then();
    }
}
