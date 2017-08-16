import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit {
  title = 'app';

  private xxx: string = "rick";
  private yyy: string = 'hello';

  ngOnInit() {

  }

  ngAfterContentInit() {
    console.log('the parent component ng-content finish initiate');
  }

  ngAfterContentChecked() {
    console.log('the parent component ng-content finish update');
  }

  ngAfterViewInit() {
    console.log('the parent component view finish initiate');
  }
}

