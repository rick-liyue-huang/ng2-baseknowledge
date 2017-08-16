import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css']
})
export class StockSearchComponent implements OnInit {

  @Input()   // it means that this is the 'input' property
  private keyWord: string;

  private price: number;

  // it means that it will send this property to outside.
  @Output('lastprice')
  private searchResult: EventEmitter<StockInfo> = new EventEmitter();

  @Output()
  private addCart: EventEmitter<StockInfo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      // this.keyWord = "search again";

    //  emmit the data to outside
      let stockInfo: StockInfo = new StockInfo(this.keyWord, 100 * Math.random());

      this.price = stockInfo.price;

      this.searchResult.emit(stockInfo);

    }, 3000);
  }

  buyStock() {

    this.addCart.emit(new StockInfo(this.keyWord, this.price));
  }


}

export class StockInfo {

  constructor(public name: string, public price: number) {}

}










































