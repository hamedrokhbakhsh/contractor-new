import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterComponent} from "./filter/filter.component";
import {DateComponent} from "./date/date.component";
import {PersianPipesModule} from "ngx-persian-pipe";



@NgModule({
  declarations: [
FilterComponent ,
      DateComponent
],
    imports: [
        CommonModule,
        PersianPipesModule
    ],
      exports: [
          FilterComponent ,
          DateComponent
]
})
export class SharedModule { }
