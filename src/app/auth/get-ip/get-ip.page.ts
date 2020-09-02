import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IpResponse} from '../../models/ip-response';
import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'app-get-ip',
  templateUrl: './get-ip.page.html',
  styleUrls: ['./get-ip.page.scss'],
})
export class GetIpPage implements OnInit {
  getFormIP: FormGroup;
  loading = false;
  isSubmit = false;
  constructor(private router: Router , private toast: ToastService , private service: AppService , private formBuilder: FormBuilder) {
    this.getFormIP = this.formBuilder.group({
      codeIp: [null, [Validators.required, Validators.max(9999), Validators.min(1001)]]
    });
  }

  ngOnInit() {
  }

  async checkIp() {
    this.isSubmit = true;
    if (this.getFormIP.valid){

      this.loading = true;
      try {
        let ipModel: IpResponse;
        const res = await this.service.getIp().toPromise();
        const id = this.getFormIP.value.codeIp - 1001;
        if (res.settings.success){
          ipModel = res.data[id];
          if (ipModel){
            this.loading = false;
            localStorage.setItem('url-address', ipModel.ServerAddress);
            await this.router.navigate(['/login']);
            // console.log(localStorage.getItem('url-address'));
          }
          else {
            await this.toast.presentToast('کد مجوعه وجود ندارد');
            this.loading = false;
          }
        }
        else {
          await this.toast.presentToast('خطای ارتباط با سرور');
          this.loading = false;
        }
      }catch (e) {
        console.log(e);
        await this.toast.presentToast('خطای ارتباط با سرور');
        this.loading = false;
      }

    }

  }

}
