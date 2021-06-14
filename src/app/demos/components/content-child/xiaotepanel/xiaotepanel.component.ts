import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-xiaotepanel',
  templateUrl: './xiaotepanel.component.html',
  styleUrls: ['./xiaotepanel.component.scss']
})
export class XiaotepanelComponent implements OnInit {

  constructor(readonly el: ElementRef) { }

  ngOnInit(): void {
  }

}
