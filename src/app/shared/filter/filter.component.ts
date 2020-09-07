import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  textDateFrom = 'از تاریخ';
  textDateUntil = 'تا تاریخ';

  @Output() open: EventEmitter<any> = new EventEmitter();

  data = {
    from: '' ,
    until: ''
  };
  constructor() { }

  ngOnInit() {}

  setFromDate(from: string) {
    this.data.from = from ;
  }

  setUntilDate(until: string) {
    this.data.until = until ;
  }

  filterAction() {
    this.open.emit(this.data);
  }
}
