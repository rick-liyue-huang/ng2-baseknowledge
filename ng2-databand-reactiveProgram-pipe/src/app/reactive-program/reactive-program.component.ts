import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';

@Component({
  selector: 'app-reactive-program',
  templateUrl: './reactive-program.component.html',
  styleUrls: ['./reactive-program.component.css']
})
export class ReactiveProgramComponent implements OnInit {

  searchInput: FormControl = new FormControl();

  constructor() {

    this.searchInput.valueChanges
      .debounceTime(1000) // void frequently typing
      .subscribe(stockCode => this.getStockInfo(stockCode)); // when end typing after 1s, it will call this method.

    Observable.from([1, 2, 3, 4])  // stream
      .filter( e => e%2 == 0)  // filter out the even number
      .map( e => e*e) // get the e square
      .subscribe(

        // the following three lines code are Observer
        e => console.log(e),
        err => console.error(err),
        () => console.log('end')
      );



  }

  ngOnInit() {
  }

  getStockInfo(value: string) {
    console.log(value);
  }


  onKey(event) {
    console.log(event.target.value);
  }

  onKey1(value: string) {
    console.log(value);
  }

}
