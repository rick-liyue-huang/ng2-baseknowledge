import { Injectable } from '@angular/core';
import {LoggerService} from "./logger.service";

@Injectable()
export class ProductService {

  constructor(public logger: LoggerService) { }

  getProduct(): Product {

    this.logger.log('getProductService method is called');

    return new Product(1, 'iphone', 1200, 'the most one');
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) {}
}
