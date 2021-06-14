import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, EmbeddedViewRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tpl-container',
  templateUrl: './tpl-container.component.html',
  styleUrls: ['./tpl-container.component.scss']
})
export class TplContainerComponent implements OnInit, AfterViewInit {

  @ViewChild('firstContainer', { read: ViewContainerRef, static: false }) readonly firstContain!: ViewContainerRef;

  @ViewChild('firstTpl', { read: TemplateRef}) readonly firstTpl!: TemplateRef<void>;
  @ViewChild('secondTpl', { read: TemplateRef }) readonly secondTpl!: TemplateRef<void>;
  @ViewChild('thirdTpl', { read: TemplateRef }) readonly thirdTpl!: TemplateRef<void>;
  @ViewChild('fourthTpl', { read: TemplateRef }) readonly fourTpl!: TemplateRef<void>;
  @ViewChild('firstTpl', { read: TemplateRef }) readonly firstTpl1!: TemplateRef<void>;
  @ViewChild('freeTpl', { read: TemplateRef }) readonly freeTpl!: TemplateRef<null>;
  @ViewChild('secondContainer', {read: ViewContainerRef,static: true}) readonly secondContain!: ViewContainerRef;

  private freeViewRef: EmbeddedViewRef<null>;



  constructor() {
    console.log('constructor', this.freeTpl);
    this.freeViewRef = this.freeTpl?.createEmbeddedView(null);

  }

  insert(tpl: TemplateRef<void>): void{
    this.firstContain.insert(tpl.createEmbeddedView());
  }

  insertAll(): void{
    [this.firstTpl, this.secondTpl, this.thirdTpl, this.fourTpl].forEach(tpl => {
      this.firstContain.insert(tpl.createEmbeddedView());
    });
  }

  judge(): void{
    console.log(this.firstTpl);
    console.log(this.firstTpl1);
    console.log(this.firstTpl === this.firstTpl1);
  }

  insertFree(): void{
    this.firstContain.insert(this.freeViewRef);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log('viewInit', this.freeTpl);
    this.freeViewRef = this.freeTpl.createEmbeddedView(null);
    this.firstContain.createEmbeddedView(this.fourTpl);
  }

  getOne(): void{
    console.log(this.firstContain.get(2));
    console.log(this.firstContain.indexOf(this.freeViewRef));
  }

  insertFree1(): void {
    this.firstContain.insert(this.freeViewRef, 1);
  }

  move(): void {
    this.firstContain.move(this.freeViewRef, 2);
  }

  move2To4(): void {
    const view = this.firstContain.detach(1);
    this.firstContain.insert( view!, 3);
  }

  move2ToOther(): void{
    const view = this.firstContain.detach(1);
    this.secondContain.insert(view!);
  }

}
