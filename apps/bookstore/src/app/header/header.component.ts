import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'myorg5-header',
  template: `
  	<h1>{{ title }}</h1>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title;

  constructor() { }

  ngOnInit(): void {
  }

}
