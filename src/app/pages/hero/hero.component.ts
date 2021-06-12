import { Component, OnInit } from '@angular/core';
import { Hero, HeroArg } from 'src/app/config/types';
import Heros from '../../config/heroes';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  searchParams: HeroArg = {
    name: '',
    job: '',
    sort: 'desc'
  };
  heros: Hero[] = Heros;
  constructor() {
    console.log(this.heros);
  }

  ngOnInit(): void {
  }

  search() {
    console.log(this.searchParams);
  }

}
