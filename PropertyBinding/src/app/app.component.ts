import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PropertyBinding';
  name="prem";
  disable:boolean=false;
  change(type:string) 
  {
    console.log(type);
     type==='dis'? this.disable===true ? this.disable==true: this.disable=true : this.disable=false;
     console.log(this.disable);
  }
}
