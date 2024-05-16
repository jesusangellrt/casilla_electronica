import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
 

@Component({
  selector: 'app-avance-resultados-extranet',
  templateUrl: './avance-resultados-extranet.component.html',
  styleUrls: ['./avance-resultados-extranet.component.css']
})
export class AvanceResultadosExtranetComponent implements OnInit {
  @Input() visible:boolean=false;
  @Input() selected_encuesta:any={};
  @Input() EncuestaAvanceList:any=[];
  @Output() onCloseModalResultados: EventEmitter<boolean> = new EventEmitter();
  
  formMACRO:FormGroup;
  constructor(   
  ) {  
  }
 
  ngOnInit() {
    let selected = this.selected_encuesta; 
  } 
  close_modal(){
    this.onCloseModalResultados.emit(true);
  } 
}
