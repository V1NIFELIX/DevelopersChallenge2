import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbDatepickerI18n, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { I18n, CustomDatepickerI18n } from './CustomDatepickerI18n';
import { CustomAdapter, CustomDateParserFormatter } from './CustomAdapter';
import * as moment from 'moment';


@Component({
  selector: 'datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    I18n, 
    {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n},
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class DatepickerComponent implements OnInit {

  constructor() { }

  date : any;

  @Input() dateInput;

  @Output() dateOutput = new EventEmitter();


  ngOnInit() {
    if(this.dateInput){
      this.date = this.dateInput
    }
  }

  ngOnChanges(){
    if(this.dateInput){
      this.date = moment.utc(Date.parse(this.dateInput)).format("DD-MM-YYYY");
      console.log(moment.utc(Date.parse(this.dateInput)).format("DD-MM-YYYY"))
    }
  }

  registerDate(event):void{
    console.log(event)
    this.dateInput = null;
    this.date = event;
    this.dateOutput.emit(event);
    // console.log('EVENT: ' ,event)
  }

}
