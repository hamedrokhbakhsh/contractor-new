import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FilterData} from '../../models/filter-data';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  getTodayDate = new Date();
  data: FilterData = {
    from: this.getTodayDate.getFullYear() + '/' + (this.getTodayDate.getMonth() + 1) + '/' + this.getTodayDate.getDate(),
    until: this.getTodayDate.getFullYear() + '/' + (this.getTodayDate.getMonth() + 1) + '/' + this.getTodayDate.getDate()
  };
  textDateUntil = 'تا تاریخ';
  textDateFrom = 'از تاریخ';

  @Output() filterData: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {}
  setFromDate(from: string) {
    this.data.from = from ;
  }

  setUntilDate(until: string) {
    this.data.until = until;
  }

  filterAction() {
    this.filterData.emit(this.data);
  }
}
