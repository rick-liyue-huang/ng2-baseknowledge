

import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Stock} from "../stock/stock.component";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";


@Injectable()
export class StockResolve implements Resolve<Stock> {

  constructor(private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Stock | Observable<Stock> | Promise<Stock> {

    let id = route.params["id"];

    if (id == 1) {
      return new Stock(1, "Apple");
    } else {
      this.router.navigate(['/home']);
      return undefined;
    }
  }
}




































