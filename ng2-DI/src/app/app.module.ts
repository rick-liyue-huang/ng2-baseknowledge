import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import {StockService} from "./shared/stock.service";
import { Stock2Component } from './stock2/stock2.component';
import {LoggerService} from "./shared/logger.service";
import {AnotherStockService} from "./shared/another-stock.service";


@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    Stock2Component
  ],
  imports: [
    BrowserModule,
  ],

  // providers: [StockService, LoggerService],
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

  bootstrap: [AppComponent]
})
export class AppModule { }

































