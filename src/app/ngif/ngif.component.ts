import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent implements OnInit {
  condition: boolean = true;
  condition2: boolean = true;
  condition3: boolean = true;
  condition4: boolean = true;
  condition5: boolean = true;

  // elseblock123 : TemplateRef<any> = null;
  // @ViewChild('firstEle',{static: true})
  // primaryBlock: TemplateRef<any> = null;


  constructor() {

    // this.elseblock123 = this.primaryBlock;
  }

  ngOnInit(): void {
  }

}
