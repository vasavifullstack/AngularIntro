import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompAComponent } from './compA/compA.component';
import { FormsModule } from '@angular/forms';
import { OnewayComponent } from './oneway/oneway.component';
import { TwowayComponent } from './twoway/twoway.component';
import { DirectiveComponent } from './directive/directive.component';
@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    OnewayComponent,
    TwowayComponent,
    DirectiveComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]   // 1 st batsman Abhishek sharma
})
export class AppModule { }