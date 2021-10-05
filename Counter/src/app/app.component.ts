import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter';
  base:number=0;
  counter(sign:string)
  {
    sign==='add'? this.base<10?this.base++:this.base: this.base>0?this.base--:this.base;
  }
}
