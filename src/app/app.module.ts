import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompAComponent } from './compA/compA.component';
import { FormsModule } from '@angular/forms';
import { CompBComponent } from './comp-b/comp-b.component';
import { OnewayComponent } from './oneway/oneway.component';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CompBComponent,
    OnewayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]   // 1 st batsman Abhishek sharma
})
export class AppModule { }