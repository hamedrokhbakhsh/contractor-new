import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor( private toast: ToastController) { }

  async presentToast(message) {
    const toast = await this.toast.create({
      message,
      duration: 2000,
      position: 'middle',
      cssClass: 'secondary'
    });
    await toast.present();
  }
}
