import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productId: number;

  private productName: string;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {

    //method 1
    // this.productId = this.routeInfo.snapshot.queryParams["id"];

    //method 2
    // this.productId = this.routeInfo.snapshot.params['id'];

    //method 3 subscript
    this.routeInfo.params.subscribe((params: Params) => this.productId = params["id"]);

    this.routeInfo.data.subscribe((data: {product: Product}) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    })
  }

}


export class Product {
  constructor(public id: number, public name: string) {

  }
}
