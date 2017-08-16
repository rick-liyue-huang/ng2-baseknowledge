import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit, AfterViewChecked {

  constructor() { }

  ngOnInit() {
  }

  greeting(name: string) {
    console.log("hello " + name);
  }

  ngAfterViewInit() {
    console.log('child component view initial finished');
  }

  ngAfterViewChecked() {
    console.log('child component view updated finished');
  }

}
