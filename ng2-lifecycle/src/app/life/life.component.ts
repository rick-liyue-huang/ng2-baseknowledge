import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy,
  OnInit, SimpleChanges, Input
} from '@angular/core';

let logIndex: number = 1;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})


export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {



  @Input()
  name: string;

  logIt(msg: string) {
    console.log(`#${logIndex++} ${msg}`);
  }

  constructor() {
    this.logIt('name property in constructor is: ' + name);
  }



  ngOnInit() {
    this.logIt('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    let name = changes['name'].currentValue;
    this.logIt("name property in ngOnChanges is:"+name);
  }

  ngDoCheck(): void {
    this.logIt('DoCheck');
  }

  ngAfterContentInit(): void {
    this.logIt('AfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.logIt('AfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.logIt('AfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.logIt('AfterViewChecked');
  }

  ngOnDestroy(): void {
    this.logIt('OnDestroy');
  }

}


































