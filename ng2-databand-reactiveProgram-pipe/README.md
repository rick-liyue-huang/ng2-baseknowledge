
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




































