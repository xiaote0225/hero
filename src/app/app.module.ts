import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp2Component } from './demos/comp2/comp2.component';
import { Comp3Component } from './demos/comp3/comp3.component';
import { Comp4Component } from './demos/comp4/comp4.component';
import { Comp5Component } from './demos/comp5/comp5.component';
import { Comp6Component } from './demos/comp6/comp6.component';
import { Comp7Component } from './demos/comp7/comp7.component';
import { Comp8Component } from './demos/comp8/comp8.component';
import { Comp1Component } from './demos/components/comp1/comp1.component';
import { ItemDetailComponentComponent } from './demos/item-detail-component/item-detail-component.component';
import { ItemOutputComponent } from './demos/item-output/item-output.component';
import { NgforComponent } from './demos/ngfor/ngfor.component';
import { NgifComponent } from './demos/ngif/ngif.component';
import { NgswitchComponent } from './demos/ngswitch/ngswitch.component';
import { SizerComponent } from './demos/sizer/sizer.component';
import { TplOperatorsComponent } from './demos/tpl-operators/tpl-operators.component';
import { TransferPanelComponent } from './demos/transfer-panel/transfer-panel.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HighlightDirective } from './demos/directives/highlight.directive';
import { StructuralComponent } from './demos/components/structural/structural.component';
import { ExampleComponent } from './demos/example/example.component';
import { UnlessDirective } from './demos/directives/unless.directive';
import { XiaoteDirective } from './demos/directives/xiaote.directive';
import { TplContainerComponent } from './demos/components/tpl-container/tpl-container.component';
import { TplOutletComponent } from './demos/components/tpl-outlet/tpl-outlet.component';
import { ShadowComponent } from './demos/components/shadow/shadow.component';
import { ViewChildComponent } from './demos/components/view-child/view-child.component';
import { PanelComponent } from './demos/components/view-child/panel/panel.component';
import { ContentChildComponent } from './demos/components/content-child/content-child.component';
import { XiaotepanelComponent } from './demos/components/content-child/xiaotepanel/xiaotepanel.component';

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
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    TplOperatorsComponent,
    TransferPanelComponent,
    LayoutComponent,
    HeroComponent,
    HighlightDirective,
    StructuralComponent,
    ExampleComponent,
    UnlessDirective,
    XiaoteDirective,
    TplContainerComponent,
    TplOutletComponent,
    ShadowComponent,
    ViewChildComponent,
    PanelComponent,
    ContentChildComponent,
    XiaotepanelComponent
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
