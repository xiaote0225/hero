import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ref-component',
  templateUrl: './ref-component.component.html',
  styleUrls: ['./ref-component.component.scss']
})
export class RefComponentComponent implements OnInit {
  sizeVal: number = 16;

  constructor() { }

  ngOnInit(): void {
  }

  log(val:string): void{
    console.log('val',val);
  }

}
