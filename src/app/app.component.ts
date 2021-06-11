import { Component, EventEmitter, OnInit } from '@angular/core';
import { TransferItem } from './transfer-panel/transfer-panel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  initList: TransferItem[] = [];

  ngOnInit(): void {
   this.setList();
  }

  setList(){
    this.initList = [];
    const prefix = 'item' + Date.now().toString().slice(-3);
    for(let i = 0; i < 20; i++){
      this.initList.push({
        key: prefix + '_' + i,
        value: `${prefix}${i+1}`,
        checked: i % 6 === 0
      });
    }
  }


}
