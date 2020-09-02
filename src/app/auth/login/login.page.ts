import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../../services/app.service';
import {ToastService} from '../../services/toast.service';
import {ResponseModel} from '../../models/response-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  loading = false;
  isSubmit = false;
  response: ResponseModel;

  constructor(private toast: ToastService, private service: AppService, private fb: FormBuilder, private router: Router ) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  login() {
    this.isSubmit = true ;
    if (this.form.valid){
      this.loading = true ;
      this.service.authUser(this.form.value).subscribe(
          res => {
            this.response = res ;
            if (this.response.status){
              this.service.storeUserId(this.response.data[0].token, this.response.data[0].Name);
              //console.log(localStorage.getItem('name'));
              this.router.navigate(['/home']);
              this.loading = false;
            }else {
              this.loading = false;
              this.toast.presentToast('اطلاعات وارده اشتباه هست').then;
            }

          } , error => {
            this.loading = false;
            this.toast.presentToast('خطای ارتباط با سرور').then;
          }
      );
    }
  }
}
