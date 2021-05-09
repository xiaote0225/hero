import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onClick(){
    console.log('onClick');
  }
  onClick1(event: MouseEvent){
    console.log('event',event);
    console.log('event.target',event.target);
  }
  onInput(event: KeyboardEvent){
    console.log('event',event);
    console.log('event',event.target);
    console.log('event',(event.target as HTMLInputElement).value);
  }
  clickParent(){
    console.log('parent......');
  }
  clickChild(event:MouseEvent){
    event.stopPropagation();
    console.log('child......');
  }
}
