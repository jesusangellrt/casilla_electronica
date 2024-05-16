import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-options-ext',
  templateUrl: './menu-options-ext.component.html'
})
export class MenuOptionsExtComponent implements OnInit {

  @Input() options: Array<object>;

  constructor() { }

  ngOnInit() {
  }

}