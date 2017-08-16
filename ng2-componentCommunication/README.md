
### Communication between components

#### From parent component to child one

'Input' property: @Input()

Purpose is to transmit keyWord from 'app.component.ts' component to 'stock-search.component.ts' one.

here, 'keyWord' property in 'stock-search.component.ts' is gotten from outter file 'app.component.ts'.

and 

```
<input type="text" placeholder="type search content" [(ngModel)]="search" />
  <app-stock-search [keyWord]="search"></app-stock-search>
``` 

will transfer the data from outter file to inner file 'app-stock-search'. 

Property transition in only from parent component to child component.


#### From child component to parent one


'Output' property: '@Output()'

Purpose is to transmit keyWord from 'stock-search.component.ts' component to 'app.component.ts' one.


here, 'searchResult' is the property used to transite to outside.

and we must import 'EventEmitter' module

```
 @Output('lastprice')
  searchResult: EventEmitter<StockInfo> = new EventEmitter();
```

'searchResult' will show in the parent component by

```
<app-stock-search [keyWord]="search" (searchResult)="searchResultHandler($event)" ></app-stock-search>
```

and then got the data by 'searchResultHandler($event)' method, here '$event' is 'stockInfo' object

so we will get the 'currentPrice' by

```
searchResultHandler(stockInfo: StockInfo) {
    this.currentPrice = stockInfo.price;
  }
```


#### Two components communicate each other through a third one

here the 'app.component.ts' is the parent component of 'stock-search.component.ts' and 'stock-cart.component.ts', and 
also is the 'intermediate component' used to connect these upon two component.

app.component first get the data by 'EventEmitter' from its child component, and then send to its another child component by '[]'
property transimission.



































