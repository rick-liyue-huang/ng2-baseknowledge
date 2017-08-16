
### Data bind

##### here has three DOM bind types:

```
<h1>{{productTitle}}!</h1>
```
and

```
<img [src]="imgUrl">
```
and

```
<button (click)="toProductDetail()">button</button>
```


##### html attribute bind:
```
<td [attr.colspan]="tableColspan">Something</td>
```

##### css class bind

```
<div class="aaa bbb" [class]="someExpression">something</div>
<div [class.special]="isSpecial">something</div>
<div [ngClass]="{aas:isA, bbb:isB}">something</div>
```

the first one: [class] will replace the whole class
the second one: [class.special] just show the special one
the third one: one object

##### style bind:

```
<button [style.color]="isSpecial?'red': 'green'">Red</button>
<div [ngStyle]="{'font-style':this.canSave ? 'italic':'normal'}"></div>
```


##### bidirectional bind

{{}} and [(ngModel)]

#### Rxjs

based on the following codes

need to import 'rxjs' lib.

Observable (stream): one collection of data or events.
Observer: one collection of callbacks, which knows how to listen the values sent by Observable.
Subscription: is a Obseervable, and used to cancel regester
Operators: the pure functions, and the developers can use these functions to deal with collection in functional programming way.

here notice that:

Observable 'call' Observer, and Observer 'regester' Observable.


```
Observable.from([1, 2, 3, 4])  // stream
      .filter( e => e%2 == 0)  // filter out the even number
      .map( e => e*e) // get the e square
      .subscribe(

        // the following three lines code are Observer
        e => console.log(e),
        err => console.error(err),
        () => console.log('end')
      );> console.log('end')
      );
```


##### pipe 

get the desired data by some format (pipe) from source data

```
<p>my birthday is {{birthday | date: 'dd/MM/yyyy HH:mm:ss'| lowercase}}</p>
<p>{{pi | number: '2.2-2'}}</p>
<p>{{pi | async}}</p>
```

or self-defined pipe in 'pipe' file

```
transform(value: any, args?: any): any {

    if (!args) {
      args = 1;
    }
    return value * args;
  }

```




































