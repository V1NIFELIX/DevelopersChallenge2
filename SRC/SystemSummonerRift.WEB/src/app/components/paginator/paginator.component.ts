import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'paginator-component',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  thisPage = 1;

  @Input()
  numberOfPages = 6;

  @Output()
  paginationSeletor = { Pagina: this.thisPage };

  Arr = Array;

  constructor() { }

  ngOnInit() {
  }

  handlePageSet(x: number):void{
    x = x+1; //Não deixando x começar em 0
    this.thisPage = x;
    console.log(x);
  }

  handlePrevious():void{
    if(this.thisPage > 1){
      this.thisPage--;
      console.log(this.thisPage)
    }
  }

  handleNext():void{
    if(this.thisPage < this.numberOfPages){
      this.thisPage++;
      console.log(this.thisPage)
    }
  }

}
