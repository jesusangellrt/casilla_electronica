import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'logo-section-ext',
  templateUrl: './logo-section-ext.component.html'
})
export class LogoSectionExtComponent implements OnInit {

  @Input() logo: string;
  @Input() nombreDesc: string;

  constructor() { }

  ngOnInit() {
  }

}