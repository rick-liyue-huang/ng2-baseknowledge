import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  // private stockId: number;

  // introduce the 'Resolve'
  private stock: Stock;

  private isPro: boolean;

  private focus: boolean = false;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
   // this.stockId = this.routeInfo.snapshot.queryParams.id;  // the first one
   //  this.stockId = this.routeInfo.snapshot.params["id"];  // the second one
   // this.routeInfo.params.subscribe((params: Params) => this.stockId = params["id"]); // used to jump to itself

    // guard resolve
    this.routeInfo.data.subscribe((data: {stock: Stock}) => {
      this.stock = data.stock;
    });

    this.isPro = this.routeInfo.snapshot.data[0]["isPro"]; // the third one
  }

  isFocus() {
    return this.focus;
  }

}

export class Stock {

  constructor(public id: number, public name: string) {

  }
}





































