import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EncuestaData, EncuestasService } from '@app/_core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-re-edit-encuesta-data-extranet',
  templateUrl: './re-edit-encuesta-data-extranet.component.html',
  styleUrls: ['./re-edit-encuesta-data-extranet.component.css']
})
export class ReEditEncuestaDataExtranetComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private  ref_change : ChangeDetectorRef,
    private _formBuilder: FormBuilder,
    private router: Router,
    private encuesta_s:EncuestasService,
    private spinner: NgxSpinnerService,
  ) { }

  id_encuesta:number=0
  encuesta_data:EncuestaData={};
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
			if (id && Number(id) > 0) {
        this.id_encuesta = Number(id);
        //encuesta_data
        this.spinner.show();
        
        this.encuesta_s._getEncuestaDataByID(Number(id)).then(datos => {
          this.encuesta_data = datos.data;
          this.data_valid=true;
          if(this.encuesta_data.encuesta.es_todos){
            if(this.encuesta_data.encuesta.es_con_seccion_pregunta){
              this.tabs=[
                {title:"Datos", disabled:false},
                {title:"Secciones", disabled:!this.data_valid},
                {title:"Preguntas", disabled:!this.data_valid}
              ];
            }else{
              this.tabs=[
                {title:"Datos", disabled:false},
                {title:"Preguntas", disabled:!this.data_valid}
              ];
            }
          }else{
            if(this.encuesta_data.encuesta.es_con_seccion_pregunta){
              this.tabs=[
                {title:"Datos", disabled:false},
                {title:"Secciones", disabled:false},
                {title:"Preguntas", disabled:false}
              ];
            }else{
              this.tabs=[
                {title:"Datos", disabled:false},
                {title:"Preguntas", disabled:false}
              ];
            }            
          }
          this.index_tab=0;
          this.ref_change.detectChanges();
          this.ref_change.markForCheck();
          this.spinner.hide();
        }).catch(err => {});
      }else{
        this.index_tab=0;
        this.tabs=[
          {title:"Datos", disabled:false},
          {title:"Preguntas", disabled:true},
          {title:"Encuestados", disabled:true}
        ];
      }
    });
  }

  data_valid=false;
  tabs=[
    {title:"Datos", disabled:false},
    {title:"Preguntas", disabled:!this.data_valid},
    //{title:"Encuestados", disabled:!this.data_valid}
  ];

  index_tab=null;
  disable_preguntas=true;
  show_tab_by_index=(index_tab)=>{
    this.index_tab=index_tab;
  }



  show_encuestados_tab=false;
  handleChangeAllPersonalStatus=(status:boolean)=>{
    if(status!=undefined){
      if(!status){
        this.tabs=[
          {title:"Datos", disabled:false},
          {title:"Preguntas", disabled:!this.data_valid},
          {title:"Encuestados", disabled:!this.data_valid}
        ];
      
      }else{
        this.tabs=[
          {title:"Datos", disabled:false},
          {title:"Preguntas", disabled:!this.data_valid},
        ];
      
      }
      this.show_encuestados_tab=status;
      this.ref_change.detectChanges();
      this.ref_change.markForCheck();
    }
  }

  handleSaveUpdateEncuesta=(datos)=>{
    this.encuesta_data={...datos};
    this.id_encuesta=datos.encuesta.id_encuesta;
    this.data_valid=true;
    this.tabs.forEach(e=>{
      e.disabled=false
    });
    this.index_tab=1;
  }

  handlePublishSuccess=(is_publised:boolean)=>{
    if(is_publised){
      this.router.navigate(['/sistema/gestion-extranet/gestor-encuestas-extranet']);
    }
  }
  handleGoDatos=(go_previous:boolean)=>{
    if(go_previous){
      this.index_tab=0;
    }
  }
  handleGoEncuestados=(go_next:boolean) => {
    if(go_next){
      this.index_tab=2;
    }
  }
  handleGoPreguntas=(go_previous:boolean)=>{
    if(go_previous){
      this.index_tab=1;
    }
  }
}
