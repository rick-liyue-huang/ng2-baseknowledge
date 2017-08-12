
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Product} from "../product/product.component";
import {Injectable} from "@angular/core";

@Injectable()
export class ProductResolve implements Resolve<Product> {

  constructor(private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product>|Promise<Product>|Product {

    let productId: number = route.params["id"];

    if (productId == 1) {
      return new Product(1, 'iphone');
    } else {
        this.router.navigate(['/home']);
        return undefined;
    }

  }
}
