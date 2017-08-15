# DI: dependency injection （IOC: Inversion of Control ）
  
  for example: 
  
  ```
  var product = new Product();
  var shipCompany = createshipment();
  var address = new Address();
  var order = new Order();
  order.setAddress(address);
  createshipment(product, shipCompany, order);
  ```
  
  angular will use the following code to implement
  
  Loose coupling
  
  ```
  @NgModule({
    providers: [ProducService]
    // providers: [{provide: PrductService, useClass: ProductService}]
    // can use the different service
    // providers: [{provide: PrductService, useClass: AnotherProductService}]
    
    // providers
    // providers: [{provide: ProductService, useFactory: () => {...}}]
  })
  
  export class AppModule {}
  
  @component({})
  
  export class ProductComponent {
    product: Product;
    
    // injector
    constructor(productService: ProductService) {
      this.product = productService.getProduct();
    }
  }
  ```
  

The service can be put in 'app.module.ts' or the component files

when put in the 'app.module.ts' sevice will active for all the components, while put in the special 
component files, sercie will active just for the special one.


also notice that: if one service implements another service, it must implement all the methods and properties of another one.

```
@Injectable()
export class AnotherStockService implements StockService {

  getStock(): Stock {
    return new Stock(2, 'Microsoft');
  }

  constructor(public logger: LoggerService) { }

}

```

'@injectable': means that it can import other services, and '@Component' inherit from '@Injectable'


we can use 'useFactory: ()=> {}' to self define some logic action

```
providers: [{provide: StockService, useFactory: (logger: LoggerService, isDev)=> {

    console.log(isDev);

    // let logger = new LoggerService();
    // let dev = Math.random() > 0.5;

    if (isDev.isDev) {
      return new StockService(logger);
    } else {
      return new AnotherStockService(logger);
    }
  }, deps: [LoggerService, "IS_DEV_ENV"]
  }, LoggerService, {provide: "IS_DEV_ENV", useValue: {isDev: false}}],
```

Injector only exist in 'constructor' function.
