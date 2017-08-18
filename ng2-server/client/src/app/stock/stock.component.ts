import { Component, OnInit } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  dataSource: Observable<any>;

  stocks: Observable<any>;

  constructor(public http: Http) {

    let myHeaders: Headers = new Headers();
    myHeaders.append("Authorization", "Basic 123456");

    // this.dataSource = this.http.get('/api/stock').map(res => res.json());
    this.stocks = this.http.get('/api/stock', {headers: myHeaders}).map(response => response.json());
  }

  ngOnInit() {

   // this.dataSource.subscribe(
   //   data => this.stocks = data
   // );
  }

}


































