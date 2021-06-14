import { AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList } from '@angular/core';
import { XiaotepanelComponent } from './xiaotepanel/xiaotepanel.component';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.scss']
})
export class ContentChildComponent implements OnInit, AfterViewInit {

  // @ContentChild('list', { static: true}) private listEl!: ElementRef;

  // @ContentChildren('list') private listEles!: QueryList<ElementRef>;

  // @ContentChild('div', { static: true }) private spanEl!: ElementRef;

  // @ContentChild(XiaotepanelComponent, { static: true }) private panelInstance!: XiaotepanelComponent;
  // @ContentChildren(XiaotepanelComponent) private panelInstances!: QueryList<XiaotepanelComponent>;
  @ContentChildren(XiaotepanelComponent, { descendants: true }) private panelInstances!: QueryList<XiaotepanelComponent>;

  constructor() {
    console.log('constructor', this.panelInstances);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.panelInstances);

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.panelInstances);
  }


}
