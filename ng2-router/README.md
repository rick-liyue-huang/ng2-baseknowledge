
### This small project just introduces angular2-router

run `ng new ng2-router --routing` to produce the project.

here has some something about angular2 router, including 'router', 'routerLink', 'router-outlet',
'route', and 'ActivatedRoute'.

It will produce file of 'app-routing.module.ts', and 

will config the component with path,

```const routes: Routes = [
     {path: '', component: HomeComponent},
     {path: 'stock', component: StockComponent},
   
     // the default must be put at last
     {path: '**', component: Code404Component}
   ];
```

in template file of 'app.component.html', it add the occupy flag of `<router-outlet></router-outlet>` to
show the different component.

` [routerLink]="['/']" `and ` this.router.navigate(['/stock']); ` used to link the different
components. 


Here has three ways to pass the parameters by router

1. `/stock?id=1&name=2` => `ActivatedRoute.queryParams[id]`

2. `{path:/stock/:id}` => `/stock/1` => `ActivatedRoute.params[id]`

3. `{path:/stock, component: StockComponent, data: [{isProd: true}]}` =>
    `ActivatedRoute.data[0][isProd]`
    

here notice the difference between 'spanshot' and 'subscript'

'subscript' used to route to itself 

`this.stockId = this.routeInfo.snapshot.queryParams["id"];`

`this.routeInfo.params.subscribe((params: Params) => this.stockId = params["id"]);`


Redirect Route

when visit one address, it will direct to another address


the children router will use 'children array'

```
{
    path: 'stock/:id',
    component: StockComponent,
    children: [
      {path: '', component: StockDescComponent},
      {path: 'seller/:id', component: SellerInfoComponent}
    ]
  },
```

here should notice: the relative route '['./']' in child route
```
<a [routerLink]="['./']">Buyer Info</a>
<a [routerLink]="['./seller', 88]">Seller Info</a>

```


Auxiliary Router

在 app 组件的模板上再定义一个插座来显示新的模板

单独开发一个新的组件
通过路由参数来控制新插座是否显示这个新的组件

in the 'app-routing.module.ts' add 
`{path: 'chat', component: ChatComponent, outlet: 'aux'},`

in the 'app.component.html' add
`<router-outlet name="aux"></router-outlet>`


at last in 'app.component.html' add
`<a [routerLink]="[{outlets: {aux: 'chat'}}]">Begin Chat</a>`


Route Guard

'CanActivate': deal with routing to some page,
'CanDeactivate': deal with lefting some page, 
'Resolve': deal with geting some data before activate some route.

such as, 'when user has logined, he can route to some page'

一个由多个表单组件组成的向导，例如注册流程，用户只有在当前路由组件中填写要求的信息才能进入下一个路由

当用户未执行保存操作而试图离开当前导航时提醒用户

这些钩子就是 路由守卫

Here I also define the 'stock.resolve.ts' to deal with the route resolve.

































































