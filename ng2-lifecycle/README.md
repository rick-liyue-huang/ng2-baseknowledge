
### angular lifecycle hook

includes 'OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy'. 

we can find their call order

#1 name property in constructor is: 
#2 name property in ngOnChanges is:Rick
#3 ngOnInit
#4 DoCheck
#5 AfterContentInit
#6 AfterContentChecked
#7 AfterViewInit
#8 AfterViewChecked
core.es5.js:2925 Angular is running in the development mode. Call enableProdMode() to enable the production mode.
#9 DoCheck
#10 AfterContentChecked
#11 AfterViewChecked

notice: 
'ngOnchanges' hook will be called only when the '@Input' and primary (such as string type) property changes.

'ngdoCheck' hook 


alway called when any properties changes.

```
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
```

so we need to add some condition
