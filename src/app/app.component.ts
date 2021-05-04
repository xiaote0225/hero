import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `
  //   <b>inline mode</b>
  //   <h1 class="title">{{ title }}</h1>
  //   <p>name:{{ heroName }}</p>
  // `,
  // styles:[`
  //   b {
  //     color:red;
  //   }
  // `]
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user="madao";
  madaoPic="../assets/images/icon-play-cover.png";
  colspan=2;
  isDisabled=true;
  customTitle="一段文字001";
  customTitle1="一段文字002";
  customTitle3="一段文字003";

  user2 = {
    name: 'madao',
    pic: this.madaoPic
  };
}
