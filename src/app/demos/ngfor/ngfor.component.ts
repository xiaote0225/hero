import { Component, OnInit } from '@angular/core';
import Heroes from './heroes';

export interface Hero {
  id: string;
  name: string;
}

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {
  value = '';
  heroes: Hero[] =  Heroes;
  constructor() { }
  add(){
    this.heroes.push({
      id:'001'+ Date.now(),
      name: 'name' + Date.now()
    });
  }

  sub(){
    this.heroes = this.heroes.slice(0,this.heroes.length - 1);
  }

  reset(){
    this.heroes = [
      {
        id: 'hero_0update',
        name: '盖伦update'
      },
      {
        id: 'hero_1update',
        name: '赵信update'
      },
      {
        id: 'hero_2',
        name: '嘉文'
      },
      {
        id: 'hero_3update',
        name: '易大师update'
      },
      {
        id: 'hero_3update',
        name: '泰达米尔update'
      }
    ];
  }

  ngOnInit(): void {
  }

  trackByHero(index:number,hero:Hero):string{
    return hero.id;
  }

}
