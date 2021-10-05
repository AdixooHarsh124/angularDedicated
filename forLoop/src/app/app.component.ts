import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forLoop';
  users=['anil','sidhu','san','peter'];
  userDetails=[
    {
      name:'Anil',
      email:'harshit@gmail.com',
      phone:"8888"
    },
    {
      name:'bhasker',
      email:'bhasker@gmail.com',
      phone:"8881"
    },
    {
      name:'same',
      email:'same@gmail.com',
      phone:"8882"
    },
    {
      name:'peter',
      email:'peter@gmail.com',
      phone:"8883"
    }

  ]
}
