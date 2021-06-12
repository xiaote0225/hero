import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor = 'pink';

  constructor(private elementRef: ElementRef) {
    // console.log(elementRef);
    // elementRef.nativeElement.style.color = this.highlightColor;
    // this.setColor(this.highlightColor);
  }

  @HostListener('mouseenter',['$event'])
  onMouseEnter(event: any){
    console.log('event',event);
    this.setColor(this.highlightColor);
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.setColor('');
  }

  private setColor(colorStr: string){
    console.log('setColor',colorStr);
    this.elementRef.nativeElement.style.color = colorStr;
  }

}