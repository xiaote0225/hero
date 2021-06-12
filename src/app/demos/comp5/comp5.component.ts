import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp5',
  template: `
    <p>
      comp5 works!
    </p>
  `,
  styleUrls: ['./comp5.component.scss']
})
export class Comp5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
