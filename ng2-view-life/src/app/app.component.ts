import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {

  message: string;

  @ViewChild("child1")
  child1: ChildComponent;


  constructor() {}

  ngOnInit(): void {

    setInterval(() => {
      this.child1.greeting(('Rick'));
    }, 5000);


  }

  ngAfterViewInit() {

    console.log('parent component view initial finished');
    setTimeout(() => {
      this.message = "hello";
    }, 0);
  }

  ngAfterViewChecked() {
    console.log('parent component view updated finished');
    setTimeout(() => {
      this.message = "ok";
    }, 0);
  }
}






























