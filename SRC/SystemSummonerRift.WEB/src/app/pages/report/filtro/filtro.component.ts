import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'timeline-filtro',
  templateUrl: './filtro.component.html',
})
export class FiltroComponent implements OnInit {

  @Output() filtrosOutput = new EventEmitter();

  PaymentType: Array<Object> = ['CREDIT', 'DEBIT'];
  teste: any;

  ngOnInit(){

  }

  search(){
    this.filtrosOutput.emit({
      PaymentType : this.PaymentType
    })
  }

}
