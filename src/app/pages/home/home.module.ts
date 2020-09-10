import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {DateComponent} from '../../shared/date/date.component';
import {FilterComponent} from '../../shared/filter/filter.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule
    ],
    exports: [
        FilterComponent
    ],
    declarations: [HomePage, FilterComponent, DateComponent]
})
export class HomePageModule {}
