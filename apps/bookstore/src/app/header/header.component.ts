import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myorg5-header',
  template: `
  	<h1>BOOKSTORE</h1>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
