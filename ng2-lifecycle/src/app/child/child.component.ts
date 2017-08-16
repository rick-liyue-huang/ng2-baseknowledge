import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  greeting: string;

  // @Input()
  // user: {name: string};

  @Input()
    stock: {name: string};

  message: string = 'initiate the message';

  oldStockName: string;

  changeDetected: boolean;

  changeCount: number = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(JSON.stringify(changes, null, 2));
  }

  ngDoCheck(): void {

    if (this.stock.name !== this.oldStockName) {
      this.changeDetected = true;
      console.log('DoCheck: stock.name change from ' + this.oldStockName + 'to' + this.stock.name);
      this.oldStockName = this.stock.name;
    }

    if (this.changeDetected) {
      this.changeCount = 0;
    } else {
      this.changeCount = this.changeCount + 1;
      console.log('DoCheck: stock.name no change, Docheck method is called ' + this.changeCount + 'time');

    }

    this.changeDetected = false;
  }

}



































