import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ifElse';
  // show=false;
  // show="yes";
  show: boolean = false ; 
  change(type:string)
  {
    console.log("the hide & show");
    this.show = ! this.show;
  }
}
