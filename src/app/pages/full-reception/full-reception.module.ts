import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullReceptionPageRoutingModule } from './full-reception-routing.module';

import { FullReceptionPage } from './full-reception.page';
import {HomePageModule} from '../home/home.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FullReceptionPageRoutingModule,
        HomePageModule
    ],
    declarations: [FullReceptionPage]
})
export class FullReceptionPageModule {}
