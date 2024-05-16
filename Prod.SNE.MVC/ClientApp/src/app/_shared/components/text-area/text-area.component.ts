import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-area',
  template: `
    <textarea rows="{{rowCount}}"  
              class="form-control"
              (paste)="true"
              name="Name"
              [disabled]="disabled"
              [(ngModel)] = "Model"
              (ngModelChange)="handleChange($event)"
              (keypress) = "goKeypress"
              [ngClass]="{'textarea-resize': resize}"               
              ></textarea>
    <h6 class="pull-right" style="margin-bottom: 0px; margin-top: 5px;">{{caracteres}} restantes</h6>
  `,
  styles:[
    `
      .textarea-resize{
        resize: none;
      }
      
    `
  ]
})
export class TextAreaComponent implements OnInit {

  @Input() rowCount: number;
  @Input() max: number = 200;
  @Input() resize: boolean = false;
  @Input() Model: any;
  @Input() Name: any;
  @Input() disabled: boolean = false;
  @Output() ModelChange = new EventEmitter();
  
  restantes: number;
  tamanio: number;
  caracteres:number;
  goKeypress: boolean = true;

  constructor() { }

  ngOnInit() {
    this.caracteres = this.max;
  }
  handleChange = (value) => {
    this.caracteres = this.max - this.Model.length;
    if(this.caracteres < 0 )
    {
      this.Model = this.Model.substr(0, this.max);
      this.caracteres = 0;
    }
    this.goKeypress = this.caracteres > 0;        
    this.ModelChange.emit(this.Model);   
  };
}
