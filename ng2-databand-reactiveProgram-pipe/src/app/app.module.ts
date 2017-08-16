import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { ReactiveProgramComponent } from './reactive-program/reactive-program.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PipeComponent } from './pipe/pipe.component';
import { MultiplePipe } from './pipe/multiple.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    ReactiveProgramComponent,
    PipeComponent,
    MultiplePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




