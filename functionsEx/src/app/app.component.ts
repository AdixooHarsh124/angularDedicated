import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'functionsEx';
  code=1;


  getData(){
    this.code=this.code+1;
    // console.log(this.code);
  }

  getSetString(firstname:string,lastName:string){
    console.log("ih from setString");
    console.log(firstname+" " +lastName);
  }
  getSetNumber(nub:number){
    console.log(nub);
    console.log("ih from setNumber");
  }
}
