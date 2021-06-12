import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-detail-component',
  template: `
    <p>
      Today's Item {{item}}
    </p>
  `,
  styleUrls: ['./item-detail-component.component.scss']
})
export class ItemDetailComponentComponent implements OnInit {
  @Input('abc') item: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
