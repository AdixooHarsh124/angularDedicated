import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nestedLoop';
  users=[
    {name:"anil",phone:"5555",
  social:[
    "instal","facebook","whatsapp"
  ],


  },
    {
      name:"sidhu",
      phone:"5551",
      social:[
      "instal","facebook","whatsapp"
    ]
  },
    {name:"pawn",phone:"5552",
    social:[
      "instal","facebook","whatsapp"
    ]
  }
  ]
}
