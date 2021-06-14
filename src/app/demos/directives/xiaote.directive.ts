import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export class XiaoteContext{
  $implicit = false;
  appXiaote = false;
  attr = '';
}

@Directive({
  selector: '[appXiaote]'
})
export class XiaoteDirective {

  private context = new XiaoteContext();

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

  @Input()
  set appXiaote(condition: boolean){
    this.context.$implicit = this.context.appXiaote = condition;
    this.context.attr = 'abc';
    if(!condition){
      this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
    }else if (condition){
      this.viewContainerRef.clear();
    }
  }

}
