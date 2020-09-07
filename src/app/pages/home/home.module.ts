import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {FilterComponent} from '../../shared/filter/filter.component';
import {DateComponent} from '../../shared/date/date.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule ,

  ],
    declarations: [HomePage, FilterComponent, DateComponent]
})
export class HomePageModule {}
