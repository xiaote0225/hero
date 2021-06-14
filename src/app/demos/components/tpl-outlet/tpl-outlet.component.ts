import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tpl-outlet',
  templateUrl: './tpl-outlet.component.html',
  styleUrls: ['./tpl-outlet.component.scss']
})
export class TplOutletComponent implements OnInit {
  @Input()
  render!: TemplateRef<any>;

  myContext = {$implicit: 'World', abc: 'wanxun'};

  constructor() { }

  ngOnInit(): void {
  }

}
