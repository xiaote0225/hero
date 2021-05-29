import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  size = 17;
  itemVal = '666666';
  receiveVal(str: string): void{
    console.log('receive val',str);
  }

}
