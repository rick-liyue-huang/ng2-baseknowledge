import { Injectable } from '@angular/core';
import {ProductService, Product} from "./product.service";
import {LoggerService} from "./logger.service";



@Injectable()
export class AnotherProductService implements ProductService {

  constructor(public logger: LoggerService) { }

  getProduct(): Product {

    return new Product(2, 'samsung', 1100, 'the second one');
  }


}
