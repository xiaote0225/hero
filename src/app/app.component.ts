import { Component, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string = '';
  testval: string = '';
  val: string = '';
  expandVal: string = '';

  setVal(){
    this.name = 'nancy';
  }

  onclick(event: any): void{
    console.log(event);
    this.testval = event.target.value;
  }

  onSubmit(f:NgForm){
    console.log('f.value',f.value);
    console.log('f.valid',f.valid);
  }

}
