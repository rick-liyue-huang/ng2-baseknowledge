import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-red-border',
  templateUrl: './red-border.component.html',
  styleUrls: ['./red-border.component.css']
})
export class RedBorderComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('the child component ng-content finish initiate');
  }

  ngAfterContentChecked() {
    console.log('the child component ng-content finish update');
  }

  ngAfterViewInit() {
    console.log('the child component view finish initiate');
  }

}
