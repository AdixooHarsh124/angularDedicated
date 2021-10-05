import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventsEx';
  getdata(val:string)
  {
    console.log(val);
  }
  over(valu:string)
  {
     console.log(valu);
  }
  leave(value:string )
  {
    console.log(value);
  }
}
