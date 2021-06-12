import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.scss']
})
export class ItemOutputComponent implements OnInit {
  @Output('123') outVal = new EventEmitter<string>();
  onClick(val: string): void{
    this.outVal.emit(val);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
