import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  private imgUrl: string = "http://placehold.it/800x300";

  private  size: number = 2;

  private divClass: string;

  private isBig: boolean = false;

  private divClass1: any = {
    a: true,
    b: false,
    c: false
  };

  private isDev: boolean = true;

  private divStyle: any = {
    color: 'red',
    background: 'blue'
  };

  private name1: string;

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.divClass = "a b c";
      this.isBig = true;

      this.divClass1 = {
        a: true,
        b: true,
        c: true
      };
      this.isDev = false;
      this.divStyle = {
        color: 'blue',
        background: 'red'
      };
    }, 3000);

    setInterval(() => {
      this.name1 = "Tom";
    }, 3000);
  }

  doOnClick(event: any) {
    console.log(event);
  }

  doOnInput(event: any) {

    // get the dom 'value' property
    console.log("changeable dom value property", event.target.value);

    // get the html 'value' attribute
    console.log('unchangeable html value attribute', event.target.getAttribute('value'));
  }

  doOnInput1(event) {
    this.name1 = event.target.value;
  }

}










































