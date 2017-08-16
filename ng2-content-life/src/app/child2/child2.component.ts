import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, OnDestroy {

  ngOnDestroy() {
    console.log('child2 is destroyed');
  }

  constructor() { }

  ngOnInit() {
  }

}
