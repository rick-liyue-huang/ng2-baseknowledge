import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  imgUrl: string = "http://placehold.it/400x320";

  size:number = 2;

  divClass: string;

  isBig: boolean = false;

  name: string;

  divClass1: any = {
    a: false,
    b: false,
    c: false
  };

  isDev: boolean = true;

  divStyle: any = {
    color: 'red',
    background: 'yellow'
  };

  birthday: Date = new Date();

  pi:number = 3.1415926;

  trynumber: number = 3;

  constructor() {
    setInterval(() => {
      this.name = "Tom";
    }, 3000);
  }

  ngOnInit() {
    setTimeout(() => {
      this.divClass = 'a b c';
      this.isBig = true;
      this.divClass1 = {
        a: true,
        b: true,
        c: true
      };
      this.isDev = false;
      this.divStyle = {
        color: 'yellow',
        background: 'red'
      };

    }, 2000);
  }

  doOnClick(event: any) {
    console.log(event);
  }

  doOnInput(event: any) {

    //dom attribute and html attribute difference

    //dom attribute is changeable
    console.log(event.target.value);

    //html attribute is unchangeable
    console.log(event.target.getAttribute('value'));
  }

  doOnInput1(event: any) {
    this.name = event.target.value;
  }
}






































