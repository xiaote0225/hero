import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp5Component } from './comp5/comp5.component';
import { Comp6Component } from './comp6/comp6.component';
import { Comp7Component } from './comp7/comp7.component';
import { Comp8Component } from './comp8/comp8.component';
import { ItemDetailComponentComponent } from './item-detail-component/item-detail-component.component';
import { ItemOutputComponent } from './item-output/item-output.component';
import { SizerComponent } from './sizer/sizer.component';
import { NgifComponent } from './ngif/ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    Comp6Component,
    Comp7Component,
    Comp8Component,
    ItemDetailComponentComponent,
    ItemOutputComponent,
    SizerComponent,
    NgifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    Comp4Component
  ]
})
export class AppModule { }
