import { Component, EventEmitter, OnInit } from '@angular/core';
import { TransferItem } from './demos/transfer-panel/transfer-panel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  color: string = '';

  ngOnInit(): void {
  }

}
