import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as moment from 'jalali-moment';
moment.locale('fa');
import {PickerController} from '@ionic/angular';
@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit {

  @Output() open: EventEmitter<any> = new EventEmitter();
  @Input('before') title: any;
  date: any = {};
  order: any = {
    dateUntil: ''
  };



  constructor( private pickerController: PickerController) { }



  ngOnInit() {}


  initDatePickerData() {
    if (!this.date) {
      this.date = {};
    }

    this.date.dayOptions = this.getDays();
    this.date.monthOptions = this.getMonths();
    this.date.yearsOptions = this.getYears();
    this.selectDefaultDate();
  }

  getDays(): any[] {
    const out: any[] = [];
    for (let i = 1; i <= 31; i++) {
      out.push({
        text: this.setPad(i),
        value: i
      });
    }
    return out;
  }
  getYears() {
    const current = moment().jYear();
    const out: any[] = [];
    for (let i = current - 20; i <= current + 3 ; i++) {
      out.push({
        text: i,
        value: i
      });
    }
    return out;
  }
  getMonths(): any[] {
    const months = Array.apply(0, Array(12)).map((_, i) => moment().jMonth(i).format('jMMMM'));
    const out: any[] = [];
    for (let i = 1; i <= months.length; i++) {
      out.push({
        text: months[i - 1],
        value: i
      });
    }
    return out;
  }

  setPad(val: number) {
    return (val + '').padStart(2, '0');
  }


  selectDefaultDate() {
    if (!this.date.day || !this.date.month || !this.date.years) {
      const m = moment();
      this.date.years = m.jYear();
      this.date.yearsIndex = this.getYears().findIndex(x => x.value == this.date.years);
      this.date.month = m.jMonth() + 1;
      this.date.day = m.jDate();
      this.initDate();
    }
  }


  initDate() {
      this.date.pDate = moment(`${this.date.years}/${this.date.month}/${this.date.day}`, 'jYYYY-jM-jD');
      this.order.gDate = this.date.pDate.locale('en').format('YYYY-MM-DD');
      this.order.dateFrom = this.date.pDate.format('jYYYY-jMM-jDD');
  }
  async openDatePicker() {
    this.initDatePickerData();
    const picker = await this.pickerController.create({
      mode: 'ios',
      keyboardClose: true,
      buttons: [{
        text: 'انتخاب',
        handler: (value) => {
          this.date.yearsIndex = this.getYears().findIndex(x => x.value == value.years.value);
          this.date.years = value.years.value;
          this.date.month = value.month.value;
          this.date.day = value.day.value;
          this.initDate();
          // console.log(this.order.gDate);
          this.open.emit(this.order.gDate);
        }
      }, {
        text: 'انصراف',
        role: 'cancel'
      }],
      columns: [
        {
          name: 'day',
          options: this.date.dayOptions,
          selectedIndex: this.date.day - 1
        },
        {
          name: 'month',
          options: this.date.monthOptions,
          selectedIndex: this.date.month - 1
        },
        {
          name: 'years',
          options: this.date.yearsOptions,
          selectedIndex: this.date.yearsIndex
        }
      ]
    });
    await picker.present();
  }
}
