import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-without-style',
  templateUrl: './without-style.component.html',
  styles: [
    '.flag{color:red}'
  ]
})
export class WithoutStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
