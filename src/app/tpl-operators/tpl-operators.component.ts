import { Component, OnInit } from '@angular/core';
import { Hero } from '../ngfor/ngfor.component';

@Component({
  selector: 'app-tpl-operators',
  templateUrl: './tpl-operators.component.html',
  styleUrls: ['./tpl-operators.component.scss']
})
export class TplOperatorsComponent implements OnInit {
  title = "aBc";
  obj = {
    name:'昂虚N',
    time: 'jskldjfl',
    price: '$3333'
  };
  now = Date.now();

  hero: Hero | undefined;

  name: string | null = '';


  testStr: string | null = '';

  constructor() {
    const heroName: string = this.name!;
    if(this.name){
      const heroName: string = this.name;
    }

    const testVal: string = this.testStr!;
    if(this.testStr){
      const testVal1: string = this.testStr;
    }


    setTimeout(() =>{
      this.hero = {
        id: 'abc',
        name: 'ljfdlsjakl'
      };
    },2000);
  }

  ngOnInit(): void {
  }

}
