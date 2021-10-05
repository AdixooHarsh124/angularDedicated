import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-without-html',
  template: `
    <p class="flage">
      without-html works!
    </p>
  `,
  styleUrls: ['./without-html.component.css']
})
export class WithoutHtmlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
