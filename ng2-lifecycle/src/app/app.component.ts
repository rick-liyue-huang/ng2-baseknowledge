import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rick';

  // greeting: string = "Hello";
  //
  // user: {name: string} = {name: 'rick huang'};

  stockName: string = "苹果";

  stock:{name:string} = {name: "微软"};



}
