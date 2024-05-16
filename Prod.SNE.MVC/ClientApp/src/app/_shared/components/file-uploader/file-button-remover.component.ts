import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-icon-remove',
  template: `<button class="btn btn-secondary-custom btn-xs" type="button"            
             (click)="onClickButton(item)"><i class="fa fa-trash"></i></button>`
})
export class FileButtonRemoverComponent implements OnInit {

  @Input() onClickButton: Function;
  @Input() item: any;
  constructor() { }
  ngOnInit() {
  }
  
}
