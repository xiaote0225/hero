import { Component, OnInit } from '@angular/core';

export interface User {
  id: string;
  name: string;
  canFly: boolean;
}

const users: User[] = [
  {
    id: '001',
    name: 'user001',
    canFly: true
  },
  {
    id: '002',
    name: 'user002',
    canFly: true
  },
  {
    id: '003',
    name: 'user003',
    canFly: false
  },
  {
    id: '004',
    name: 'user004',
    canFly: true
  },
  {
    id: '005',
    name: 'user005',
    canFly: false
  }
];

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  object: {[key: number]: string} = {2: 'foo', 1: 'bar'};

  map = new Map([[2, 'second'], [1, 'first'], [3, 'third']]);

  power = 1;
  factor = 1;

  currenUser: User[] = [];

  addHero(val: string): void{
    // 不改变引用管道不生效
    // this.currenUser.push({
    //   id: '__' + Date.now(),
    //   name: val,
    //   canFly: true
    // });

    this.currenUser = [...this.currenUser, {id: '_' + Date.now(), name: val, canFly: true}];
  }

  constructor() { }

  ngOnInit(): void {
    this.currenUser = users;
  }

}
