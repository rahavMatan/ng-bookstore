import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
    .header {
      margin-bottom:20px;
      margin-top:20px;
      padding-left:10px;
      width:100%;
    }
  `]

})
export class AppComponent {
  title = 'bookstore';
}
