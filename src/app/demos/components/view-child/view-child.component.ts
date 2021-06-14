import { PanelComponent } from './panel/panel.component';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  showFlag = true;

  @ViewChild('box', {static: true}) private box!: ElementRef;
  @ViewChildren('box') private boxs!: QueryList<ElementRef>;

  // @ViewChild(PanelComponent, {static: true}) private panelInstance!: PanelComponent;

  @ViewChild('panel', {static: true}) private panel!: PanelComponent;
  @ViewChildren(PanelComponent) private panelInstances!: QueryList<PanelComponent>;

  constructor() {
    // console.log('constructor', this.box?.nativeElement);
    // console.log('constructor', this.boxs);
    // console.log('constructor', this.panelInstance);
    // console.log('constructor', this.panel);
    // console.log('constructor', this.panelInstances);
  }

  ngOnInit(): void {
    // console.log('ngOninit', this.box.nativeElement);
    // console.log('ngOnint', this.boxs);
    // console.log('ngOninit', this.panelInstance.name);
    // console.log('ngOninit', this.panelInstance.el.nativeElement);
    // console.log('ngOnInit', this.panel.name);
    // console.log('ngOnint', this.panelInstances);

  }

  ngAfterViewInit(): void {
    // console.log('afterviewinit', this.box.nativeElement);
    // console.log('viewinit', this.boxs);
    // console.log('afterViewInit', this.panelInstance.name);
    // console.log('afterViewInit', this.panelInstance.el.nativeElement);
    // console.log('ngAfterViewInit', this.panel.name);
    // console.log('ngAfterViewinit', this.panelInstances);
    this.panelInstances.changes.subscribe(changes => {
      console.log('changes', changes);
    });
  }


}
