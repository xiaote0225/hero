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
  theme = 'primary';
  isSuccess = true;
  btnCls = "btn btn-primary";
  btnCls2 = ['btn','btn-success'];
  btnCls3 = {
    'btn': true,
    'btn-info': true
  };
  style1 = 'width: 200px;height: 50px;text-align: center;border: 1px solid;line-height:50px;';
  style2 = ['width','200px','height','50px','text-align','center','border','1px solid'];
  style3 = {
    width: '200px',
    height: '50px',
    'text-align': 'center',
    border: '1px solid'
  };
}
