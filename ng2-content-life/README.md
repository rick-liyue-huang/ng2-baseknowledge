

#### view life cycle

`<ng-content></ng-content>` will put in the child component

and the parent component will show the content in the child component.

such as, the outer component know the carousel content, and the child component only show the carousel style.

if we have multiple ng-content in child component, we can use " select='.red' "

```
<div style="border: 1px solid red">
  <ng-content select=".red"></ng-content>
</div>

<div style="border: 1px solid green">
  <ng-content select=".green"></ng-content>
</div>

```

and also show the responsed class

```
<app-red-border>
  <div class="red">this is the red border content {{xxx}}</div>
  <div class="green">this is the green border content {{yyy}}</div>
</app-red-border>
```

ngAfterContentInit() and ngAfterContentChecked() are only called by the <ng-content> is initiated or update.

the hooks call order is following,

the parent component ng-content finish initiate
the parent component ng-content finish update
the child component ng-content finish initiate
the child component ng-content finish update
the child component view finish initiate
the parent component view finish initiate
Angular is running in the development mode. Call enableProdMode() to enable the production mode.
the parent component ng-content finish update
the child component ng-content finish update

at last the binded property can be put inside the upon two methods.

#### OnDestroy

it is used to called between the different 'router-outlet'. 

 

