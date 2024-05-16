import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import { Router } from '@angular/router';
import { RespuestaService } from "@app/_core/services/respuesta.service";
import { NzModalService } from "ng-zorro-antd";
import { PERMISOS } from '../../enumerados/permisos.enumerados';

@Component({
    selector: "app-header",
    styles: [`
      .btn_hoverable:hover{cursor: pointer; }
    `],
    templateUrl: "./app-header.component.html"
})
export class AppHeaderComponent implements OnInit {
  @Input() logo: string;
  @Input() nombreDesc: string;
  @Input() loginPath: string;
  @Input() menuOptions: Array<object>;
  @Input() userFullname: string;
  @Input() roles: Array<any>;
  @Input() rol: any = {};
  
  @Output() onCambioRol: EventEmitter<any>;
  constructor(
    private router: Router,
    private modal: NzModalService,
    private respuesta_s:RespuestaService,
  ) {
    this.onCambioRol = new EventEmitter<any>()
  }

  _permisos = PERMISOS;
  nombre_rol:string='';
  ngOnInit() {
    localStorage.removeItem("is_filling");
    let role = localStorage.getItem('current_role');
    this.nombre_rol = this.roles.find(f=>f.IdRol==this.rol.IdRol)?this.roles.find(f=>f.IdRol==this.rol.IdRol).DescRol:'';
  }
  logOut=()=>{
    let is_filling = localStorage.getItem("is_filling");
    if(is_filling=="true"){
      let is_filling_content = localStorage.getItem("is_filling_content");
      let json= JSON.parse(is_filling_content);
      let str=json.es_anonima?'Perderá los datos registrados hasta el momento.':'Podrás volver a ingresar y responder desde donde te quedaste.';
      this.modal.confirm({
        nzTitle: 'Confirmación de salir de encuesta',
        nzContent: '¿Esta seguro de salir de la plataforma sin completar su encuesta?<br>'+str,
        nzOkText: 'Si',
        nzOkType: 'primary',
        nzCancelText: 'No',
        nzOnOk: () => {
          if(!json.es_anonima){
            let id_pregunta = json.id_pregunta;
            this.respuesta_s._UpdatePreguntaActualEncuesta(json.id_encuesta,json.pageIndex,json.id_pregunta,JSON.stringify(json.respuesta), 1,JSON.stringify(json.paginado))
            .then((datos) => {
              //NAVEGAR A PANTALLA DE FINALIZACION
              //this.router.navigate(['/Account/Logout']);
              window.location.href = '/Account/Logout';
            })
            .catch(() => {});
          }else{
            window.location.href = '/Account/Logout';
            //this.router.navigate(['/Account/Logout']);
          }
          localStorage.removeItem("show_SuperEdit");
        },
        nzOnCancel: () =>{}
      });
    }else{
      window.location.href = '/Account/Logout';  
    }
  }
  changeRole = (item) => {
    let is_filling = localStorage.getItem("is_filling");
    localStorage.removeItem("show_SuperEdit");
    if(is_filling=="true"){
      let is_filling_content = localStorage.getItem("is_filling_content");
      let json= JSON.parse(is_filling_content);
      let str=json.es_anonima?'Perderá los datos registrados hasta el momento.':'Podrás volver a ingresar y responder desde donde te quedaste.';
      this.modal.confirm({
        nzTitle: 'Confirmación de salir de encuesta',
        nzContent: '¿Esta seguro de salir de la plataforma sin completar su encuesta?<br>'+str,
        nzOkText: 'Si',
        nzOkType: 'primary',
        nzCancelText: 'No',
        nzOnOk: () => {
          if(!json.es_anonima){
            let id_pregunta = json.id_pregunta;
            this.respuesta_s._UpdatePreguntaActualEncuesta(json.id_encuesta,json.pageIndex,json.id_pregunta,JSON.stringify(json.respuesta), 1,JSON.stringify(json.paginado))
            .then((datos) => {
              //NAVEGAR A PANTALLA DE FINALIZACION
              this.onCambioRol.emit(item);
              this.nombre_rol=item.DescRol;
            })
            .catch(() => {});
          }else{this.onCambioRol.emit(item); this.nombre_rol=item.DescRol;}
        },
        nzOnCancel: () =>{}
      });
      //this.onCambioRol.emit(item);
    }else{
      this.onCambioRol.emit(item);
      this.nombre_rol=item.DescRol;
    }
  };

  seleccionarAdministrador() {
    this.router.navigate(['/sistema/gestion']);      
  };
  seleccionarSeguridad() {
    this.router.navigate(['/seguridad']);      
  };
}
