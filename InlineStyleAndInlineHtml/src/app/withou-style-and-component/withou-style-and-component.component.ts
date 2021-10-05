import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withou-style-and-component',
  template: `
    <h1 class="flage">
      withou-style-and-component works!
    </h1>
  `,
  styles: [
    `.flage{color:blue }`
  ]
})
export class WithouStyleAndComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
