import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FilterData} from '../../models/filter-data';
import {AppService} from '../../services/app.service';
import {ToastService} from '../../services/toast.service';
import {DetailsData} from '../../models/details-data';
import {ResponseModel} from '../../models/response-model';
import {Register} from '../../models/register';

@Component({
  selector: 'app-detail-reception',
  templateUrl: './detail-reception.page.html',
  styleUrls: ['./detail-reception.page.scss'],
})
export class DetailReceptionPage implements OnInit {
  filter = false;
  response: ResponseModel ;
  serverData: Register[] = [];

  getTodayDate = new Date();
  data: FilterData = {
    from: this.getTodayDate.getFullYear() + '/' + (this.getTodayDate.getMonth() + 1) + '/' + this.getTodayDate.getDate(),
    until: this.getTodayDate.getFullYear() + '/' + (this.getTodayDate.getMonth() + 1) + '/' + this.getTodayDate.getDate()
  };
  private loading = false;

  constructor(private router: Router, private service: AppService, private toast: ToastService) { }

  ngOnInit() {
    this.getData(this.data);
  }






  getData(data: FilterData){
    this.loading = true ;
    this.service.single(data).subscribe(

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







  back() {
    this.router.navigate(['/home']).then();
  }

  getDataFromFilter(data: FilterData) {
    this.getData(data);
    this.filter = false;
  }

  filterButton() {
    this.filter = !this.filter ;
  }
}
